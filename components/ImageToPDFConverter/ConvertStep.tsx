// components/ImageToPDFConverter/ConvertStep.tsx
import { useConverterStore } from "@/stores/useConverterStore";
import { useConverterActions } from "@/hooks/useConverterActions";
import {
  FileImage,
  Download,
  Folder,
  RefreshCw,
  ChevronRight,
  Settings,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface ConvertStepProps {
  onPreviousStep: () => void;
  onReset: () => void;
}

export const ConvertStep = ({ onPreviousStep, onReset }: ConvertStepProps) => {
  const { images, settings, conversionStatus, conversionProgress, pdfBlob } =
    useConverterStore();
  const { handleConvert, handleDownloadPDF, handleDownloadZIP } =
    useConverterActions();

  const OutputSection = () => {
    return (
      <div className="space-y-6">
        {/* نمایش خلاصه تنظیمات */}
        <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            خلاصه تنظیمات نهایی
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                جهت
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.orientation === "portrait" ? "عمودی" : "افقی"}
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                سایز
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.paperSize}
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                حاشیه
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.margin === "small"
                  ? "کوچک"
                  : settings.margin === "medium"
                  ? "متوسط"
                  : settings.margin === "large"
                  ? "بزرگ"
                  : "بدون حاشیه"}
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                کیفیت
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.quality === "low"
                  ? "پایین"
                  : settings.quality === "standard"
                  ? "استاندارد"
                  : "بالا"}
              </span>
            </div>
          </div>
        </div>

        {/* وضعیت تبدیل */}
        {conversionStatus === "idle" && (
          <div className="text-center space-y-6 p-6 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <FileImage className="w-16 h-16 mx-auto text-primary" />
            <div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                آماده برای تبدیل
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {images.length} عکس به PDF تبدیل خواهد شد
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleConvert}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect flex-1 sm:flex-none"
              >
                <Settings className="w-5 h-5" />
                شروع تبدیل
              </button>
              <button
                onClick={handleDownloadZIP}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none"
              >
                <Folder className="w-5 h-5" />
                دانلود ZIP
              </button>
            </div>
          </div>
        )}

        {conversionStatus === "converting" && (
          <div className="text-center space-y-6 p-6 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                در حال تبدیل...
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {conversionProgress.status}
              </p>
              <div className="space-y-2">
                <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        (conversionProgress.current /
                          conversionProgress.total) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {conversionProgress.current} از {conversionProgress.total}
                </p>
              </div>
            </div>
          </div>
        )}

        {conversionStatus === "completed" && pdfBlob && (
          <div className="text-center space-y-6 p-6 border border-green-500/20 rounded-lg bg-green-500/5 backdrop-blur-sm">
            <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
            <div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                تبدیل با موفقیت انجام شد!
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                فایل PDF شما آماده دانلود است
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect flex-1 sm:flex-none"
              >
                <Download className="w-5 h-5" />
                دانلود PDF
              </button>
              <button
                onClick={onReset}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none"
              >
                <RefreshCw className="w-5 h-5" />
                شروع جدید
              </button>
            </div>
          </div>
        )}

        {conversionStatus === "error" && (
          <div className="text-center space-y-6 p-6 border border-red-500/20 rounded-lg bg-red-500/5 backdrop-blur-sm">
            <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
            <div>
              <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                خطا در تبدیل
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                لطفاً دوباره تلاش کنید
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleConvert}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect flex-1 sm:flex-none"
              >
                <RefreshCw className="w-5 h-5" />
                تلاش مجدد
              </button>
              <button
                onClick={onPreviousStep}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none"
              >
                بازگشت
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          تبدیل و دانلود
        </h2>
        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {images.length} عکس
        </span>
      </div>

      <OutputSection />

      <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
        <button
          onClick={onPreviousStep}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
        >
          <ChevronRight className="w-4 h-4" />
          بازگشت به تنظیمات
        </button>
      </div>
    </div>
  );
};
