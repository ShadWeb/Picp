export interface ImageFile {
  id: string;
  url: string;
  name: string;
  file?: File;
}

export interface PDFSettings {
  orientation: "portrait" | "landscape";
  paperSize: "A4" | "Letter" | "A5";
  margin: "none" | "medium" | "large";
  quality: "standard" | "high";
}

export type ConversionStatus = "idle" | "converting" | "completed" | "error";

export interface ConversionProgress {
  current: number;
  total: number;
  status: string;
}

export type AppStep = "upload" | "settings" | "convert";
