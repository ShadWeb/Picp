"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";

export default function Home() {
  const handleUploadSectionClick = () => {
    const uploadSection = document.getElementById("upload-section");
    uploadSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex  flex-1 justify-center py-5">
          <div className="  flex flex-col w-fullflex-1 px-4 md:px-8">
            <Header />
            <div className="absolute w-full top-0 min-h-screen mb-2 py-20 left-20 -right-0 overflow-hidden">
              {/* <Image
                src="/images/Airbrush-image-extender.png"
                alt="تبدیل پی دی اف به عکس"
                fill
                className="object-cover"
              /> */}
            </div>
            <main className="flex flex-col gap-16 md:gap-24 ">
              <Hero onUploadClick={handleUploadSectionClick} />

              {/* بخش اصلی تبدیل کننده */}
              <section id="upload-section" className="scroll-mt-24"></section>

              <FeaturesSection />
            </main>

            <Footer />
          </div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}
