// lib/pdfConverter.ts
import { ImageFile, PDFSettings, ConversionProgress } from "@/types";
import jsPDF from "jspdf";

export class PDFConverter {
  static async convertImagesToPDF(
    images: ImageFile[],
    settings: PDFSettings,
    onProgress: (p: ConversionProgress) => void
  ): Promise<Blob> {
    const pdf = new jsPDF({
      orientation: settings.orientation,
      unit: "mm",
      format: settings.paperSize.toLowerCase(),
    });

    const margin = this.getMargin(settings.margin);
    const pageSize = pdf.internal.pageSize;
    const contentW = pageSize.getWidth() - margin * 2;
    const contentH = pageSize.getHeight() - margin * 2;

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      onProgress({
        current: i + 1,
        total: images.length,
        status: `در حال پردازش ${i + 1} از ${images.length}`,
      });

      try {
        // استفاده از File به جای URL
        const base64 = await this.fileToBase64(img.file, settings.quality);
        const dims = await this.getImageDimensionsFromFile(img.file);
        const scaled = this.scaleToFit(
          dims.width,
          dims.height,
          contentW,
          contentH
        );

        pdf.addImage(
          base64,
          "JPEG",
          margin + (contentW - scaled.width) / 2,
          margin + (contentH - scaled.height) / 2,
          scaled.width,
          scaled.height
        );

        if (i < images.length - 1) pdf.addPage();
      } catch (error) {
        console.error(`Error processing ${img.name}:`, error);
        throw new Error(`خطا در پردازش تصویر: ${img.name}`);
      }
    }

    onProgress({
      current: images.length,
      total: images.length,
      status: "در حال تولید PDF...",
    });

    const arrayBuffer = pdf.output("arraybuffer");
    return new Blob([arrayBuffer], { type: "application/pdf" });
  }

  // تبدیل File به Base64
  private static fileToBase64(file: File, quality: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d")!;
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          resolve(
            canvas.toDataURL("image/jpeg", quality === "high" ? 0.95 : 0.8)
          );
        };
        img.onerror = reject;
        img.src = reader.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // گرفتن ابعاد از File
  private static getImageDimensionsFromFile(
    file: File
  ): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject();
      };
      img.src = url;
    });
  }

  private static scaleToFit(w: number, h: number, maxW: number, maxH: number) {
    const ratio = Math.min(maxW / w, maxH / h);
    return { width: w * ratio, height: h * ratio };
  }

  private static getMargin(m: string): number {
    return m === "none" ? 0 : m === "large" ? 20 : 10;
  }

  static async createZipFromImages(images: ImageFile[]): Promise<Blob> {
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    for (const img of images) {
      zip.file(img.name, img.file);
    }
    return zip.generateAsync({ type: "blob" });
  }
}
