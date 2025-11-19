///home/lib/pdfConverter.ts
import { ImageFile, PDFSettings, ConversionProgress } from "@/types";
import jsPDF from "jspdf";

export class PDFConverter {
  static async convertImagesToPDF(
    images: ImageFile[],
    settings: PDFSettings,
    onProgress: (p: ConversionProgress) => void
  ): Promise<Blob> {
    // بررسی اگر تصویری وجود ندارد
    if (!images || images.length === 0) {
      throw new Error("هیچ تصویری برای تبدیل وجود ندارد");
    }

    const pdf = new jsPDF({
      orientation: settings.orientation,
      unit: "mm",
      format: settings.paperSize.toLowerCase(),
    });

    const margin = this.getMargin(settings.margin);
    const pageSize = pdf.internal.pageSize;
    const contentW = pageSize.getWidth() - margin * 2;
    const contentH = pageSize.getHeight() - margin * 2;

    let processedCount = 0;

    // استفاده مستقیم از تصاویر بدون اعتبارسنجی اضافی
    const validImages = images.filter((img) => img && img.file);

    if (validImages.length === 0) {
      throw new Error("هیچ تصویر معتبری برای تبدیل وجود ندارد");
    }

    console.log(`📄 Starting PDF conversion for ${validImages.length} images`);

    for (let i = 0; i < validImages.length; i++) {
      const img = validImages[i];
      processedCount++;

      onProgress({
        current: processedCount,
        total: validImages.length,
        status: `در حال پردازش ${processedCount} از ${validImages.length}: ${img.name}`,
      });

      try {
        // استفاده مستقیم از فایل
        const base64 = await this.fileToBase64(img.file, settings.quality);
        const dims = await this.getImageDimensionsFromFile(img.file);
        const scaled = this.scaleToFit(
          dims.width,
          dims.height,
          contentW,
          contentH
        );

        // اگر اولین تصویر نیست، صفحه جدید اضافه کن
        if (i > 0) {
          pdf.addPage();
        }

        // تعیین فرمت تصویر بر اساس نوع فایل
        const format = this.getImageFormat(img.file);

        pdf.addImage(
          base64,
          format,
          margin + (contentW - scaled.width) / 2,
          margin + (contentH - scaled.height) / 2,
          scaled.width,
          scaled.height,
          `image_${i}`,
          "MEDIUM"
        );

        console.log(`✅ Added image ${i + 1}: ${img.name}`);

        // تاخیر کوچک برای جلوگیری از مسدود شدن thread
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`❌ Error processing ${img.name}:`, error);

        // اگر تصویر اول خطا داد و تصویر دیگری وجود دارد، ادامه بده
        if (i === 0 && validImages.length > 1) {
          onProgress({
            current: processedCount,
            total: validImages.length,
            status: `خطا در پردازش ${img.name} - ادامه با تصاویر بعدی`,
          });
          continue;
        }

        // // اگر تنها تصویر خطا داد یا آخرین تصویر خطا داد
        // if (validImages.length === 1 || i === validImages.length - 1) {
        //   throw new Error(`خطا در پردازش تصویر: ${img.name}`);
        // }
      }
    }

    onProgress({
      current: validImages.length,
      total: validImages.length,
      status: "در حال تولید فایل PDF...",
    });

