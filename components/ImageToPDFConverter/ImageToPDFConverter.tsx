// components/ImageToPDFConverter/ImageToPDFConverter.tsx
"use client";

import { useRef, useCallback, useEffect } from "react";
import { useConverterStore } from "@/stores/useConverterStore";
import { useConverterActions } from "@/hooks/useConverterActions";
import { UploadStep } from "./UploadStep";
import { SettingsStep } from "./SettingsStep";
import { ConvertStep } from "./ConvertStep";
import { ProgressSteps } from "./ProgressSteps";
import { ImagePreviewModal } from "./ImagePreviewModal";

export default function ImageToPDFConverter() {
  const {
    currentStep,
    setCurrentStep,
    images,
    addImages,
    isPreviewOpen,
    selectedImage,
    setSelectedImage,
    setIsPreviewOpen,
  } = useConverterStore();

  const { resetConverter } = useConverterActions();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.url.startsWith("blob:")) {
          URL.revokeObjectURL(img.url);
        }
      });
    };
  }, [images]);

  const handleFileSelect = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      addImages(files);
    },
    [addImages]
  );

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFileSelect(e.target.files);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [handleFileSelect]
  );

  const handleAddMoreClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleImagePreview = useCallback(
    (image: ImageFile) => {
      setSelectedImage(image);
      setIsPreviewOpen(true);
    },
    [setSelectedImage, setIsPreviewOpen]
  );

  const handleClosePreview = useCallback(() => {
    setIsPreviewOpen(false);
    setSelectedImage(null);
  }, [setIsPreviewOpen, setSelectedImage]);

  const goToNextStep = useCallback(() => {
    if (currentStep === "upload" && images.length > 0)
      setCurrentStep("settings");
    else if (currentStep === "settings") setCurrentStep("convert");
  }, [currentStep, images.length, setCurrentStep]);

  const goToPreviousStep = useCallback(() => {
    if (currentStep === "settings") setCurrentStep("upload");
    else if (currentStep === "convert") setCurrentStep("settings");
  }, [currentStep, setCurrentStep]);

  const renderStep = () => {
    switch (currentStep) {
      case "upload":
        return (
          <UploadStep
            onAddMoreClick={handleAddMoreClick}
            onFileSelect={handleFileSelect}
            onImagePreview={handleImagePreview}
            onNextStep={goToNextStep}
          />
        );
      case "settings":
        return (
          <SettingsStep
            onAddMoreClick={handleAddMoreClick}
            onPreviousStep={goToPreviousStep}
            onNextStep={goToNextStep}
          />
        );
      case "convert":
        return (
          <ConvertStep
            onPreviousStep={goToPreviousStep}
            onReset={resetConverter}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
      <ProgressSteps />

      <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
        {renderStep()}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".jpg,.jpeg,.png,.webp"
        onChange={handleFileInputChange}
        className="hidden"
      />

      <ImagePreviewModal
        isOpen={isPreviewOpen}
        image={selectedImage}
        onClose={handleClosePreview}
      />
    </div>
  );
}
