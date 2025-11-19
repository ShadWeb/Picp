//components/UploadSection.tsx
"use client";

import { PDFSettings } from "@/types";

interface SettingsSectionProps {
  settings: PDFSettings;
  onSettingsChange: (settings: PDFSettings) => void;
}

export default function SettingsSection({
  settings,
  onSettingsChange,
}: SettingsSectionProps) {
  const handleSettingChange = (key: keyof PDFSettings, value: string) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  return (
    <section
      className="flex flex-col gap-6 p-4 scroll-mt-24"
      id="settings-section"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">
          ۲. تنظیمات PDF
        </h2>
        <p className="text-base text-muted-light dark:text-muted-dark">
          خروجی فایل خود را سفارشی کنید.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium" htmlFor="orientation">
            جهت صفحه
          </label>
          <select
            id="orientation"
            name="orientation"
            value={settings.orientation}
            onChange={(e) =>
              handleSettingChange(
                "orientation",
                e.target.value as PDFSettings["orientation"]
              )
            }
            className="rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary w-full text-base"
          >
            <option value="portrait">عمودی (پیش‌فرض)</option>
            <option value="landscape">افقی</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-medium" htmlFor="paper-size">
            اندازه کاغذ
          </label>
          <select
            id="paper-size"
            name="paper-size"
            value={settings.paperSize}
            onChange={(e) =>
              handleSettingChange(
                "paperSize",
                e.target.value as PDFSettings["paperSize"]
              )
            }
            className="rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary w-full text-base"
          >
            <option value="A4">A4 (پیش‌فرض)</option>
            <option value="Letter">Letter</option>
            <option value="A5">A5</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-medium" htmlFor="margin">
            حاشیه
          </label>
          <select
            id="margin"
            name="margin"
            value={settings.margin}
            onChange={(e) =>
              handleSettingChange(
                "margin",
                e.target.value as PDFSettings["margin"]
              )
            }
            className="rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary w-full text-base"
          >
            <option value="none">بدون حاشیه</option>
            <option value="medium">متوسط (پیش‌فرض)</option>
            <option value="large">زیاد</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-medium" htmlFor="quality">
            کیفیت عکس
          </label>
          <select
            id="quality"
            name="quality"
            value={settings.quality}
            onChange={(e) =>
              handleSettingChange(
                "quality",
                e.target.value as PDFSettings["quality"]
              )
            }
            className="rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary w-full text-base"
          >
            <option value="standard">استاندارد (فایل کم‌حجم)</option>
            <option value="high">بالا (بهترین کیفیت)</option>
          </select>
        </div>
      </div>
    </section>
  );
}
