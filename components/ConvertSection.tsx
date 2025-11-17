"use client";

import {
  ConversionStatus,
  ImageFile,
  PDFSettings,
  ConversionProgress,
} from "@/types";

interface ConvertSectionProps {
  images: ImageFile[];
  settings: PDFSettings;
  status: ConversionStatus;
  progress: ConversionProgress;
  onConvert: () => void;
  onDownloadPDF: () => void;
  onDownloadZIP: () => void;
}

export default function ConvertSection({
  images,
  settings,
  status,
  progress,
  onConvert,
  onDownloadPDF,
  onDownloadZIP,
}: ConvertSectionProps) {
  const canConvert = images.length > 0;

  return (
    <section
      className="flex flex-col items-center gap-6 p-4 scroll-mt-24"
      id="convert-section"
    >
      <div className="flex flex-col gap-2 w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">
          ۳. تبدیل و دانلود
        </h2>
        <p className="text-base text-muted-light dark:text-muted-dark">
          آماده‌اید؟ برای ساخت فایل PDF خود کلیک کنید.
        </p>
      </div>

      <button
        onClick={onConvert}
        disabled={!canConvert || status === "converting"}
        className="flex w-full md:w-auto min-w-[240px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="material-symbols-outlined">picture_as_pdf</span>
        <span className="truncate">تبدیل به PDF</span>
      </button>

      {status === "converting" && (
        <div className="flex flex-col items-center gap-4 text-center mt-6 p-6 rounded-xl bg-surface-light dark:bg-surface-dark w-full max-w-lg border border-border-light dark:border-border-dark">
          <div className="relative h-12 w-12">
            <div className="animate-spin rounded-full h-full w-full border-4 border-primary border-t-transparent"></div>
            <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-primary text-2xl">
              hourglass_top
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-primary h-2.5 rounded-full transition-all duration-300"
              style={{
                width: `${(progress.current / progress.total) * 100}%`,
              }}
            ></div>
          </div>

          <p className="font-bold text-lg">{progress.status}</p>
          <p className="text-sm text-muted-light dark:text-muted-dark">
            {progress.current} از {progress.total} عکس پردازش شد
          </p>
        </div>
      )}

      {status === "completed" && (
        <div className="flex flex-col items-center gap-4 text-center mt-6 p-6 rounded-xl bg-primary/10 w-full max-w-lg border border-primary/20">
          <div className="flex items-center gap-2 text-primary dark:text-indigo-300">
            <span className="material-symbols-outlined text-3xl">
              check_circle
            </span>
            <h3 className="font-bold text-xl">فایل شما با موفقیت ساخته شد!</h3>
          </div>
          <p className="text-base text-muted-light dark:text-muted-dark">
            فایل PDF شما شامل {images.length} صفحه است.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button
              onClick={onDownloadPDF}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                download
              </span>
              <span className="truncate">دانلود PDF</span>
            </button>
            <button
              onClick={onDownloadZIP}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-base font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-border-light dark:hover:bg-border-dark transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                folder_zip
              </span>
              <span className="truncate">دانلود عکس‌ها (ZIP)</span>
            </button>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center gap-4 text-center mt-6 p-6 rounded-xl bg-red-50 dark:bg-red-900/20 w-full max-w-lg border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <span className="material-symbols-outlined text-3xl">error</span>
            <h3 className="font-bold text-xl">خطا در تبدیل</h3>
          </div>
          <p className="text-base text-red-600 dark:text-red-400">
            متأسفانه در تبدیل عکس‌ها به PDF خطایی رخ داده است.
          </p>
          <button
            onClick={onConvert}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-red-600 text-white text-base font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-red-700 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">refresh</span>
            <span className="truncate">تلاش مجدد</span>
          </button>
        </div>
      )}
    </section>
  );
}
