// components/ImageToPDFConverter/UploadStep.tsx
import { useCallback, useState } from "react";
import { useConverterStore } from "@/stores/useConverterStore";
import { ImageGrid } from "./ImageGrid";
import { Upload, Plus } from "lucide-react";

interface UploadStepProps {
  onAddMoreClick: () => void;
  onFileSelect: (files: FileList) => void;
  onImagePreview: (image: ImageFile) => void;
  onNextStep: () => void;
}

export const UploadStep = ({
  onAddMoreClick,
  onFileSelect,
  onImagePreview,
  onNextStep,
}: UploadStepProps) => {
  const { images, isDragging, setIsDragging } = useConverterStore();
  const [dragCounter, setDragCounter] = useState(0);

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
    },
    [setIsDragging]
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragCounter((prev) => {
        const newCounter = prev - 1;
        if (newCounter === 0) {
          setIsDragging(false);
        }
        return newCounter;
      });
    },
    [setIsDragging]
  );

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragCounter((prev) => prev + 1);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      setDragCounter(0);
      onFileSelect(e.dataTransfer.files);
    },
    [onFileSelect, setIsDragging]
  );

  // When no images uploaded
  if (images.length === 0) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          آپلود عکس‌ها
        </h2>

        <div
          className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
            isDragging
              ? "border-primary/50 bg-primary/5"
              : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
          }`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
          <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
            عکس‌ها را اینجا بکشید
          </p>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
            یا
          </p>
          <button
            onClick={onAddMoreClick}
            className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
          >
            انتخاب از دستگاه
          </button>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
            JPG, PNG, WEBP • حداکثر 10MB
          </p>
        </div>
      </div>
    );
  }

  // When images are uploaded
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          چیدمان عکس‌ها
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {images.length} عکس
          </span>
          <button
            onClick={onAddMoreClick}
            className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300/50 dark:border-gray-600/50 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition"
          >
            <Plus className="w-4 h-4" />
            افزودن عکس
          </button>
        </div>
      </div>

      <ImageGrid onImagePreview={onImagePreview} />

      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
        <button
          onClick={onAddMoreClick}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 
          border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium 
          hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm 
          glass-effect text-gray-700 dark:text-gray-300"
        >
          <Plus className="w-4 h-4" />
          افزودن بیشتر
        </button>
        <button
          onClick={onNextStep}
          disabled={images.length === 0}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 
          bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition 
          text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ادامه
        </button>
      </div>
    </div>
  );
};
