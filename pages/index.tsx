"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";
import Head from "next/head";

export default function Home() {
  const handleUploadSectionClick = () => {
    const uploadSection = document.getElementById("upload-section");
    uploadSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 🔥 Meta SEO Tags */}
      <Head>
        <title>
          تبدیل عکس به پی دی اف آنلاین | تبدیل چند عکس به یک فایل PDF در گوشی و
          آیفون
        </title>

        <meta
          name="description"
          content="تبدیل عکس به پی دی اف آنلاین در گوشی و آیفون؛ ابزاری سریع برای تبدیل چند عکس به یک فایل PDF. بهترین روش تبدیل چند عکس به PDF بدون نصب برنامه."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ax-pdf.ir/" />

        {/* OG for Telegram / WhatsApp / Social Preview */}
        <meta
          property="og:title"
          content="تبدیل عکس به PDF آنلاین | ساخت چند عکس در یک فایل PDF"
        />
        <meta
          property="og:description"
          content="تبدیل چند عکس به یک فایل پی دی اف آنلاین، سریع، رایگان و باکیفیت. مناسب گوشی، آیفون و اندروید."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta property="og:image" content="/images/preview.jpg" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "تبدیل عکس به PDF آنلاین",
              description:
                "ابزار رایگان و سریع برای تبدیل چند عکس و تصاویر به فایل PDF با بهترین کیفیت.",
              operatingSystem: "All",
              applicationCategory: "Utility",
              url: "https://ax-pdf.ir/",
            }),
          }}
        />
      </Head>

      {/* صفحه */}
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex  flex-1 justify-center py-5">
            <div className="  flex flex-col w-fullflex-1 px-4 md:px-8">
              <Header />

              <main className="flex flex-col gap-16 md:gap-24 ">
                <Hero onUploadClick={handleUploadSectionClick} />

                <section id="upload-section" className="scroll-mt-24"></section>

                <FeaturesSection />
              </main>

              <Footer />
            </div>
          </div>
        </div>

        <BackToTopButton />
      </div>
    </>
  );
}