    try {
      // استفاده از روش مطمئن‌تر برای تولید PDF
      const pdfOutput = pdf.output("blob");
      console.log("🎉 PDF generated successfully");
      return pdfOutput;
    } catch (error) {
      console.error("خطا در تولید PDF:", error);
      throw new Error("خطا در تولید فایل PDF");
    }
  }

  // تشخیص فرمت تصویر
  private static getImageFormat(file: File): string {
    const type = file.type.toLowerCase();
    if (type.includes("png")) return "PNG";
    if (type.includes("jpeg") || type.includes("jpg")) return "JPEG";
    if (type.includes("webp")) return "WEBP";
    return "JPEG"; // پیش‌فرض
  }

  // تبدیل File به Base64 با استفاده از FileReader - بهبود یافته
  private static fileToBase64(file: File, quality: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const result = e.target?.result as string;
          if (!result) {
            reject(new Error("Failed to read file"));
            return;
          }

          // برای فایل‌های کوچک، مستقیماً از result استفاده کن
          if (file.size < 500000) {
            // کمتر از 500KB
            resolve(result);
            return;
          }

          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) {
              // اگر canvas در دسترس نیست، از result اصلی استفاده کن
              resolve(result);
              return;
            }

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // کیفیت بر اساس تنظیمات
            const qualityLevel =
              quality === "high" ? 0.9 : quality === "low" ? 0.6 : 0.8;

            try {
              // برای فرمت‌های مختلف
              const format = this.getImageFormat(file);
              if (format === "PNG") {
                const base64 = canvas.toDataURL("image/png");
                resolve(base64);
              } else {
                const base64 = canvas.toDataURL("image/jpeg", qualityLevel);
                resolve(base64);
              }
            } catch (conversionError) {
              // اگر تبدیل خطا داد، از فرمت اصلی استفاده کن
              console.warn(
                "Conversion failed, using original:",
                conversionError
              );
              resolve(result);
            }
          };

          img.onerror = () => {
            // اگر تصویر لود نشد، از result اصلی استفاده کن
            console.warn("Image load failed, using original file data");
            resolve(result);
          };

          img.src = result;
        } catch (error) {
          reject(error);
        }
      };

      // reader.onerror = () => {
      //   reject(new Error("Failed to read file"));
      // };

      reader.readAsDataURL(file);
    });
  }

  // گرفتن ابعاد تصویر از File - بهبود یافته
  private static getImageDimensionsFromFile(
    file: File
  ): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          resolve({ width: img.width, height: img.height });
        };
        img.onerror = () => {
          // اگر ابعاد قابل خواندن نبود، مقادیر پیش‌فرض برگردان
          console.warn("Cannot get image dimensions, using defaults");
          resolve({ width: 800, height: 600 });
        };
        img.src = e.target?.result as string;
      };

      reader.onerror = () => {
        // اگر فایل خوانده نشد، مقادیر پیش‌فرض برگردان
        console.warn("Cannot read file for dimensions, using defaults");
        resolve({ width: 800, height: 600 });
      };

      reader.readAsDataURL(file);
    });
  }

  // اعتبارسنجی فایل تصویر - ساده‌سازی شده
  private static async validateImageFile(file: File): Promise<boolean> {
    return new Promise((resolve) => {
      // بررسی اولیه فایل
      if (!file || !file.type.startsWith("image/")) {
        resolve(false);
        return;
      }

      // بررسی سایز فایل (حداکثر 50MB)
      if (file.size > 50 * 1024 * 1024) {
        resolve(false);
        return;
      }

      // بررسی فرمت‌های پشتیبانی شده
      const supportedFormats = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
        "image/gif",
        "image/bmp",
      ];

      if (!supportedFormats.includes(file.type.toLowerCase())) {
        resolve(false);
        return;
      }

      // اگر همه چیز OK بود، true برگردان
      resolve(true);
    });
  }

  // محاسبه اندازه مناسب برای قرارگیری در صفحه
  private static scaleToFit(w: number, h: number, maxW: number, maxH: number) {
    const ratio = Math.min(maxW / w, maxH / h);
    const scaledWidth = Math.max(w * ratio, 10); // حداقل 10mm
    const scaledHeight = Math.max(h * ratio, 10); // حداقل 10mm

    console.log(
      `📏 Original: ${w}x${h} -> Scaled: ${scaledWidth}x${scaledHeight}`
    );

    return {
      width: scaledWidth,
      height: scaledHeight,
    };
  }

  // محاسبه حاشیه
  private static getMargin(m: string): number {
    const margins = {
      none: 0,
      small: 5,
      medium: 10,
      large: 15,
    };
    return margins[m as keyof typeof margins] || margins.medium;
  }

  // ایجاد فایل ZIP از تصاویر
  static async createZipFromImages(images: ImageFile[]): Promise<Blob> {
    if (!images || images.length === 0) {
      throw new Error("هیچ تصویری برای فشرده‌سازی وجود ندارد");
    }

    try {
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();

      for (const img of images) {
        // استفاده از فایل اصلی
        zip.file(img.name, img.file);
      }

      return await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: { level: 6 },
      });
    } catch (error) {
      console.error("Error creating ZIP:", error);
      throw new Error("خطا در ساخت فایل ZIP");
    }
  }

  // متد کمکی برای بررسی سلامت تصاویر قبل از تبدیل - بهبود یافته
  static async validateImages(
    images: ImageFile[]
  ): Promise<{ valid: ImageFile[]; invalid: string[] }> {
    const valid: ImageFile[] = [];
    const invalid: string[] = [];

    if (!images || images.length === 0) {
      return { valid, invalid };
    }

    console.log(`🔍 Validating ${images.length} images...`);

    for (const img of images) {
      try {
        const isValid = await this.validateImageFile(img.file);
        if (isValid) {
          valid.push(img);
          console.log(`✅ Valid: ${img.name}`);
        } else {
          invalid.push(img.name);
          console.log(`❌ Invalid: ${img.name}`);
        }
      } catch (error) {
        console.warn(`⚠️ Validation error for ${img.name}:`, error);
        invalid.push(img.name);
      }
    }

    console.log(
      `📊 Validation result: ${valid.length} valid, ${invalid.length} invalid`
    );
    return { valid, invalid };
  }

  // بررسی محدودیت‌های فنی - بهبود یافته
  static checkTechnicalLimitations(images: ImageFile[]): {
    canProceed: boolean;
    warnings: string[];
    errors: string[];
  } {
    const warnings: string[] = [];
    const errors: string[] = [];

    if (!images || images.length === 0) {
      errors.push("هیچ تصویری انتخاب نشده است");
      return { canProceed: false, warnings, errors };
    }

    // بررسی تعداد تصاویر
    if (images.length > 100) {
      warnings.push("تعداد تصاویر زیاد ممکن است باعث کندی شود");
    }

    if (images.length > 200) {
      errors.push("تعداد تصاویر بیش از حد مجاز است (حداکثر 200 تصویر)");
    }

    // بررسی حجم کل
    const totalSize = images.reduce((sum, img) => sum + img.file.size, 0);
    if (totalSize > 100 * 1024 * 1024) {
      // 100MB
      warnings.push("حجم کل تصاویر زیاد است");
    }

    if (totalSize > 500 * 1024 * 1024) {
      // 500MB
      errors.push("حجم کل تصاویر بیش از حد مجاز است");
    }

    // بررسی فرمت‌های پشتیبانی شده
    const supportedFormats = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/bmp",
    ];

    const unsupportedImages = images.filter(
      (img) => !supportedFormats.includes(img.file.type.toLowerCase())
    );

    if (unsupportedImages.length > 0) {
      warnings.push(
        `تعداد ${unsupportedImages.length} تصویر با فرمت غیرمعمول وجود دارد`
      );
    }

    return {
      canProceed: errors.length === 0,
      warnings,
      errors,
    };
  }

  // متد جایگزین برای زمانی که URLها از بین رفته‌اند
  static async recreateImageUrls(images: ImageFile[]): Promise<ImageFile[]> {
    return images.map((img) => ({
      ...img,
      url: URL.createObjectURL(img.file),
    }));
  }
}
