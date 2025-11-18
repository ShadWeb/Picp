// stores/useConverterStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  ImageFile,
  PDFSettings,
  ConversionStatus,
  ConversionProgress,
  AppStep,
} from "@/types";

interface ConverterState {
  // State
  currentStep: AppStep;
  images: ImageFile[];
  settings: PDFSettings;
  conversionStatus: ConversionStatus;
  conversionProgress: ConversionProgress;
  pdfBlob: Blob | null;
  selectedImage: ImageFile | null;
  isPreviewOpen: boolean;
  deviceView: "mobile" | "tablet" | "desktop";
  isDragging: boolean;

  // Actions
  setCurrentStep: (step: AppStep) => void;
  setImages: (images: ImageFile[]) => void;
  addImages: (files: FileList) => void;
  updateImage: (id: string, updates: Partial<ImageFile>) => void;
  deleteImage: (id: string) => void;
  moveImage: (id: string, direction: "up" | "down") => void;
  reorderImages: (oldIndex: number, newIndex: number) => void;
  setSettings: (settings: PDFSettings) => void;
  updateSetting: (key: keyof PDFSettings, value: string) => void;
  setConversionStatus: (status: ConversionStatus) => void;
  setConversionProgress: (progress: ConversionProgress) => void;
  setPdfBlob: (blob: Blob | null) => void;
  setSelectedImage: (image: ImageFile | null) => void;
  setIsPreviewOpen: (open: boolean) => void;
  setDeviceView: (view: "mobile" | "tablet" | "desktop") => void;
  setIsDragging: (dragging: boolean) => void;
  reset: () => void;
}

const initialSettings: PDFSettings = {
  orientation: "portrait",
  paperSize: "A4",
  margin: "medium",
  quality: "standard",
};

export const useConverterStore = create<ConverterState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentStep: "upload",
      images: [],
      settings: initialSettings,
      conversionStatus: "idle",
      conversionProgress: { current: 0, total: 0, status: "" },
      pdfBlob: null,
      selectedImage: null,
      isPreviewOpen: false,
      deviceView: "desktop",
      isDragging: false,

      // Actions
      setCurrentStep: (step) => set({ currentStep: step }),

      setImages: (images) => set({ images }),

      addImages: (files) => {
        const { images } = get();
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
          }
        });

        if (newImages.length > 0) {
          set({ images: [...images, ...newImages] });
        }
      },

      updateImage: (id, updates) => {
        const { images } = get();
        set({
          images: images.map((img) =>
            img.id === id ? { ...img, ...updates } : img
          ),
        });
      },

      deleteImage: (id) => {
        const { images, selectedImage } = get();
        const imageToDelete = images.find((img) => img.id === id);

        if (imageToDelete?.url.startsWith("blob:")) {
          URL.revokeObjectURL(imageToDelete.url);
        }

        // Close preview if deleting the previewed image
        if (selectedImage?.id === id) {
          set({ selectedImage: null, isPreviewOpen: false });
        }

        set({ images: images.filter((img) => img.id !== id) });
      },

      moveImage: (id, direction) => {
        const { images } = get();
        const index = images.findIndex((img) => img.id === id);
        if (index === -1) return;

        const newIndex = direction === "up" ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= images.length) return;

        const updated = [...images];
        const [moved] = updated.splice(index, 1);
        updated.splice(newIndex, 0, moved);
        set({ images: updated });
      },

      reorderImages: (oldIndex, newIndex) => {
        const { images } = get();
        set({ images: arrayMove(images, oldIndex, newIndex) });
      },

      setSettings: (settings) => set({ settings }),

      updateSetting: (key, value) => {
        const { settings } = get();
        set({ settings: { ...settings, [key]: value } });
      },

      setConversionStatus: (conversionStatus) => set({ conversionStatus }),
      setConversionProgress: (conversionProgress) =>
        set({ conversionProgress }),
      setPdfBlob: (pdfBlob) => set({ pdfBlob }),
      setSelectedImage: (selectedImage) => set({ selectedImage }),
      setIsPreviewOpen: (isPreviewOpen) => set({ isPreviewOpen }),
      setDeviceView: (deviceView) => set({ deviceView }),
      setIsDragging: (isDragging) => set({ isDragging }),

      reset: () => {
        const { images } = get();
        // Clean up object URLs
        images.forEach((img) => {
          if (img.url.startsWith("blob:")) {
            URL.revokeObjectURL(img.url);
          }
        });

        set({
          currentStep: "upload",
          images: [],
          settings: initialSettings,
          conversionStatus: "idle",
          conversionProgress: { current: 0, total: 0, status: "" },
          pdfBlob: null,
          selectedImage: null,
          isPreviewOpen: false,
          deviceView: "desktop",
          isDragging: false,
        });
      },
    }),
    {
      name: "converter-storage",
      partialize: (state) => ({
        settings: state.settings,
        // Don't persist images and blobs as they can be large
      }),
    }
  )
);
