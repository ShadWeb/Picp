import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function validateFile(file: File): { isValid: boolean; error?: string } {
  const validTypes = ["image/jpeg", "image/png", "image/webp"];
  const maxSize = 10 * 1024 * 1024; // 10MB

  if (!validTypes.includes(file.type)) {
    return { isValid: false, error: "فرمت فایل پشتیبانی نمی‌شود" };
  }

  if (file.size > maxSize) {
    return { isValid: false, error: "حجم فایل باید کمتر از 10MB باشد" };
  }

  return { isValid: true };
}
