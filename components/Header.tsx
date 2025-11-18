"use client";

import { useState } from "react";
import { Moon, Sun, Home, Star, HelpCircle, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 rounded z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
      <div className="flex items-center justify-between py-4 px-4 md:px-6">
        {/* لوگو و برند */}
        <div className="flex items-center gap-1 text-text-light dark:text-text-dark">
          <h2 className="text-xl font-bold tracking-[-0.015em]">Picp</h2>
          <div className="size-12 text-primary">
            <Image
              src={"/images/picp.png"}
              alt=" تبدیل عکس به پی دی اف آنلاین | تبدیل چند عکس به یک فایل PDF در گوشی و
          آیفون"
              title=" تبدیل عکس به پی دی اف آنلاین | تبدیل چند عکس به یک فایل PDF در گوشی و
          آیفون"
              width={50}
              height={50}
            />
          </div>
        </div>

        {/* ناوبری و کنترل‌ها */}
        <div className="flex items-center gap-4">
          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex items-center gap-6">
            {/* <a
              className="flex items-center gap-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
              href="#"
            >
              <Home className="w-4 h-4" />
              خانه
            </a> */}
            <Link
              className="flex items-center gap-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
              href="#features"
            >
              <Star className="w-4 h-4" />
              ویژگی‌ها
            </Link>
            {/* <a
              className="flex items-center gap-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
              href="#"
            >
              <HelpCircle className="w-4 h-4" />
              راهنما
            </a> */}
          </nav>

          {/* دکمه تغییر تم */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-lg h-9 w-9 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:text-primary hover:border-primary/30 transition-all duration-200"
            aria-label={
              theme === "dark" ? "فعال کردن حالت روشن" : "فعال کردن حالت تاریک"
            }
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* دکمه منوی موبایل */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center rounded-lg h-9 w-9 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:text-primary transition-all duration-200"
            aria-label="منو"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
          <nav className="flex flex-col p-4 space-y-3">
            <a
              className="flex items-center gap-3 py-2 px-3 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg transition-colors"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="w-4 h-4" />
              خانه
            </a>
            <a
              className="flex items-center gap-3 py-2 px-3 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg transition-colors"
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Star className="w-4 h-4" />
              ویژگی‌ها
            </a>
            <a
              className="flex items-center gap-3 py-2 px-3 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg transition-colors"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HelpCircle className="w-4 h-4" />
              راهنما
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
