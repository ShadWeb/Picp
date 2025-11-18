// components/ImageToPDFConverter/ImagePreviewModal.tsx
import { Maximize2, X } from "lucide-react";
import { ImageFile } from "@/types";

interface ImagePreviewModalProps {
  isOpen: boolean;
  image: ImageFile | null;
  onClose: () => void;
}

export const ImagePreviewModal = ({
  isOpen,
  image,
  onClose,
}: ImagePreviewModalProps) => {
  if (!isOpen || !image) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackgroundClick}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {image.name}
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.open(image.url, "_blank")}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                title="باز کردن در تب جدید"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center p-4 max-h-[70vh] overflow-auto">
            <img
              src={image.url}
              alt={image.name}
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                console.warn(`❌ Preview image failed to load: ${image.name}`);
                // اگر تصویر لود نشد، URL جدید ایجاد کن
                const newUrl = URL.createObjectURL(image.file);
                e.currentTarget.src = newUrl;
              }}
            />
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                برای بستن، روی دکمه × کلیک کنید یا ESC را فشار دهید
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
