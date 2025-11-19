"use client";

import React from "react";

export default function VideoIntroSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* متن معرفی */}
          <div className="order-2 lg:order-1 space-y-7">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 text-primary rounded-full text-sm font-semibold tracking-wide shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              تبدیل عکس به PDF
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light dark:text-text-dark leading-tight">
              تبدیل چند عکس به یک فایل <span className="text-primary">PDF</span>{" "}
              به آسانی چند کلیک
            </h2>

            <p className="text-lg md:text-xl text-muted-light dark:text-muted-dark leading-relaxed max-w-2xl">
              عکس‌هاتو انتخاب کن، بقیه کار رو ما انجام می‌دیم! این ابزار سریع،
              آنلاین و بدون نیاز به نصب برنامه است. مناسب برای موبایل، آیفون،
              اندروید و لپ‌تاپ.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-5 py-2.5 bg-primary/15 text-primary rounded-xl text-sm font-medium">
                #تبدیل_عکس_به_PDF
              </span>
              <span className="px-5 py-2.5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark rounded-xl text-sm font-medium">
                #ابزار_آنلاین
              </span>
            </div>

            <div className="pt-4">
              <a
                href="https://www.youtube.com/@vadahouseofmobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:bg-primary/90 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                مشاهده ویدیو
              </a>
            </div>
          </div>

          {/* ویدیو داخل قاب آیفون */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="relative bg-black rounded-3xl p-3 shadow-2xl border border-border-light dark:border-border-dark">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900">
                  {/* نسبت عمودی 9:16 */}
                  <div className="aspect-[9/16] w-full">
                    <video
                      className="w-full h-full object-cover rounded-3xl"
                      src="/video/picp.mp4"
                      poster="/video/poster.jpg"
                      controls
                      playsInline
                      muted
                      loop
                    >
                      مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                    </video>
                  </div>

                  {/* افکت Hover Play */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/30 rounded-3xl">
                    <div className="w-20 h-20 bg-primary/95 backdrop-blur-md rounded-full flex items-center justify-center animate-pulse shadow-xl">
                      <svg
                        className="w-10 h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* ناچ آیفون */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
