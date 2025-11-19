//components/UploadSection.tsx
"use client";

import { useState, useRef, useCallback } from "react";
import { ImageFile } from "@/types";
import ImagePreview from "./ImagePreview";
import { generateId, validateFile } from "@/lib/utils";
import MemoryMonitor from "../MemoryMonitor";
const sampleImages: ImageFile[] = [
  {
    id: "1",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7VcugtMjqpvGnNH8QRBYxY5LZ0YwlGpLgf0LsRGGHIkWN1PqdR8lKezCXCL6rMwUywwtL-Jh65WTLeWF8Uijt9V6PuX5Cxfa7rDw1pqTz7kfE2qnttsSsE3Ulko_CE-T_tTjaU9wOOPFOYFyEog5AY5qOC4zlascYFiIr04bU7aKTr5RGd7mpEy0QOMQYXe3qzM2zGdprVtdnNIxERvKsiUUtgXbDRP8zP0b_zt57GqoQdukfvbgb4M4Mj7hSX2cCzrs1LpHh8ao",
    name: "image_01.jpg",
  },
  {
    id: "2",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZprDTp5jQkZfXZLYjt4C8U2TMde0CH6KT7-Fcoe7HNgeoBqpppX7CHBLpX8lYCTcSzKS3CKr-JiaNTUuoEa4BPEj_Pvr43zRUiRoGXlF5AAZr5QLmMiVSCCFuD3LBSz1WrZSndqRLsjHpZoYeDBOTUXRZKbbQk2pFNzIRshum_IfBl2TlgTGgq6QhXpHxSEbctOJ0nUGzkht5WWbpBPzTpmo-ty2XZB7I6Y5hHajMFM2ouPbMlRS8MbLNMq7x24of440z-Fsxinw",
    name: "image_02.png",
  },
  {
    id: "3",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHfGr9xyRthlWhGX0EM-6FNLIrURQF7F7SQARlTtq-CAGtKQ0tTQ6r_tEsrPn5fT_oEeYHyTmMI3XErqHxxpZyCd_ElFBFtoNILaNaz5a8qIEz6wLPbLPZrgXU7zY5VcH_lGPmgDQk-fJIJ7BrY4pbjNsEyYFwRBPEbYQVJgh-1Or1G5fR13rHViXwJZ1hqmpNTn3HXpx2KVJ_-Zf-JrJtRMtCaHfptPUWcbHOEuKdUZtigSLgKl5bWPLscbry-eOHU12zukkGKz0",
    name: "image_03.jpg",
  },
];

interface UploadSectionProps {
  images: ImageFile[];
  onImagesChange: (images: ImageFile[]) => void;
}

export default function UploadSection({
  images,
  onImagesChange,
}: UploadSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleNameChange = (id: string, name: string) => {
    const updatedImages = images.map((img) =>
      img.id === id ? { ...img, name } : img
    );
    onImagesChange(updatedImages);
  };

  const handleDelete = (id: string) => {
    const updatedImages = images.filter((img) => img.id !== id);
    onImagesChange(updatedImages);
  };

  const handleMove = (id: string, direction: "up" | "down") => {
    const index = images.findIndex((img) => img.id === id);
    if (index === -1) return;

    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= images.length) return;

    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(index, 1);
    updatedImages.splice(newIndex, 0, movedImage);
    onImagesChange(updatedImages);
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const newImages: ImageFile[] = [];

    Array.from(files).forEach((file) => {
      const validation = validateFile(file);
      if (validation.isValid) {
        const url = URL.createObjectURL(file);
        newImages.push({
          id: generateId(),
          url,
          name: file.name,
          file,
        });
      } else {
        alert(validation.error);
      }
    });

    if (newImages.length > 0) {
      onImagesChange([...images, ...newImages]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFileSelect(e.dataTransfer.files);
    },
    [images]
  );

  const handleAddMoreClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="flex flex-col gap-6 scroll-mt-24" id="upload-section">
      {/* <div className="p-4 bg-black/80 text-white rounded-lg">
        <MemoryMonitor images={images} />
      </div> */}
      <div className="flex items-center justify-between px-4">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">
          ۱. آپلود و چیدمان
        </h2>
        <p className="text-sm text-muted-light dark:text-muted-dark">
          {images.length} عکس آپلود شد
        </p>
      </div>
      <div className="flex flex-col p-4">
        <div
          className={`flex flex-col items-center gap-6 rounded-xl border-2 border-dashed px-6 py-20 bg-surface-light dark:bg-surface-dark transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border-light dark:border-border-dark"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex max-w-[480px] flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-4xl">upload</span>
            </div>
            <p className="text-xl font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
              برای آپلود، عکس‌ها را اینجا بکشید
            </p>
            <p className="text-base font-normal leading-normal max-w-[480px] text-center text-muted-light dark:text-muted-dark">
              یا
            </p>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            accept=".jpg,.jpeg,.png,.webp"
            multiple
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            <span className="truncate">از دستگاه خود انتخاب کنید</span>
          </button>

          <p className="text-sm font-normal leading-normal max-w-[480px] text-center text-muted-light dark:text-muted-dark mt-2">
            فرمت‌های پشتیبانی شده: JPG, PNG, WEBP. حداکثر حجم فایل: 10MB.
          </p>
        </div>
      </div>
      {images.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 p-4">
          {images.map((image, index) => (
            <ImagePreview
              key={image.id}
              image={image}
              index={index}
              onNameChange={handleNameChange}
              onDelete={handleDelete}
              onMove={handleMove}
              canMoveUp={index > 0}
              canMoveDown={index < images.length - 1}
            />
          ))}
          <div className="absolute top-10 z-100">
            <MemoryMonitor images={images} />
            sssss
          </div>
          <div
            onClick={handleAddMoreClick}
            className="flex flex-col items-center justify-center gap-3 pb-3 rounded-lg border-2 border-dashed border-border-light dark:border-border-dark aspect-[4/3] cursor-pointer bg-surface-light dark:bg-surface-dark hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors hover:border-primary"
          >
            <span className="material-symbols-outlined text-4xl text-muted-light dark:text-muted-dark">
              add_photo_alternate
            </span>
            <p className="text-base font-medium text-muted-light dark:text-muted-dark">
              افزودن عکس بیشتر
            </p>
          </div>
        </div>
      )}{" "}
    </section>
  );
}
