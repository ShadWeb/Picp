// components/ImageToPDFConverter/SettingsStep.tsx
import { useConverterStore } from "@/stores/useConverterStore";
import { PDFPreview } from "./PDFPreview";
import { Settings, ChevronRight, ChevronLeft, Plus } from "lucide-react";

interface SettingsStepProps {
  onAddMoreClick: () => void;
  onPreviousStep: () => void;
  onNextStep: () => void;
}

export const SettingsStep = ({
  onAddMoreClick,
  onPreviousStep,
  onNextStep,
}: SettingsStepProps) => {
  const { images, settings, updateSetting } = useConverterStore();

  const handleSettingChange = (key: keyof PDFSettings, value: string) => {
    updateSetting(key, value);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          تنظیمات PDF
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {images.length} عکس
          </span>
          <button
            onClick={onAddMoreClick}
            className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300/50 dark:border-gray-600/50 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition"
          >
            <Plus className="w-4 h-4" />
            افزودن عکس
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* تنظیمات */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  جهت کاغذ
                </label>
                <select
                  value={settings.orientation}
                  onChange={(e) =>
                    handleSettingChange("orientation", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                >
                  <option value="portrait">عمودی</option>
                  <option value="landscape">افقی</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  سایز کاغذ
                </label>
                <select
                  value={settings.paperSize}
                  onChange={(e) =>
                    handleSettingChange("paperSize", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                >
                  <option value="A4">A4</option>
                  <option value="A3">A3</option>
                  <option value="letter">Letter</option>
                  <option value="legal">Legal</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  حاشیه
                </label>
                <select
                  value={settings.margin}
                  onChange={(e) =>
                    handleSettingChange("margin", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                >
                  <option value="small">کوچک</option>
                  <option value="medium">متوسط</option>
                  <option value="large">بزرگ</option>
                  <option value="none">بدون حاشیه</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  کیفیت
                </label>
                <select
                  value={settings.quality}
                  onChange={(e) =>
                    handleSettingChange("quality", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                >
                  <option value="low">پایین</option>
                  <option value="standard">استاندارد</option>
                  <option value="high">بالا</option>
                </select>
              </div>
            </div>
          </div>

          {/* خلاصه تنظیمات */}
          <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              خلاصه تنظیمات
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-600 dark:text-gray-400 text-xs">
                  جهت:
                </span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {settings.orientation === "portrait" ? "عمودی" : "افقی"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 dark:text-gray-400 text-xs">
                  سایز:
                </span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {settings.paperSize}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 dark:text-gray-400 text-xs">
                  حاشیه:
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
              <div className="flex flex-col">
                <span className="text-gray-600 dark:text-gray-400 text-xs">
                  کیفیت:
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
        </div>

        {/* پیش‌نمایش */}
        <div className="lg:col-span-1">
          <PDFPreview />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
        <button
          onClick={onPreviousStep}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
        >
          <ChevronRight className="w-4 h-4" />
          بازگشت
        </button>
        <button
          onClick={onNextStep}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
        >
          ادامه به تبدیل
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
