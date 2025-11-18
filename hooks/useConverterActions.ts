// hooks/useConverterActions.ts
import { useCallback } from "react";
import { useConverterStore } from "@/stores/useConverterStore";
import { PDFConverter } from "@/lib/pdfConverter";

export const useConverterActions = () => {
  const {
    images,
    settings,
    setConversionStatus,
    setConversionProgress,
    setPdfBlob,
    reset,
  } = useConverterStore();

  const handleConvert = useCallback(async () => {
    if (images.length === 0) {
      alert("لطفاً ابتدا تصاویر را آپلود کنید");
      return;
    }

    setConversionStatus("converting");

    try {
      // Validate and convert images
      const { valid, invalid } = await PDFConverter.validateImages(images);

      if (invalid.length > 0) {
        const proceed = confirm(
          `تصاویر زیر قابل پردازش نیستند:\n${invalid.join("\n")}\n\nفقط ${
            valid.length
          } تصویر سالم تبدیل خواهد شد. ادامه می‌دهید؟`
        );

        if (!proceed) {
          setConversionStatus("idle");
          return;
        }
      }

      if (valid.length === 0) {
        alert("هیچ تصویر سالمی برای تبدیل وجود ندارد.");
        setConversionStatus("idle");
        return;
      }

      const blob = await PDFConverter.convertImagesToPDF(
        valid,
        settings,
        setConversionProgress
      );

      setPdfBlob(blob);
      setConversionStatus("completed");
    } catch (error) {
      console.error("Conversion error:", error);
      setConversionStatus("error");
      alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
    }
  }, [
    images,
    settings,
    setConversionStatus,
    setConversionProgress,
    setPdfBlob,
  ]);

  const handleDownloadPDF = useCallback(() => {
    const { pdfBlob } = useConverterStore.getState();
    if (!pdfBlob) return;

    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `images-to-pdf-${Date.now()}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  const handleDownloadZIP = useCallback(async () => {
    if (images.length === 0) return;

    setConversionStatus("converting");
    setConversionProgress({
      current: 0,
      total: images.length,
      status: "در حال ساخت ZIP...",
    });

    try {
      const zipBlob = await PDFConverter.createZipFromImages(images);
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `images-${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setConversionStatus("idle");
    } catch (error) {
      console.error("ZIP creation error:", error);
      alert("خطا در ساخت ZIP");
      setConversionStatus("idle");
    }
  }, [images, setConversionStatus, setConversionProgress]);

  return {
    handleConvert,
    handleDownloadPDF,
    handleDownloadZIP,
    resetConverter: reset,
  };
};
