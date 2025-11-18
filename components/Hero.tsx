"use client";

import { Upload, Play, Zap, Shield, Smartphone, Star } from "lucide-react";
import ImageToPDFConverter from "./ImageToPDFConverter/ImageToPDFConverter";
import Image from "next/image";

interface HeroProps {
  onUploadClick: () => void;
}

export default function Hero({ onUploadClick }: HeroProps) {
  return (
    <section className="@container ">
      <div className="flex  flex-col-reverse gap-8 px-4 py-12 @[864px]:flex-row @[864px]:items-center @[864px]:py-16 z-10">
        {/* بخش متن */}
        <div className="flex  flex-col  gap-6 text-center @[864px]:text-right @[864px]:w-1/2 z-30">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold leading-tight tracking-[-0.033em] md:text-3xl text-slate-900 dark:text-white">
              تبدیل <span className="text-primary">عکس به PDF</span>
              <br />
              سریع و آسان
            </h1>
            <p className="text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg max-w-2xl mx-auto @[864px]:mx-0">
              آپلود کن، مرتب کن، تبدیل کن — به همین سادگی!
              <span className="block mt-2 text-sm text-slate-500 dark:text-slate-500">
                پشتیبانی از JPG, PNG, WebP • کیفیت بالا • رایگان
              </span>
            </p>
          </div>

          {/* ویژگی‌های سریع */}
          <div className="flex flex-wrap justify-center @[864px]:justify-start gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Zap className="w-4 h-4 text-primary" />
              <span>تبدیل فوری</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Shield className="w-4 h-4 text-primary" />
              <span>امن و خصوصی</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Smartphone className="w-4 h-4 text-primary" />
              <span>واکنش‌گرا</span>
            </div>
          </div>

          {/* دکمه‌های اقدام */}
          <div className="flex flex-col sm:flex-row justify-center @[864px]:justify-start items-center gap-3">
            <button className="group flex items-center justify-center gap-2 min-w-[180px] h-12 px-6 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25">
              <Upload className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>شروع تبدیل رایگان</span>
            </button>

            <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 py-2 text-sm">
              <Play className="w-4 h-4" />
              <span>نمایش راهنما</span>
            </button>
          </div>

          {/* آمار و ارقام */}
          <div className="flex justify-center @[864px]:justify-start items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="text-center">
              <div className="flex items-center gap-1 text-base font-bold text-primary">
                <span>+۱۰K</span>
              </div>
              <div>تبدیل موفق</div>
            </div>
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
            <div className="text-center">
              <div className="flex items-center gap-1 text-base font-bold text-primary">
                <span>۱۰۰٪</span>
              </div>
              <div>رضایت کاربران</div>
            </div>
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
            <div className="text-center">
              <div className="flex items-center gap-1 text-base font-bold text-primary">
                <Star className="w-3 h-3 fill-current" />
                <span>۵</span>
              </div>
              <div>امتیاز کاربران</div>
            </div>
          </div>
        </div>
        {/* <img
          src="/images/a.png"
          alt="Human character converting image to PDF"
          className="absolute bottom-25 -right-9 w-[400px] transform rotate-3"
        /> */}
        {/* بخش نمایش‌دهنده */}
        <div className="flex items-center relative justify-center w-full">
          <div className=" md:min-w-2xl  dark:bg-slate-800 rounded-xl shadow-lg  overflow-hidden w-full max-w-lg">
            <ImageToPDFConverter />

            {/* <img
              src="/images/Airbrush-image-extender-removebg-preview.png"
              alt="Human character converting image to PDF"
              className="absolute bottom-0 -left-35 w-[400px] transform rotate-3"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
