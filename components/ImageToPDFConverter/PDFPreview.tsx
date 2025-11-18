// components/ImageToPDFConverter/PDFPreview.tsx
import { useConverterStore } from "@/stores/useConverterStore";
import { Eye, Smartphone, Tablet, Monitor, FileImage } from "lucide-react";

const getPaperDimensions = (paperSize: string, orientation: string) => {
  const dimensions: { [key: string]: { width: number; height: number } } = {
    A4: { width: 210, height: 297 },
    A3: { width: 297, height: 420 },
    letter: { width: 216, height: 279 },
    legal: { width: 216, height: 356 },
  };

  const size = dimensions[paperSize] || dimensions.A4;
  return orientation === "landscape"
    ? { width: size.height, height: size.width }
    : size;
};

const getMarginSize = (margin: string) => {
  const margins: { [key: string]: number } = {
    none: 0,
    small: 10,
    medium: 20,
    large: 30,
  };
  return margins[margin] || margins.medium;
};

export const PDFPreview = () => {
  const { settings, images, deviceView, setDeviceView } = useConverterStore();

  const dimensions = getPaperDimensions(
    settings.paperSize,
    settings.orientation
  );
  const margin = getMarginSize(settings.margin);

  // مقیاس‌های مختلف برای دستگاه‌های مختلف
  const scaleMap = {
    mobile: 0.5,
    tablet: 0.6,
    desktop: 0.7,
  };

  const scale = scaleMap[deviceView];
  const previewWidth = dimensions.width * scale;
  const previewHeight = dimensions.height * scale;
  const previewMargin = margin * scale;

  // انتخاب اولین تصویر برای پیش‌نمایش
  const previewImage = images.length > 0 ? images[0] : null;

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white/5 dark:bg-black/5 rounded-lg border border-gray-300/50 dark:border-gray-600/50">
      <div className="flex flex-col items-center justify-between w-full gap-2">
        <div className="flex items-center gap-2 text-sm text-nowrap font-medium text-gray-700 dark:text-gray-300">
          <Eye className="w-4 h-4" />
          پیش‌نمایش خروجی PDF
        </div>
        {/* Device View Selector */}
        <div className="flex gap-1 bg-white/10 dark:bg-black/10 rounded-lg">
          <button
            onClick={() => setDeviceView("mobile")}
            className={`p-1.5 rounded-md transition-colors ${
              deviceView === "mobile"
                ? "bg-primary/20 text-primary"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
            title="نمایش موبایل"
          >
            <Smartphone className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeviceView("tablet")}
            className={`p-1.5 rounded-md transition-colors ${
              deviceView === "tablet"
                ? "bg-primary/20 text-primary"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
            title="نمایش تبلت"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeviceView("desktop")}
            className={`p-1.5 rounded-md transition-colors ${
              deviceView === "desktop"
                ? "bg-primary/20 text-primary"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
            title="نمایش دسکتاپ"
          >
            <Monitor className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative bg-white shadow-lg rounded-sm border border-gray-300">
        {/* کاغذ */}
        <div
          className="bg-white relative"
          style={{
            width: `${previewWidth}px`,
            height: `${previewHeight}px`,
            padding: `${previewMargin}px`,
          }}
        >
          {/* محتوای نمونه - یک تصویر کامل */}
          <div className="w-full h-full border border-dashed border-gray-300/50 rounded flex flex-col items-center justify-center overflow-hidden bg-gray-50">
            {previewImage ? (
              <div className="w-full h-full flex items-center justify-center p-1">
                <img
                  src={previewImage.url}
                  alt={previewImage.name}
                  className="max-w-full max-h-full object-contain rounded"
                  onError={(e) => {
                    console.warn(
                      `❌ Image failed to load: ${previewImage.name}`
                    );
                    // اگر تصویر لود نشد، URL جدید ایجاد کن
                    const newUrl = URL.createObjectURL(previewImage.file);
                    e.currentTarget.src = newUrl;
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-4 text-center">
                <FileImage className="w-8 h-8 text-gray-400 mb-2" />
                <div className="text-xs text-gray-400">
                  عکسی برای نمایش وجود ندارد
                </div>
              </div>
            )}
          </div>

          {/* نشانگر جهت */}
          <div
            className={`absolute bottom-1 left-1 text-[8px] text-gray-400 ${
              settings.orientation === "landscape"
                ? "transform rotate-90 origin-left"
                : ""
            }`}
          >
            {settings.orientation === "portrait" ? "عمودی" : "افقی"}
          </div>
        </div>
      </div>

      {/* اطلاعات سایز */}
      <div className="text-xs text-gray-500 text-center">
        سایز: {settings.paperSize} • جهت:{" "}
        {settings.orientation === "portrait" ? "عمودی" : "افقی"} • حاشیه:{" "}
        {settings.margin === "none" ? "بدون" : settings.margin}
        {previewImage && (
          <span className="block mt-1">نمایش: {previewImage.name}</span>
        )}
      </div>
    </div>
  );
};
