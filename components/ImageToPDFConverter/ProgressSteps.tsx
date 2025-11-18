// components/ImageToPDFConverter/ProgressSteps.tsx
import { useConverterStore } from "@/stores/useConverterStore";
import { CheckCircle } from "lucide-react";

export const ProgressSteps = () => {
  const { currentStep, images } = useConverterStore();

  const steps = [
    {
      key: "upload" as const,
      label: images.length > 0 ? "چیدمان" : "آپلود",
      number: 1,
    },
    { key: "settings" as const, label: "تنظیمات", number: 2 },
    { key: "convert" as const, label: "دانلود", number: 3 },
  ];

  const getStepStatus = (stepKey: string) => {
    if (stepKey === currentStep) return "current";
    if (
      (stepKey === "upload" && images.length > 0) ||
      (stepKey === "settings" && currentStep === "convert")
    )
      return "completed";
    return "upcoming";
  };

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
      {steps.map((step, index) => {
        const status = getStepStatus(step.key);
        const isCompleted = status === "completed";
        const isCurrent = status === "current";

        return (
          <div
            key={step.key}
            className="flex flex-col items-center flex-1 max-w-24"
          >
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
                isCurrent
                  ? "bg-primary/20 border-primary/50 text-primary"
                  : isCompleted
                  ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
                  : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
              }`}
            >
              {isCompleted ? (
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              ) : (
                <span className="text-sm sm:text-base md:text-lg font-bold">
                  {step.number}
                </span>
              )}
            </div>
            <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
