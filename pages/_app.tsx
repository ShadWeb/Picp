import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Spline_Sans } from "next/font/google";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const splineSans = Spline_Sans({
  subsets: ["latin"],
  display: "swap",
});
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider } from "@/components/ThemeProvider";
import MemoryMonitor from "@/components/MemoryMonitor";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider className={vazirmatn.className}>
      <ToastProvider placement="top-center" />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </HeroUIProvider>
  );
}
