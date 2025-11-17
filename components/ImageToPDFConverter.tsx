// // // // //components/ImageToPDFConverter.tsx
// // // // "use client";

// // // // import { useState, useRef, useCallback, useEffect } from "react";
// // // // import {
// // // //   ImageFile,
// // // //   PDFSettings,
// // // //   ConversionStatus,
// // // //   ConversionProgress,
// // // //   AppStep,
// // // // } from "@/types";
// // // // import { PDFConverter } from "@/lib/pdfConverter";
// // // // import ImagePreview from "./ImagePreview";
// // // // import { generateId, validateFile } from "@/lib/utils";
// // // // import {
// // // //   Upload,
// // // //   CheckCircle,
// // // //   Settings,
// // // //   FileImage,
// // // //   Download,
// // // //   Folder,
// // // //   RefreshCw,
// // // //   ChevronLeft,
// // // //   ChevronRight,
// // // //   Plus,
// // // //   AlertCircle,
// // // //   Loader2,
// // // // } from "lucide-react";
// // // // import {
// // // //   DndContext,
// // // //   closestCenter,
// // // //   KeyboardSensor,
// // // //   PointerSensor,
// // // //   useSensor,
// // // //   useSensors,
// // // //   DragEndEvent,
// // // //   TouchSensor,
// // // // } from "@dnd-kit/core";
// // // // import {
// // // //   arrayMove,
// // // //   SortableContext,
// // // //   sortableKeyboardCoordinates,
// // // //   rectSortingStrategy,
// // // // } from "@dnd-kit/sortable";

// // // // const initialSettings: PDFSettings = {
// // // //   orientation: "portrait",
// // // //   paperSize: "A4",
// // // //   margin: "medium",
// // // //   quality: "standard",
// // // // };

// // // // export default function ImageToPDFConverter() {
// // // //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// // // //   const [images, setImages] = useState<ImageFile[]>([]);
// // // //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// // // //   const [conversionStatus, setConversionStatus] =
// // // //     useState<ConversionStatus>("idle");
// // // //   const [conversionProgress, setConversionProgress] =
// // // //     useState<ConversionProgress>({
// // // //       current: 0,
// // // //       total: 0,
// // // //       status: "",
// // // //     });
// // // //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
// // // //   const [triggerFileInput, setTriggerFileInput] = useState(false);

// // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // //   const [isDragging, setIsDragging] = useState(false);

// // // //   // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
// // // //   const sensors = useSensors(
// // // //     useSensor(PointerSensor, {
// // // //       activationConstraint: {
// // // //         distance: 3,
// // // //       },
// // // //     }),
// // // //     useSensor(TouchSensor, {
// // // //       activationConstraint: {
// // // //         delay: 100,
// // // //         tolerance: 10,
// // // //       },
// // // //     }),
// // // //     useSensor(KeyboardSensor, {
// // // //       coordinateGetter: sortableKeyboardCoordinates,
// // // //     })
// // // //   );

// // // //   // Clean up object URLs
// // // //   useEffect(() => {
// // // //     return () => {
// // // //       images.forEach((img) => URL.revokeObjectURL(img.url));
// // // //     };
// // // //   }, [images]);

// // // //   // Trigger file input when state changes
// // // //   useEffect(() => {
// // // //     if (triggerFileInput && fileInputRef.current) {
// // // //       console.log("🎯 Triggering file input programmatically");
// // // //       fileInputRef.current.click();
// // // //       setTriggerFileInput(false);
// // // //     }
// // // //   }, [triggerFileInput]);

// // // //   // Handlers
// // // //   const handleNameChange = useCallback((id: string, name: string) => {
// // // //     setImages((prev) =>
// // // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // // //     );
// // // //   }, []);

// // // //   const handleDelete = useCallback((id: string) => {
// // // //     setImages((prev) => {
// // // //       const imageToDelete = prev.find((img) => img.id === id);
// // // //       if (imageToDelete) {
// // // //         URL.revokeObjectURL(imageToDelete.url);
// // // //       }
// // // //       return prev.filter((img) => img.id !== id);
// // // //     });
// // // //   }, []);

// // // //   const handleMove = useCallback((id: string, direction: "up" | "down") => {
// // // //     setImages((prev) => {
// // // //       const index = prev.findIndex((img) => img.id === id);
// // // //       if (index === -1) return prev;
// // // //       const newIndex = direction === "up" ? index - 1 : index + 1;
// // // //       if (newIndex < 0 || newIndex >= prev.length) return prev;

// // // //       const updated = [...prev];
// // // //       const [moved] = updated.splice(index, 1);
// // // //       updated.splice(newIndex, 0, moved);
// // // //       return updated;
// // // //     });
// // // //   }, []);

// // // //   const handleDragEnd = useCallback((event: DragEndEvent) => {
// // // //     const { active, over } = event;

// // // //     if (over && active.id !== over.id) {
// // // //       setImages((items) => {
// // // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // // //         const newIndex = items.findIndex((item) => item.id === over.id);

// // // //         return arrayMove(items, oldIndex, newIndex);
// // // //       });
// // // //     }
// // // //   }, []);

// // // //   const handleFileSelect = useCallback((files: FileList | null) => {
// // // //     if (!files) return;

// // // //     console.log("📁 Files selected:", files.length);
// // // //     const newImages: ImageFile[] = [];
// // // //     Array.from(files).forEach((file) => {
// // // //       const validation = validateFile(file);
// // // //       if (validation.isValid) {
// // // //         const url = URL.createObjectURL(file);
// // // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // // //         console.log("✅ Added file:", file.name);
// // // //       } else {
// // // //         console.warn("❌ Invalid file:", file.name, validation.error);
// // // //         alert(validation.error);
// // // //       }
// // // //     });

// // // //     if (newImages.length > 0) {
// // // //       setImages((prev) => [...prev, ...newImages]);
// // // //     }
// // // //   }, []);

// // // //   const handleFileInputChange = useCallback(
// // // //     (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //       console.log("🔄 File input changed");
// // // //       handleFileSelect(e.target.files);
// // // //       // Reset the input value to allow selecting the same file again
// // // //       if (fileInputRef.current) {
// // // //         fileInputRef.current.value = "";
// // // //       }
// // // //     },
// // // //     [handleFileSelect]
// // // //   );

// // // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     setIsDragging(true);
// // // //   }, []);

// // // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     if (e.currentTarget === e.target) {
// // // //       setIsDragging(false);
// // // //     }
// // // //   }, []);

// // // //   const handleDrop = useCallback(
// // // //     (e: React.DragEvent) => {
// // // //       e.preventDefault();
// // // //       setIsDragging(false);
// // // //       handleFileSelect(e.dataTransfer.files);
// // // //     },
// // // //     [handleFileSelect]
// // // //   );

// // // //   const handleAddMoreClick = useCallback(() => {
// // // //     console.log("🔘 Add more button clicked");
// // // //     setTriggerFileInput(true);
// // // //   }, []);

// // // //   const handleSettingChange = useCallback(
// // // //     (key: keyof PDFSettings, value: string) => {
// // // //       setSettings((prev) => ({ ...prev, [key]: value }));
// // // //     },
// // // //     []
// // // //   );

// // // //   const handleConvert = useCallback(async () => {
// // // //     if (images.length === 0) return;

// // // //     setConversionStatus("converting");
// // // //     setConversionProgress({
// // // //       current: 0,
// // // //       total: images.length,
// // // //       status: "شروع تبدیل...",
// // // //     });

// // // //     try {
// // // //       const blob = await PDFConverter.convertImagesToPDF(
// // // //         images,
// // // //         settings,
// // // //         setConversionProgress
// // // //       );
// // // //       setPdfBlob(blob);
// // // //       setConversionStatus("completed");
// // // //     } catch (error) {
// // // //       console.error("Conversion error:", error);
// // // //       setConversionStatus("error");
// // // //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// // // //     }
// // // //   }, [images, settings]);

// // // //   const handleDownloadPDF = useCallback(() => {
// // // //     if (!pdfBlob) return;
// // // //     const url = URL.createObjectURL(pdfBlob);
// // // //     const a = document.createElement("a");
// // // //     a.href = url;
// // // //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// // // //     document.body.appendChild(a);
// // // //     a.click();
// // // //     document.body.removeChild(a);
// // // //     URL.revokeObjectURL(url);
// // // //   }, [pdfBlob]);

// // // //   const handleDownloadZIP = useCallback(async () => {
// // // //     if (images.length === 0) return;

// // // //     setConversionStatus("converting");
// // // //     setConversionProgress({
// // // //       current: 0,
// // // //       total: images.length,
// // // //       status: "در حال ساخت ZIP...",
// // // //     });

// // // //     try {
// // // //       const zipBlob = await PDFConverter.createZipFromImages(images);
// // // //       const url = URL.createObjectURL(zipBlob);
// // // //       const a = document.createElement("a");
// // // //       a.href = url;
// // // //       a.download = `images-${Date.now()}.zip`;
// // // //       document.body.appendChild(a);
// // // //       a.click();
// // // //       document.body.removeChild(a);
// // // //       URL.revokeObjectURL(url);
// // // //       setConversionStatus("idle");
// // // //     } catch (error) {
// // // //       console.error("ZIP creation error:", error);
// // // //       alert("خطا در ساخت ZIP");
// // // //       setConversionStatus("idle");
// // // //     }
// // // //   }, [images]);

// // // //   const goToNextStep = useCallback(() => {
// // // //     if (currentStep === "upload" && images.length > 0)
// // // //       setCurrentStep("settings");
// // // //     else if (currentStep === "settings") setCurrentStep("convert");
// // // //   }, [currentStep, images.length]);

// // // //   const goToPreviousStep = useCallback(() => {
// // // //     if (currentStep === "settings") setCurrentStep("upload");
// // // //     else if (currentStep === "convert") setCurrentStep("settings");
// // // //   }, [currentStep]);

// // // //   const resetConverter = useCallback(() => {
// // // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // // //     setImages([]);
// // // //     setSettings(initialSettings);
// // // //     setCurrentStep("upload");
// // // //     setConversionStatus("idle");
// // // //     setPdfBlob(null);
// // // //   }, [images]);

// // // //   return (
// // // //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
// // // //       {/* Progress Steps - Responsive */}
// // // //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // // //         {/* Step 1 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // // //               currentStep === "upload"
// // // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // // //                 : images.length > 0
// // // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // // //             }`}
// // // //           >
// // // //             {images.length > 0 ? (
// // // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // // //             ) : (
// // // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // // //                 1
// // // //               </span>
// // // //             )}
// // // //           </div>
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // // //             {images.length > 0 ? "چیدمان" : "آپلود"}
// // // //           </span>
// // // //         </div>

// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // // //             currentStep === "settings" || currentStep === "convert"
// // // //               ? "bg-primary/50"
// // // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // // //           }`}
// // // //         />

// // // //         {/* Step 2 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // // //               currentStep === "settings"
// // // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // // //                 : currentStep === "convert"
// // // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // // //             }`}
// // // //           >
// // // //             {currentStep === "convert" ? (
// // // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // // //             ) : (
// // // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // // //                 2
// // // //               </span>
// // // //             )}
// // // //           </div>
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // // //             تنظیمات
// // // //           </span>
// // // //         </div>

// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // // //             currentStep === "convert"
// // // //               ? "bg-primary/50"
// // // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // // //           }`}
// // // //         />

// // // //         {/* Step 3 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // // //               currentStep === "convert"
// // // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // // //             }`}
// // // //           >
// // // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // // //           </div>
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // // //             دانلود
// // // //           </span>
// // // //         </div>
// // // //       </div>

// // // //       {/* Content */}
// // // //       <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// // // //         {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
// // // //         {currentStep === "upload" && images.length === 0 && (
// // // //           <div className="space-y-4 sm:space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // //                 آپلود عکس‌ها
// // // //               </h2>
// // // //             </div>

// // // //             <div
// // // //               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// // // //                 isDragging
// // // //                   ? "border-primary/50 bg-primary/5"
// // // //                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// // // //               }`}
// // // //               onDragOver={handleDragOver}
// // // //               onDragLeave={handleDragLeave}
// // // //               onDrop={handleDrop}
// // // //             >
// // // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// // // //               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// // // //                 عکس‌ها را اینجا بکشید
// // // //               </p>
// // // //               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// // // //                 یا
// // // //               </p>
// // // //               <button
// // // //                 onClick={handleAddMoreClick}
// // // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// // // //               >
// // // //                 انتخاب از دستگاه
// // // //               </button>
// // // //               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// // // //                 JPG, PNG, WEBP • حداکثر 10MB
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Layout Section - وقتی عکس آپلود شده باشد */}
// // // //         {currentStep === "upload" && images.length > 0 && (
// // // //           <div className="space-y-4 sm:space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // //                 چیدمان عکس‌ها
// // // //               </h2>
// // // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // // //                 {images.length} عکس
// // // //               </span>
// // // //             </div>

// // // //             {/* درگ اند دراپ برای کل کادر */}
// // // //             <DndContext
// // // //               sensors={sensors}
// // // //               collisionDetection={closestCenter}
// // // //               onDragEnd={handleDragEnd}
// // // //               modifiers={[]}
// // // //             >
// // // //               <SortableContext
// // // //                 items={images.map((img) => img.id)}
// // // //                 strategy={rectSortingStrategy}
// // // //               >
// // // //                 <div className="flex flex-col gap-5">
// // // //                   {/* کادر اصلی چیدمان */}
// // // //                   <div
// // // //                     className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // // //                     rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
// // // //                     transition-all duration-300"
// // // //                   >
// // // //                     {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
// // // //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
// // // //                       {images.map((img, i) => (
// // // //                         <ImagePreview
// // // //                           key={img.id}
// // // //                           image={img}
// // // //                           index={i}
// // // //                           onNameChange={handleNameChange}
// // // //                           onDelete={handleDelete}
// // // //                           onMove={handleMove}
// // // //                           canMoveUp={i > 0}
// // // //                           canMoveDown={i < images.length - 1}
// // // //                         />
// // // //                       ))}
// // // //                       {/* Add More Button as last item in grid */}
// // // //                       <button
// // // //                         onClick={handleAddMoreClick}
// // // //                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // // //                         rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2
// // // //                         hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect
// // // //                         cursor-pointer"
// // // //                       >
// // // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// // // //                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// // // //                           افزودن عکس
// // // //                         </span>
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // // //                     <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// // // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // // //                         برای جابجایی: عکس را نگه دارید و بکشید
// // // //                       </span>
// // // //                       <span className="hidden sm:inline text-xs">•</span>
// // // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // // //                         یا از دکمه‌های بالا/پایین استفاده کنید
// // // //                       </span>
// // // //                     </div>

// // // //                     <div className="flex gap-2 w-full sm:w-auto">
// // // //                       <button
// // // //                         onClick={handleAddMoreClick}
// // // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // // //                         border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium
// // // //                         hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm
// // // //                         glass-effect text-gray-700 dark:text-gray-300"
// // // //                       >
// // // //                         <Plus className="w-4 h-4" />
// // // //                         افزودن بیشتر
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={goToNextStep}
// // // //                         disabled={images.length === 0}
// // // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // // //                         bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition
// // // //                         text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
// // // //                       >
// // // //                         ادامه
// // // //                         <ChevronLeft className="w-4 h-4" />
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </SortableContext>
// // // //             </DndContext>
// // // //           </div>
// // // //         )}

// // // //         {/* Settings Step */}
// // // //         {currentStep === "settings" && (
// // // //           <div className="space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // //                 تنظیمات PDF
// // // //               </h2>
// // // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // // //                 {images.length} عکس
// // // //               </span>
// // // //             </div>

// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //               <div className="space-y-4">
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // //                     جهت کاغذ
// // // //                   </label>
// // // //                   <select
// // // //                     value={settings.orientation}
// // // //                     onChange={(e) =>
// // // //                       handleSettingChange("orientation", e.target.value)
// // // //                     }
// // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
// // // //                   >
// // // //                     <option value="portrait">عمودی</option>
// // // //                     <option value="landscape">افقی</option>
// // // //                   </select>
// // // //                 </div>

// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // //                     سایز کاغذ
// // // //                   </label>
// // // //                   <select
// // // //                     value={settings.paperSize}
// // // //                     onChange={(e) =>
// // // //                       handleSettingChange("paperSize", e.target.value)
// // // //                     }
// // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
// // // //                   >
// // // //                     <option value="A4">A4</option>
// // // //                     <option value="A3">A3</option>
// // // //                     <option value="letter">Letter</option>
// // // //                     <option value="legal">Legal</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="space-y-4">
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // //                     حاشیه
// // // //                   </label>
// // // //                   <select
// // // //                     value={settings.margin}
// // // //                     onChange={(e) =>
// // // //                       handleSettingChange("margin", e.target.value)
// // // //                     }
// // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
// // // //                   >
// // // //                     <option value="small">کوچک</option>
// // // //                     <option value="medium">متوسط</option>
// // // //                     <option value="large">بزرگ</option>
// // // //                     <option value="none">بدون حاشیه</option>
// // // //                   </select>
// // // //                 </div>

// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // //                     کیفیت
// // // //                   </label>
// // // //                   <select
// // // //                     value={settings.quality}
// // // //                     onChange={(e) =>
// // // //                       handleSettingChange("quality", e.target.value)
// // // //                     }
// // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
// // // //                   >
// // // //                     <option value="low">پایین</option>
// // // //                     <option value="standard">استاندارد</option>
// // // //                     <option value="high">بالا</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //               >
// // // //                 <ChevronRight className="w-4 h-4" />
// // // //                 بازگشت
// // // //               </button>
// // // //               <button
// // // //                 onClick={goToNextStep}
// // // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // // //               >
// // // //                 ادامه به تبدیل
// // // //                 <ChevronLeft className="w-4 h-4" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Convert Step */}
// // // //         {currentStep === "convert" && (
// // // //           <div className="space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // //                 تبدیل و دانلود
// // // //               </h2>
// // // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // // //                 {images.length} عکس
// // // //               </span>
// // // //             </div>

// // // //             {conversionStatus === "idle" && (
// // // //               <div className="text-center space-y-4">
// // // //                 <FileImage className="w-16 h-16 mx-auto text-primary" />
// // // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // // //                   آماده برای تبدیل {images.length} عکس به PDF
// // // //                 </p>
// // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleConvert}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // // //                   >
// // // //                     <Settings className="w-5 h-5" />
// // // //                     شروع تبدیل
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={handleDownloadZIP}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //                   >
// // // //                     <Folder className="w-5 h-5" />
// // // //                     دانلود ZIP
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             {conversionStatus === "converting" && (
// // // //               <div className="text-center space-y-4">
// // // //                 <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
// // // //                 <div className="space-y-2">
// // // //                   <p className="text-lg text-gray-700 dark:text-gray-300">
// // // //                     در حال تبدیل...
// // // //                   </p>
// // // //                   <p className="text-sm text-gray-600 dark:text-gray-400">
// // // //                     {conversionProgress.status}
// // // //                   </p>
// // // //                   <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
// // // //                     <div
// // // //                       className="bg-primary h-2 rounded-full transition-all duration-300"
// // // //                       style={{
// // // //                         width: `${
// // // //                           (conversionProgress.current /
// // // //                             conversionProgress.total) *
// // // //                           100
// // // //                         }%`,
// // // //                       }}
// // // //                     />
// // // //                   </div>
// // // //                   <p className="text-xs text-gray-500 dark:text-gray-400">
// // // //                     {conversionProgress.current} از {conversionProgress.total}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             {conversionStatus === "completed" && pdfBlob && (
// // // //               <div className="text-center space-y-4">
// // // //                 <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
// // // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // // //                   تبدیل با موفقیت انجام شد!
// // // //                 </p>
// // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleDownloadPDF}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
// // // //                   >
// // // //                     <Download className="w-5 h-5" />
// // // //                     دانلود PDF
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={resetConverter}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //                   >
// // // //                     <RefreshCw className="w-5 h-5" />
// // // //                     شروع جدید
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             {conversionStatus === "error" && (
// // // //               <div className="text-center space-y-4">
// // // //                 <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
// // // //                 <p className="text-lg text-red-600 dark:text-red-400">
// // // //                   خطا در تبدیل
// // // //                 </p>
// // // //                 <div className="flex gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleConvert}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // // //                   >
// // // //                     <RefreshCw className="w-5 h-5" />
// // // //                     تلاش مجدد
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={goToPreviousStep}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //                   >
// // // //                     بازگشت
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //               >
// // // //                 <ChevronRight className="w-4 h-4" />
// // // //                 بازگشت به تنظیمات
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* Hidden file input for adding more images */}
// // // //       <input
// // // //         ref={fileInputRef}
// // // //         type="file"
// // // //         multiple
// // // //         accept=".jpg,.jpeg,.png,.webp"
// // // //         onChange={handleFileInputChange}
// // // //         className="hidden"
// // // //       />
// // // //     </div>
// // // //   );
// // // // }
// // // //components/ImageToPDFConverter.tsx
// // // "use client";

// // // import { useState, useRef, useCallback, useEffect } from "react";
// // // import {
// // //   ImageFile,
// // //   PDFSettings,
// // //   ConversionStatus,
// // //   ConversionProgress,
// // //   AppStep,
// // // } from "@/types";
// // // import { PDFConverter } from "@/lib/pdfConverter";
// // // import ImagePreview from "./ImagePreview";
// // // import { generateId, validateFile } from "@/lib/utils";
// // // import {
// // //   Upload,
// // //   CheckCircle,
// // //   Settings,
// // //   FileImage,
// // //   Download,
// // //   Folder,
// // //   RefreshCw,
// // //   ChevronLeft,
// // //   ChevronRight,
// // //   Plus,
// // //   AlertCircle,
// // //   Loader2,
// // // } from "lucide-react";
// // // import {
// // //   DndContext,
// // //   closestCenter,
// // //   KeyboardSensor,
// // //   PointerSensor,
// // //   useSensor,
// // //   useSensors,
// // //   DragEndEvent,
// // //   TouchSensor,
// // // } from "@dnd-kit/core";
// // // import {
// // //   arrayMove,
// // //   SortableContext,
// // //   sortableKeyboardCoordinates,
// // //   rectSortingStrategy,
// // // } from "@dnd-kit/sortable";

// // // const initialSettings: PDFSettings = {
// // //   orientation: "portrait",
// // //   paperSize: "A4",
// // //   margin: "medium",
// // //   quality: "standard",
// // // };

// // // export default function ImageToPDFConverter() {
// // //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// // //   const [images, setImages] = useState<ImageFile[]>([]);
// // //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// // //   const [conversionStatus, setConversionStatus] =
// // //     useState<ConversionStatus>("idle");
// // //   const [conversionProgress, setConversionProgress] =
// // //     useState<ConversionProgress>({
// // //       current: 0,
// // //       total: 0,
// // //       status: "",
// // //     });
// // //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
// // //   const [triggerFileInput, setTriggerFileInput] = useState(false);

// // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // //   const [isDragging, setIsDragging] = useState(false);

// // //   // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
// // //   const sensors = useSensors(
// // //     useSensor(PointerSensor, {
// // //       activationConstraint: {
// // //         distance: 3,
// // //       },
// // //     }),
// // //     useSensor(TouchSensor, {
// // //       activationConstraint: {
// // //         delay: 100,
// // //         tolerance: 10,
// // //       },
// // //     }),
// // //     useSensor(KeyboardSensor, {
// // //       coordinateGetter: sortableKeyboardCoordinates,
// // //     })
// // //   );

// // //   // Clean up object URLs
// // //   useEffect(() => {
// // //     return () => {
// // //       images.forEach((img) => URL.revokeObjectURL(img.url));
// // //     };
// // //   }, [images]);

// // //   // Trigger file input when state changes
// // //   useEffect(() => {
// // //     if (triggerFileInput && fileInputRef.current) {
// // //       console.log("🎯 Triggering file input programmatically");
// // //       fileInputRef.current.click();
// // //       setTriggerFileInput(false);
// // //     }
// // //   }, [triggerFileInput]);

// // //   // Handlers
// // //   const handleNameChange = useCallback((id: string, name: string) => {
// // //     setImages((prev) =>
// // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // //     );
// // //   }, []);

// // //   const handleDelete = useCallback((id: string) => {
// // //     setImages((prev) => {
// // //       const imageToDelete = prev.find((img) => img.id === id);
// // //       if (imageToDelete) {
// // //         URL.revokeObjectURL(imageToDelete.url);
// // //       }
// // //       return prev.filter((img) => img.id !== id);
// // //     });
// // //   }, []);

// // //   const handleMove = useCallback((id: string, direction: "up" | "down") => {
// // //     setImages((prev) => {
// // //       const index = prev.findIndex((img) => img.id === id);
// // //       if (index === -1) return prev;
// // //       const newIndex = direction === "up" ? index - 1 : index + 1;
// // //       if (newIndex < 0 || newIndex >= prev.length) return prev;

// // //       const updated = [...prev];
// // //       const [moved] = updated.splice(index, 1);
// // //       updated.splice(newIndex, 0, moved);
// // //       return updated;
// // //     });
// // //   }, []);

// // //   const handleDragEnd = useCallback((event: DragEndEvent) => {
// // //     const { active, over } = event;

// // //     if (over && active.id !== over.id) {
// // //       setImages((items) => {
// // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // //         const newIndex = items.findIndex((item) => item.id === over.id);

// // //         return arrayMove(items, oldIndex, newIndex);
// // //       });
// // //     }
// // //   }, []);

// // //   const handleFileSelect = useCallback((files: FileList | null) => {
// // //     if (!files) return;

// // //     console.log("📁 Files selected:", files.length);
// // //     const newImages: ImageFile[] = [];
// // //     Array.from(files).forEach((file) => {
// // //       const validation = validateFile(file);
// // //       if (validation.isValid) {
// // //         const url = URL.createObjectURL(file);
// // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // //         console.log("✅ Added file:", file.name);
// // //       } else {
// // //         console.warn("❌ Invalid file:", file.name, validation.error);
// // //         alert(validation.error);
// // //       }
// // //     });

// // //     if (newImages.length > 0) {
// // //       setImages((prev) => [...prev, ...newImages]);
// // //     }
// // //   }, []);

// // //   const handleFileInputChange = useCallback(
// // //     (e: React.ChangeEvent<HTMLInputElement>) => {
// // //       console.log("🔄 File input changed");
// // //       handleFileSelect(e.target.files);
// // //       // Reset the input value to allow selecting the same file again
// // //       if (fileInputRef.current) {
// // //         fileInputRef.current.value = "";
// // //       }
// // //     },
// // //     [handleFileSelect]
// // //   );

// // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     setIsDragging(true);
// // //   }, []);

// // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     if (e.currentTarget === e.target) {
// // //       setIsDragging(false);
// // //     }
// // //   }, []);

// // //   const handleDrop = useCallback(
// // //     (e: React.DragEvent) => {
// // //       e.preventDefault();
// // //       setIsDragging(false);
// // //       handleFileSelect(e.dataTransfer.files);
// // //     },
// // //     [handleFileSelect]
// // //   );

// // //   const handleAddMoreClick = useCallback(() => {
// // //     console.log("🔘 Add more button clicked");
// // //     setTriggerFileInput(true);
// // //   }, []);

// // //   const handleSettingChange = useCallback(
// // //     (key: keyof PDFSettings, value: string) => {
// // //       setSettings((prev) => ({ ...prev, [key]: value }));
// // //     },
// // //     []
// // //   );

// // //   const handleConvert = useCallback(async () => {
// // //     if (images.length === 0) return;

// // //     setConversionStatus("converting");
// // //     setConversionProgress({
// // //       current: 0,
// // //       total: images.length,
// // //       status: "شروع تبدیل...",
// // //     });

// // //     try {
// // //       const blob = await PDFConverter.convertImagesToPDF(
// // //         images,
// // //         settings,
// // //         setConversionProgress
// // //       );
// // //       setPdfBlob(blob);
// // //       setConversionStatus("completed");
// // //     } catch (error) {
// // //       console.error("Conversion error:", error);
// // //       setConversionStatus("error");
// // //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// // //     }
// // //   }, [images, settings]);

// // //   const handleDownloadPDF = useCallback(() => {
// // //     if (!pdfBlob) return;
// // //     const url = URL.createObjectURL(pdfBlob);
// // //     const a = document.createElement("a");
// // //     a.href = url;
// // //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// // //     document.body.appendChild(a);
// // //     a.click();
// // //     document.body.removeChild(a);
// // //     URL.revokeObjectURL(url);
// // //   }, [pdfBlob]);

// // //   const handleDownloadZIP = useCallback(async () => {
// // //     if (images.length === 0) return;

// // //     setConversionStatus("converting");
// // //     setConversionProgress({
// // //       current: 0,
// // //       total: images.length,
// // //       status: "در حال ساخت ZIP...",
// // //     });

// // //     try {
// // //       const zipBlob = await PDFConverter.createZipFromImages(images);
// // //       const url = URL.createObjectURL(zipBlob);
// // //       const a = document.createElement("a");
// // //       a.href = url;
// // //       a.download = `images-${Date.now()}.zip`;
// // //       document.body.appendChild(a);
// // //       a.click();
// // //       document.body.removeChild(a);
// // //       URL.revokeObjectURL(url);
// // //       setConversionStatus("idle");
// // //     } catch (error) {
// // //       console.error("ZIP creation error:", error);
// // //       alert("خطا در ساخت ZIP");
// // //       setConversionStatus("idle");
// // //     }
// // //   }, [images]);

// // //   const goToNextStep = useCallback(() => {
// // //     if (currentStep === "upload" && images.length > 0)
// // //       setCurrentStep("settings");
// // //     else if (currentStep === "settings") setCurrentStep("convert");
// // //   }, [currentStep, images.length]);

// // //   const goToPreviousStep = useCallback(() => {
// // //     if (currentStep === "settings") setCurrentStep("upload");
// // //     else if (currentStep === "convert") setCurrentStep("settings");
// // //   }, [currentStep]);

// // //   const resetConverter = useCallback(() => {
// // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // //     setImages([]);
// // //     setSettings(initialSettings);
// // //     setCurrentStep("upload");
// // //     setConversionStatus("idle");
// // //     setPdfBlob(null);
// // //   }, [images]);

// // //   return (
// // //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
// // //       {/* Progress Steps - Responsive */}
// // //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // //         {/* Step 1 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //               currentStep === "upload"
// // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // //                 : images.length > 0
// // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //             }`}
// // //           >
// // //             {images.length > 0 ? (
// // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // //             ) : (
// // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // //                 1
// // //               </span>
// // //             )}
// // //           </div>
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //             {images.length > 0 ? "چیدمان" : "آپلود"}
// // //           </span>
// // //         </div>

// // //         <div
// // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // //             currentStep === "settings" || currentStep === "convert"
// // //               ? "bg-primary/50"
// // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // //           }`}
// // //         />

// // //         {/* Step 2 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //               currentStep === "settings"
// // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // //                 : currentStep === "convert"
// // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //             }`}
// // //           >
// // //             {currentStep === "convert" ? (
// // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // //             ) : (
// // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // //                 2
// // //               </span>
// // //             )}
// // //           </div>
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //             تنظیمات
// // //           </span>
// // //         </div>

// // //         <div
// // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // //             currentStep === "convert"
// // //               ? "bg-primary/50"
// // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // //           }`}
// // //         />

// // //         {/* Step 3 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //               currentStep === "convert"
// // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //             }`}
// // //           >
// // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // //           </div>
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //             دانلود
// // //           </span>
// // //         </div>
// // //       </div>

// // //       {/* Content */}
// // //       <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// // //         {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
// // //         {currentStep === "upload" && images.length === 0 && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //                 آپلود عکس‌ها
// // //               </h2>
// // //             </div>

// // //             <div
// // //               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// // //                 isDragging
// // //                   ? "border-primary/50 bg-primary/5"
// // //                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// // //               }`}
// // //               onDragOver={handleDragOver}
// // //               onDragLeave={handleDragLeave}
// // //               onDrop={handleDrop}
// // //             >
// // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// // //               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// // //                 عکس‌ها را اینجا بکشید
// // //               </p>
// // //               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// // //                 یا
// // //               </p>
// // //               <button
// // //                 onClick={handleAddMoreClick}
// // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// // //               >
// // //                 انتخاب از دستگاه
// // //               </button>
// // //               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// // //                 JPG, PNG, WEBP • حداکثر 10MB
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Layout Section - وقتی عکس آپلود شده باشد */}
// // //         {currentStep === "upload" && images.length > 0 && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //                 چیدمان عکس‌ها
// // //               </h2>
// // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //                 {images.length} عکس
// // //               </span>
// // //             </div>

// // //             {/* درگ اند دراپ برای کل کادر */}
// // //             <DndContext
// // //               sensors={sensors}
// // //               collisionDetection={closestCenter}
// // //               onDragEnd={handleDragEnd}
// // //               modifiers={[]}
// // //             >
// // //               <SortableContext
// // //                 items={images.map((img) => img.id)}
// // //                 strategy={rectSortingStrategy}
// // //               >
// // //                 <div className="flex flex-col gap-5">
// // //                   {/* کادر اصلی چیدمان */}
// // //                   <div
// // //                     className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // //                     rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
// // //                     transition-all duration-300"
// // //                   >
// // //                     {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
// // //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
// // //                       {images.map((img, i) => (
// // //                         <ImagePreview
// // //                           key={img.id}
// // //                           image={img}
// // //                           index={i}
// // //                           onNameChange={handleNameChange}
// // //                           onDelete={handleDelete}
// // //                           onMove={handleMove}
// // //                           canMoveUp={i > 0}
// // //                           canMoveDown={i < images.length - 1}
// // //                         />
// // //                       ))}
// // //                       {/* Add More Button as last item in grid */}
// // //                       <button
// // //                         onClick={handleAddMoreClick}
// // //                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // //                         rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2
// // //                         hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect
// // //                         cursor-pointer"
// // //                       >
// // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// // //                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// // //                           افزودن عکس
// // //                         </span>
// // //                       </button>
// // //                     </div>
// // //                   </div>

// // //                   <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // //                     <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // //                         برای جابجایی: عکس را نگه دارید و بکشید
// // //                       </span>
// // //                       <span className="hidden sm:inline text-xs">•</span>
// // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // //                         یا از دکمه‌های بالا/پایین استفاده کنید
// // //                       </span>
// // //                     </div>

// // //                     <div className="flex gap-2 w-full sm:w-auto">
// // //                       <button
// // //                         onClick={handleAddMoreClick}
// // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // //                         border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium
// // //                         hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm
// // //                         glass-effect text-gray-700 dark:text-gray-300"
// // //                       >
// // //                         <Plus className="w-4 h-4" />
// // //                         افزودن بیشتر
// // //                       </button>
// // //                       <button
// // //                         onClick={goToNextStep}
// // //                         disabled={images.length === 0}
// // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // //                         bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition
// // //                         text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
// // //                       >
// // //                         ادامه
// // //                         <ChevronLeft className="w-4 h-4" />
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </SortableContext>
// // //             </DndContext>
// // //           </div>
// // //         )}

// // //         {/* Settings Step */}
// // //         {currentStep === "settings" && (
// // //           <div className="space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //                 تنظیمات PDF
// // //               </h2>
// // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //                 {images.length} عکس
// // //               </span>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div className="space-y-4">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // //                     جهت کاغذ
// // //                   </label>
// // //                   <select
// // //                     value={settings.orientation}
// // //                     onChange={(e) =>
// // //                       handleSettingChange("orientation", e.target.value)
// // //                     }
// // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // //                   >
// // //                     <option value="portrait">عمودی</option>
// // //                     <option value="landscape">افقی</option>
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // //                     سایز کاغذ
// // //                   </label>
// // //                   <select
// // //                     value={settings.paperSize}
// // //                     onChange={(e) =>
// // //                       handleSettingChange("paperSize", e.target.value)
// // //                     }
// // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // //                   >
// // //                     <option value="A4">A4</option>
// // //                     <option value="A3">A3</option>
// // //                     <option value="letter">Letter</option>
// // //                     <option value="legal">Legal</option>
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               <div className="space-y-4">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // //                     حاشیه
// // //                   </label>
// // //                   <select
// // //                     value={settings.margin}
// // //                     onChange={(e) =>
// // //                       handleSettingChange("margin", e.target.value)
// // //                     }
// // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // //                   >
// // //                     <option value="small">کوچک</option>
// // //                     <option value="medium">متوسط</option>
// // //                     <option value="large">بزرگ</option>
// // //                     <option value="none">بدون حاشیه</option>
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // //                     کیفیت
// // //                   </label>
// // //                   <select
// // //                     value={settings.quality}
// // //                     onChange={(e) =>
// // //                       handleSettingChange("quality", e.target.value)
// // //                     }
// // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // //                   >
// // //                     <option value="low">پایین</option>
// // //                     <option value="standard">استاندارد</option>
// // //                     <option value="high">بالا</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Preview Section - اضافه شده برای نمایش پیش‌نمایش تنظیمات */}
// // //             <div className="mt-6 p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// // //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
// // //                 پیش‌نمایش تنظیمات
// // //               </h3>
// // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     سایز:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.paperSize}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     حاشیه:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.margin === "small"
// // //                       ? "کوچک"
// // //                       : settings.margin === "medium"
// // //                       ? "متوسط"
// // //                       : settings.margin === "large"
// // //                       ? "بزرگ"
// // //                       : "بدون حاشیه"}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     کیفیت:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.quality === "low"
// // //                       ? "پایین"
// // //                       : settings.quality === "standard"
// // //                       ? "استاندارد"
// // //                       : "بالا"}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //               >
// // //                 <ChevronRight className="w-4 h-4" />
// // //                 بازگشت
// // //               </button>
// // //               <button
// // //                 onClick={goToNextStep}
// // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // //               >
// // //                 ادامه به تبدیل
// // //                 <ChevronLeft className="w-4 h-4" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Convert Step */}
// // //         {currentStep === "convert" && (
// // //           <div className="space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //                 تبدیل و دانلود
// // //               </h2>
// // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //                 {images.length} عکس
// // //               </span>
// // //             </div>

// // //             {/* نمایش خلاصه تنظیمات */}
// // //             <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// // //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
// // //                 خلاصه تنظیمات
// // //               </h3>
// // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     سایز:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.paperSize}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     حاشیه:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.margin === "small"
// // //                       ? "کوچک"
// // //                       : settings.margin === "medium"
// // //                       ? "متوسط"
// // //                       : settings.margin === "large"
// // //                       ? "بزرگ"
// // //                       : "بدون حاشیه"}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     کیفیت:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.quality === "low"
// // //                       ? "پایین"
// // //                       : settings.quality === "standard"
// // //                       ? "استاندارد"
// // //                       : "بالا"}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {conversionStatus === "idle" && (
// // //               <div className="text-center space-y-4">
// // //                 <FileImage className="w-16 h-16 mx-auto text-primary" />
// // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // //                   آماده برای تبدیل {images.length} عکس به PDF
// // //                 </p>
// // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleConvert}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // //                   >
// // //                     <Settings className="w-5 h-5" />
// // //                     شروع تبدیل
// // //                   </button>
// // //                   <button
// // //                     onClick={handleDownloadZIP}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //                   >
// // //                     <Folder className="w-5 h-5" />
// // //                     دانلود ZIP
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {conversionStatus === "converting" && (
// // //               <div className="text-center space-y-4">
// // //                 <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
// // //                 <div className="space-y-2">
// // //                   <p className="text-lg text-gray-700 dark:text-gray-300">
// // //                     در حال تبدیل...
// // //                   </p>
// // //                   <p className="text-sm text-gray-600 dark:text-gray-400">
// // //                     {conversionProgress.status}
// // //                   </p>
// // //                   <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
// // //                     <div
// // //                       className="bg-primary h-2 rounded-full transition-all duration-300"
// // //                       style={{
// // //                         width: `${
// // //                           (conversionProgress.current /
// // //                             conversionProgress.total) *
// // //                           100
// // //                         }%`,
// // //                       }}
// // //                     />
// // //                   </div>
// // //                   <p className="text-xs text-gray-500 dark:text-gray-400">
// // //                     {conversionProgress.current} از {conversionProgress.total}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {conversionStatus === "completed" && pdfBlob && (
// // //               <div className="text-center space-y-4">
// // //                 <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
// // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // //                   تبدیل با موفقیت انجام شد!
// // //                 </p>
// // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleDownloadPDF}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
// // //                   >
// // //                     <Download className="w-5 h-5" />
// // //                     دانلود PDF
// // //                   </button>
// // //                   <button
// // //                     onClick={resetConverter}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //                   >
// // //                     <RefreshCw className="w-5 h-5" />
// // //                     شروع جدید
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {conversionStatus === "error" && (
// // //               <div className="text-center space-y-4">
// // //                 <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
// // //                 <p className="text-lg text-red-600 dark:text-red-400">
// // //                   خطا در تبدیل
// // //                 </p>
// // //                 <div className="flex gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleConvert}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // //                   >
// // //                     <RefreshCw className="w-5 h-5" />
// // //                     تلاش مجدد
// // //                   </button>
// // //                   <button
// // //                     onClick={goToPreviousStep}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //                   >
// // //                     بازگشت
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //               >
// // //                 <ChevronRight className="w-4 h-4" />
// // //                 بازگشت به تنظیمات
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Hidden file input for adding more images */}
// // //       <input
// // //         ref={fileInputRef}
// // //         type="file"
// // //         multiple
// // //         accept=".jpg,.jpeg,.png,.webp"
// // //         onChange={handleFileInputChange}
// // //         className="hidden"
// // //       />
// // //     </div>
// // //   );
// // // }
// // //components/ImageToPDFConverter.tsx
// // "use client";

// // import { useState, useRef, useCallback, useEffect } from "react";
// // import {
// //   ImageFile,
// //   PDFSettings,
// //   ConversionStatus,
// //   ConversionProgress,
// //   AppStep,
// // } from "@/types";
// // import { PDFConverter } from "@/lib/pdfConverter";
// // import ImagePreview from "./ImagePreview";
// // import { generateId, validateFile } from "@/lib/utils";
// // import {
// //   Upload,
// //   CheckCircle,
// //   Settings,
// //   FileImage,
// //   Download,
// //   Folder,
// //   RefreshCw,
// //   ChevronLeft,
// //   ChevronRight,
// //   Plus,
// //   AlertCircle,
// //   Loader2,
// //   X,
// //   Maximize2,
// // } from "lucide-react";
// // import {
// //   DndContext,
// //   closestCenter,
// //   KeyboardSensor,
// //   PointerSensor,
// //   useSensor,
// //   useSensors,
// //   DragEndEvent,
// //   TouchSensor,
// // } from "@dnd-kit/core";
// // import {
// //   arrayMove,
// //   SortableContext,
// //   sortableKeyboardCoordinates,
// //   rectSortingStrategy,
// // } from "@dnd-kit/sortable";

// // const initialSettings: PDFSettings = {
// //   orientation: "portrait",
// //   paperSize: "A4",
// //   margin: "medium",
// //   quality: "standard",
// // };

// // export default function ImageToPDFConverter() {
// //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// //   const [images, setImages] = useState<ImageFile[]>([]);
// //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// //   const [conversionStatus, setConversionStatus] =
// //     useState<ConversionStatus>("idle");
// //   const [conversionProgress, setConversionProgress] =
// //     useState<ConversionProgress>({
// //       current: 0,
// //       total: 0,
// //       status: "",
// //     });
// //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
// //   const [triggerFileInput, setTriggerFileInput] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);
// //   const [isPreviewOpen, setIsPreviewOpen] = useState(false);

// //   const fileInputRef = useRef<HTMLInputElement>(null);
// //   const [isDragging, setIsDragging] = useState(false);

// //   // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
// //   const sensors = useSensors(
// //     useSensor(PointerSensor, {
// //       activationConstraint: {
// //         distance: 3,
// //       },
// //     }),
// //     useSensor(TouchSensor, {
// //       activationConstraint: {
// //         delay: 100,
// //         tolerance: 10,
// //       },
// //     }),
// //     useSensor(KeyboardSensor, {
// //       coordinateGetter: sortableKeyboardCoordinates,
// //     })
// //   );

// //   // Clean up object URLs
// //   useEffect(() => {
// //     return () => {
// //       images.forEach((img) => URL.revokeObjectURL(img.url));
// //     };
// //   }, [images]);

// //   // Trigger file input when state changes
// //   useEffect(() => {
// //     if (triggerFileInput && fileInputRef.current) {
// //       console.log("🎯 Triggering file input programmatically");
// //       fileInputRef.current.click();
// //       setTriggerFileInput(false);
// //     }
// //   }, [triggerFileInput]);

// //   // Handlers
// //   const handleNameChange = useCallback((id: string, name: string) => {
// //     setImages((prev) =>
// //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// //     );
// //   }, []);

// //   const handleDelete = useCallback(
// //     (id: string) => {
// //       setImages((prev) => {
// //         const imageToDelete = prev.find((img) => img.id === id);
// //         if (imageToDelete) {
// //           URL.revokeObjectURL(imageToDelete.url);
// //           // اگر تصویر در حال پیش‌نمایش حذف شد، پنجره پیش‌نمایش را ببند
// //           if (selectedImage?.id === id) {
// //             setSelectedImage(null);
// //             setIsPreviewOpen(false);
// //           }
// //         }
// //         return prev.filter((img) => img.id !== id);
// //       });
// //     },
// //     [selectedImage]
// //   );

// //   const handleMove = useCallback((id: string, direction: "up" | "down") => {
// //     setImages((prev) => {
// //       const index = prev.findIndex((img) => img.id === id);
// //       if (index === -1) return prev;
// //       const newIndex = direction === "up" ? index - 1 : index + 1;
// //       if (newIndex < 0 || newIndex >= prev.length) return prev;

// //       const updated = [...prev];
// //       const [moved] = updated.splice(index, 1);
// //       updated.splice(newIndex, 0, moved);
// //       return updated;
// //     });
// //   }, []);

// //   const handleDragEnd = useCallback((event: DragEndEvent) => {
// //     const { active, over } = event;

// //     if (over && active.id !== over.id) {
// //       setImages((items) => {
// //         const oldIndex = items.findIndex((item) => item.id === active.id);
// //         const newIndex = items.findIndex((item) => item.id === over.id);

// //         return arrayMove(items, oldIndex, newIndex);
// //       });
// //     }
// //   }, []);

// //   const handleFileSelect = useCallback((files: FileList | null) => {
// //     if (!files) return;

// //     console.log("📁 Files selected:", files.length);
// //     const newImages: ImageFile[] = [];
// //     Array.from(files).forEach((file) => {
// //       const validation = validateFile(file);
// //       if (validation.isValid) {
// //         const url = URL.createObjectURL(file);
// //         newImages.push({ id: generateId(), url, name: file.name, file });
// //         console.log("✅ Added file:", file.name);
// //       } else {
// //         console.warn("❌ Invalid file:", file.name, validation.error);
// //         alert(validation.error);
// //       }
// //     });

// //     if (newImages.length > 0) {
// //       setImages((prev) => [...prev, ...newImages]);
// //     }
// //   }, []);

// //   const handleFileInputChange = useCallback(
// //     (e: React.ChangeEvent<HTMLInputElement>) => {
// //       console.log("🔄 File input changed");
// //       handleFileSelect(e.target.files);
// //       // Reset the input value to allow selecting the same file again
// //       if (fileInputRef.current) {
// //         fileInputRef.current.value = "";
// //       }
// //     },
// //     [handleFileSelect]
// //   );

// //   const handleDragOver = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     setIsDragging(true);
// //   }, []);

// //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     if (e.currentTarget === e.target) {
// //       setIsDragging(false);
// //     }
// //   }, []);

// //   const handleDrop = useCallback(
// //     (e: React.DragEvent) => {
// //       e.preventDefault();
// //       setIsDragging(false);
// //       handleFileSelect(e.dataTransfer.files);
// //     },
// //     [handleFileSelect]
// //   );

// //   const handleAddMoreClick = useCallback(() => {
// //     console.log("🔘 Add more button clicked");
// //     setTriggerFileInput(true);
// //   }, []);

// //   const handleSettingChange = useCallback(
// //     (key: keyof PDFSettings, value: string) => {
// //       setSettings((prev) => ({ ...prev, [key]: value }));
// //     },
// //     []
// //   );

// //   const handleConvert = useCallback(async () => {
// //     if (images.length === 0) return;

// //     setConversionStatus("converting");
// //     setConversionProgress({
// //       current: 0,
// //       total: images.length,
// //       status: "شروع تبدیل...",
// //     });

// //     try {
// //       const blob = await PDFConverter.convertImagesToPDF(
// //         images,
// //         settings,
// //         setConversionProgress
// //       );
// //       setPdfBlob(blob);
// //       setConversionStatus("completed");
// //     } catch (error) {
// //       console.error("Conversion error:", error);
// //       setConversionStatus("error");
// //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// //     }
// //   }, [images, settings]);

// //   const handleDownloadPDF = useCallback(() => {
// //     if (!pdfBlob) return;
// //     const url = URL.createObjectURL(pdfBlob);
// //     const a = document.createElement("a");
// //     a.href = url;
// //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// //     document.body.appendChild(a);
// //     a.click();
// //     document.body.removeChild(a);
// //     URL.revokeObjectURL(url);
// //   }, [pdfBlob]);

// //   const handleDownloadZIP = useCallback(async () => {
// //     if (images.length === 0) return;

// //     setConversionStatus("converting");
// //     setConversionProgress({
// //       current: 0,
// //       total: images.length,
// //       status: "در حال ساخت ZIP...",
// //     });

// //     try {
// //       const zipBlob = await PDFConverter.createZipFromImages(images);
// //       const url = URL.createObjectURL(zipBlob);
// //       const a = document.createElement("a");
// //       a.href = url;
// //       a.download = `images-${Date.now()}.zip`;
// //       document.body.appendChild(a);
// //       a.click();
// //       document.body.removeChild(a);
// //       URL.revokeObjectURL(url);
// //       setConversionStatus("idle");
// //     } catch (error) {
// //       console.error("ZIP creation error:", error);
// //       alert("خطا در ساخت ZIP");
// //       setConversionStatus("idle");
// //     }
// //   }, [images]);

// //   const handleImagePreview = useCallback((image: ImageFile) => {
// //     setSelectedImage(image);
// //     setIsPreviewOpen(true);
// //   }, []);

// //   const handleClosePreview = useCallback(() => {
// //     setIsPreviewOpen(false);
// //     setSelectedImage(null);
// //   }, []);

// //   const goToNextStep = useCallback(() => {
// //     if (currentStep === "upload" && images.length > 0)
// //       setCurrentStep("settings");
// //     else if (currentStep === "settings") setCurrentStep("convert");
// //   }, [currentStep, images.length]);

// //   const goToPreviousStep = useCallback(() => {
// //     if (currentStep === "settings") setCurrentStep("upload");
// //     else if (currentStep === "convert") setCurrentStep("settings");
// //   }, [currentStep]);

// //   const resetConverter = useCallback(() => {
// //     images.forEach((img) => URL.revokeObjectURL(img.url));
// //     setImages([]);
// //     setSettings(initialSettings);
// //     setCurrentStep("upload");
// //     setConversionStatus("idle");
// //     setPdfBlob(null);
// //     setSelectedImage(null);
// //     setIsPreviewOpen(false);
// //   }, [images]);

// //   // Modal Preview Component
// //   const ImagePreviewModal = () => {
// //     if (!isPreviewOpen || !selectedImage) return null;

// //     return (
// //       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
// //         <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
// //           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
// //             {/* Header */}
// //             <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
// //                 {selectedImage.name}
// //               </h3>
// //               <div className="flex items-center gap-2">
// //                 <button
// //                   onClick={() => window.open(selectedImage.url, "_blank")}
// //                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
// //                   title="باز کردن در تب جدید"
// //                 >
// //                   <Maximize2 className="w-5 h-5" />
// //                 </button>
// //                 <button
// //                   onClick={handleClosePreview}
// //                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
// //                 >
// //                   <X className="w-6 h-6" />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Image */}
// //             <div className="flex items-center justify-center p-4 max-h-[70vh] overflow-auto">
// //               <img
// //                 src={selectedImage.url}
// //                 alt={selectedImage.name}
// //                 className="max-w-full max-h-full object-contain rounded-lg"
// //               />
// //             </div>

// //             {/* Footer */}
// //             <div className="p-4 border-t border-gray-200 dark:border-gray-700">
// //               <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
// //                 <div className="text-sm text-gray-600 dark:text-gray-400">
// //                   برای بستن، روی دکمه × کلیک کنید یا ESC را فشار دهید
// //                 </div>
// //                 <button
// //                   onClick={handleClosePreview}
// //                   className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
// //                 >
// //                   بستن
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
// //       {/* Progress Steps - Responsive */}
// //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// //         {/* Step 1 */}
// //         <div className="flex flex-col items-center flex-1 max-w-24">
// //           <div
// //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// //               currentStep === "upload"
// //                 ? "bg-primary/20 border-primary/50 text-primary"
// //                 : images.length > 0
// //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// //             }`}
// //           >
// //             {images.length > 0 ? (
// //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// //             ) : (
// //               <span className="text-sm sm:text-base md:text-lg font-bold">
// //                 1
// //               </span>
// //             )}
// //           </div>
// //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// //             {images.length > 0 ? "چیدمان" : "آپلود"}
// //           </span>
// //         </div>

// //         <div
// //           className={`h-1 flex-1 transition-colors glass-effect ${
// //             currentStep === "settings" || currentStep === "convert"
// //               ? "bg-primary/50"
// //               : "bg-gray-300/50 dark:bg-gray-600/50"
// //           }`}
// //         />

// //         {/* Step 2 */}
// //         <div className="flex flex-col items-center flex-1 max-w-24">
// //           <div
// //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// //               currentStep === "settings"
// //                 ? "bg-primary/20 border-primary/50 text-primary"
// //                 : currentStep === "convert"
// //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// //             }`}
// //           >
// //             {currentStep === "convert" ? (
// //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// //             ) : (
// //               <span className="text-sm sm:text-base md:text-lg font-bold">
// //                 2
// //               </span>
// //             )}
// //           </div>
// //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// //             تنظیمات
// //           </span>
// //         </div>

// //         <div
// //           className={`h-1 flex-1 transition-colors glass-effect ${
// //             currentStep === "convert"
// //               ? "bg-primary/50"
// //               : "bg-gray-300/50 dark:bg-gray-600/50"
// //           }`}
// //         />

// //         {/* Step 3 */}
// //         <div className="flex flex-col items-center flex-1 max-w-24">
// //           <div
// //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// //               currentStep === "convert"
// //                 ? "bg-primary/20 border-primary/50 text-primary"
// //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// //             }`}
// //           >
// //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// //           </div>
// //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// //             دانلود
// //           </span>
// //         </div>
// //       </div>

// //       {/* Content */}
// //       <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// //         {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
// //         {currentStep === "upload" && images.length === 0 && (
// //           <div className="space-y-4 sm:space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 آپلود عکس‌ها
// //               </h2>
// //             </div>

// //             <div
// //               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// //                 isDragging
// //                   ? "border-primary/50 bg-primary/5"
// //                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// //               }`}
// //               onDragOver={handleDragOver}
// //               onDragLeave={handleDragLeave}
// //               onDrop={handleDrop}
// //             >
// //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// //               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// //                 عکس‌ها را اینجا بکشید
// //               </p>
// //               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// //                 یا
// //               </p>
// //               <button
// //                 onClick={handleAddMoreClick}
// //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// //               >
// //                 انتخاب از دستگاه
// //               </button>
// //               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// //                 JPG, PNG, WEBP • حداکثر 10MB
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {/* Layout Section - وقتی عکس آپلود شده باشد */}
// //         {currentStep === "upload" && images.length > 0 && (
// //           <div className="space-y-4 sm:space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 چیدمان عکس‌ها
// //               </h2>
// //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //                 {images.length} عکس
// //               </span>
// //             </div>

// //             {/* درگ اند دراپ برای کل کادر */}
// //             <DndContext
// //               sensors={sensors}
// //               collisionDetection={closestCenter}
// //               onDragEnd={handleDragEnd}
// //               modifiers={[]}
// //             >
// //               <SortableContext
// //                 items={images.map((img) => img.id)}
// //                 strategy={rectSortingStrategy}
// //               >
// //                 <div className="flex flex-col gap-5">
// //                   {/* کادر اصلی چیدمان */}
// //                   <div
// //                     className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// //                     rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
// //                     transition-all duration-300"
// //                   >
// //                     {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
// //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
// //                       {images.map((img, i) => (
// //                         <ImagePreview
// //                           key={img.id}
// //                           image={img}
// //                           index={i}
// //                           onNameChange={handleNameChange}
// //                           onDelete={handleDelete}
// //                           onMove={handleMove}
// //                           onPreview={handleImagePreview}
// //                           canMoveUp={i > 0}
// //                           canMoveDown={i < images.length - 1}
// //                         />
// //                       ))}
// //                       {/* Add More Button as last item in grid */}
// //                       <button
// //                         onClick={handleAddMoreClick}
// //                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// //                         rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2
// //                         hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect
// //                         cursor-pointer"
// //                       >
// //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// //                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// //                           افزودن عکس
// //                         </span>
// //                       </button>
// //                     </div>
// //                   </div>

// //                   <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// //                     <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// //                         برای جابجایی: عکس را نگه دارید و بکشید
// //                       </span>
// //                       <span className="hidden sm:inline text-xs">•</span>
// //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// //                         برای پیش‌نمایش: روی عکس کلیک کنید
// //                       </span>
// //                     </div>

// //                     <div className="flex gap-2 w-full sm:w-auto">
// //                       <button
// //                         onClick={handleAddMoreClick}
// //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// //                         border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium
// //                         hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm
// //                         glass-effect text-gray-700 dark:text-gray-300"
// //                       >
// //                         <Plus className="w-4 h-4" />
// //                         افزودن بیشتر
// //                       </button>
// //                       <button
// //                         onClick={goToNextStep}
// //                         disabled={images.length === 0}
// //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// //                         bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition
// //                         text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
// //                       >
// //                         ادامه
// //                         <ChevronLeft className="w-4 h-4" />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </SortableContext>
// //             </DndContext>
// //           </div>
// //         )}

// //         {/* Settings Step */}
// //         {currentStep === "settings" && (
// //           <div className="space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 تنظیمات PDF
// //               </h2>
// //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //                 {images.length} عکس
// //               </span>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div className="space-y-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// //                     جهت کاغذ
// //                   </label>
// //                   <select
// //                     value={settings.orientation}
// //                     onChange={(e) =>
// //                       handleSettingChange("orientation", e.target.value)
// //                     }
// //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// //                   >
// //                     <option value="portrait">عمودی</option>
// //                     <option value="landscape">افقی</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// //                     سایز کاغذ
// //                   </label>
// //                   <select
// //                     value={settings.paperSize}
// //                     onChange={(e) =>
// //                       handleSettingChange("paperSize", e.target.value)
// //                     }
// //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// //                   >
// //                     <option value="A4">A4</option>
// //                     <option value="A3">A3</option>
// //                     <option value="letter">Letter</option>
// //                     <option value="legal">Legal</option>
// //                   </select>
// //                 </div>
// //               </div>

// //               <div className="space-y-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// //                     حاشیه
// //                   </label>
// //                   <select
// //                     value={settings.margin}
// //                     onChange={(e) =>
// //                       handleSettingChange("margin", e.target.value)
// //                     }
// //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// //                   >
// //                     <option value="small">کوچک</option>
// //                     <option value="medium">متوسط</option>
// //                     <option value="large">بزرگ</option>
// //                     <option value="none">بدون حاشیه</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// //                     کیفیت
// //                   </label>
// //                   <select
// //                     value={settings.quality}
// //                     onChange={(e) =>
// //                       handleSettingChange("quality", e.target.value)
// //                     }
// //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// //                   >
// //                     <option value="low">پایین</option>
// //                     <option value="standard">استاندارد</option>
// //                     <option value="high">بالا</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Preview Section - اضافه شده برای نمایش پیش‌نمایش تنظیمات */}
// //             <div className="mt-6 p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
// //                 پیش‌نمایش تنظیمات
// //               </h3>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">
// //                     سایز:
// //                   </span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.paperSize}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">
// //                     حاشیه:
// //                   </span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.margin === "small"
// //                       ? "کوچک"
// //                       : settings.margin === "medium"
// //                       ? "متوسط"
// //                       : settings.margin === "large"
// //                       ? "بزرگ"
// //                       : "بدون حاشیه"}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">
// //                     کیفیت:
// //                   </span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.quality === "low"
// //                       ? "پایین"
// //                       : settings.quality === "standard"
// //                       ? "استاندارد"
// //                       : "بالا"}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// //               <button
// //                 onClick={goToPreviousStep}
// //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //               >
// //                 <ChevronRight className="w-4 h-4" />
// //                 بازگشت
// //               </button>
// //               <button
// //                 onClick={goToNextStep}
// //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// //               >
// //                 ادامه به تبدیل
// //                 <ChevronLeft className="w-4 h-4" />
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {/* Convert Step */}
// //         {currentStep === "convert" && (
// //           <div className="space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 تبدیل و دانلود
// //               </h2>
// //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //                 {images.length} عکس
// //               </span>
// //             </div>

// //             {/* نمایش خلاصه تنظیمات */}
// //             <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
// //                 خلاصه تنظیمات
// //               </h3>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">
// //                     سایز:
// //                   </span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.paperSize}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">
// //                     حاشیه:
// //                   </span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.margin === "small"
// //                       ? "کوچک"
// //                       : settings.margin === "medium"
// //                       ? "متوسط"
// //                       : settings.margin === "large"
// //                       ? "بزرگ"
// //                       : "بدون حاشیه"}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">
// //                     کیفیت:
// //                   </span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.quality === "low"
// //                       ? "پایین"
// //                       : settings.quality === "standard"
// //                       ? "استاندارد"
// //                       : "بالا"}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             {conversionStatus === "idle" && (
// //               <div className="text-center space-y-4">
// //                 <FileImage className="w-16 h-16 mx-auto text-primary" />
// //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// //                   آماده برای تبدیل {images.length} عکس به PDF
// //                 </p>
// //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// //                   <button
// //                     onClick={handleConvert}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// //                   >
// //                     <Settings className="w-5 h-5" />
// //                     شروع تبدیل
// //                   </button>
// //                   <button
// //                     onClick={handleDownloadZIP}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //                   >
// //                     <Folder className="w-5 h-5" />
// //                     دانلود ZIP
// //                   </button>
// //                 </div>
// //               </div>
// //             )}

// //             {conversionStatus === "converting" && (
// //               <div className="text-center space-y-4">
// //                 <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
// //                 <div className="space-y-2">
// //                   <p className="text-lg text-gray-700 dark:text-gray-300">
// //                     در حال تبدیل...
// //                   </p>
// //                   <p className="text-sm text-gray-600 dark:text-gray-400">
// //                     {conversionProgress.status}
// //                   </p>
// //                   <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
// //                     <div
// //                       className="bg-primary h-2 rounded-full transition-all duration-300"
// //                       style={{
// //                         width: `${
// //                           (conversionProgress.current /
// //                             conversionProgress.total) *
// //                           100
// //                         }%`,
// //                       }}
// //                     />
// //                   </div>
// //                   <p className="text-xs text-gray-500 dark:text-gray-400">
// //                     {conversionProgress.current} از {conversionProgress.total}
// //                   </p>
// //                 </div>
// //               </div>
// //             )}

// //             {conversionStatus === "completed" && pdfBlob && (
// //               <div className="text-center space-y-4">
// //                 <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
// //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// //                   تبدیل با موفقیت انجام شد!
// //                 </p>
// //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// //                   <button
// //                     onClick={handleDownloadPDF}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
// //                   >
// //                     <Download className="w-5 h-5" />
// //                     دانلود PDF
// //                   </button>
// //                   <button
// //                     onClick={resetConverter}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //                   >
// //                     <RefreshCw className="w-5 h-5" />
// //                     شروع جدید
// //                   </button>
// //                 </div>
// //               </div>
// //             )}

// //             {conversionStatus === "error" && (
// //               <div className="text-center space-y-4">
// //                 <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
// //                 <p className="text-lg text-red-600 dark:text-red-400">
// //                   خطا در تبدیل
// //                 </p>
// //                 <div className="flex gap-3 justify-center">
// //                   <button
// //                     onClick={handleConvert}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// //                   >
// //                     <RefreshCw className="w-5 h-5" />
// //                     تلاش مجدد
// //                   </button>
// //                   <button
// //                     onClick={goToPreviousStep}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //                   >
// //                     بازگشت
// //                   </button>
// //                 </div>
// //               </div>
// //             )}

// //             <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// //               <button
// //                 onClick={goToPreviousStep}
// //                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //               >
// //                 <ChevronRight className="w-4 h-4" />
// //                 بازگشت به تنظیمات
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Hidden file input for adding more images */}
// //       <input
// //         ref={fileInputRef}
// //         type="file"
// //         multiple
// //         accept=".jpg,.jpeg,.png,.webp"
// //         onChange={handleFileInputChange}
// //         className="hidden"
// //       />

// //       {/* Image Preview Modal */}
// //       <ImagePreviewModal />
// //     </div>
// //   );
// // }
// //components/ImageToPDFConverter.tsx
// "use client";

// import { useState, useRef, useCallback, useEffect } from "react";
// import {
//   ImageFile,
//   PDFSettings,
//   ConversionStatus,
//   ConversionProgress,
//   AppStep,
// } from "@/types";
// import { PDFConverter } from "@/lib/pdfConverter";
// import ImagePreview from "./ImagePreview";
// import { generateId, validateFile } from "@/lib/utils";
// import {
//   Upload,
//   CheckCircle,
//   Settings,
//   FileImage,
//   Download,
//   Folder,
//   RefreshCw,
//   ChevronLeft,
//   ChevronRight,
//   Plus,
//   AlertCircle,
//   Loader2,
//   X,
//   Maximize2,
//   Eye,
// } from "lucide-react";
// import {
//   DndContext,
//   closestCenter,
//   KeyboardSensor,
//   PointerSensor,
//   useSensor,
//   useSensors,
//   DragEndEvent,
//   TouchSensor,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   rectSortingStrategy,
// } from "@dnd-kit/sortable";

// const initialSettings: PDFSettings = {
//   orientation: "portrait",
//   paperSize: "A4",
//   margin: "medium",
//   quality: "standard",
// };

// // تابع کمکی برای تبدیل سایز کاغذ به ابعاد پیکسل برای پیش‌نمایش
// const getPaperDimensions = (paperSize: string, orientation: string) => {
//   const dimensions: { [key: string]: { width: number; height: number } } = {
//     A4: { width: 210, height: 297 },
//     A3: { width: 297, height: 420 },
//     letter: { width: 216, height: 279 },
//     legal: { width: 216, height: 356 },
//   };

//   const size = dimensions[paperSize] || dimensions.A4;
//   return orientation === "landscape"
//     ? { width: size.height, height: size.width }
//     : size;
// };

// // تابع کمکی برای محاسبه حاشیه
// const getMarginSize = (margin: string) => {
//   const margins: { [key: string]: number } = {
//     none: 0,
//     small: 10,
//     medium: 20,
//     large: 30,
//   };
//   return margins[margin] || margins.medium;
// };

// export default function ImageToPDFConverter() {
//   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
//   const [images, setImages] = useState<ImageFile[]>([]);
//   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
//   const [conversionStatus, setConversionStatus] =
//     useState<ConversionStatus>("idle");
//   const [conversionProgress, setConversionProgress] =
//     useState<ConversionProgress>({
//       current: 0,
//       total: 0,
//       status: "",
//     });
//   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
//   const [triggerFileInput, setTriggerFileInput] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [isDragging, setIsDragging] = useState(false);

//   // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 3,
//       },
//     }),
//     useSensor(TouchSensor, {
//       activationConstraint: {
//         delay: 100,
//         tolerance: 10,
//       },
//     }),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );

//   // Clean up object URLs
//   useEffect(() => {
//     return () => {
//       images.forEach((img) => URL.revokeObjectURL(img.url));
//     };
//   }, [images]);

//   // Trigger file input when state changes
//   useEffect(() => {
//     if (triggerFileInput && fileInputRef.current) {
//       console.log("🎯 Triggering file input programmatically");
//       fileInputRef.current.click();
//       setTriggerFileInput(false);
//     }
//   }, [triggerFileInput]);

//   // Handlers
//   const handleNameChange = useCallback((id: string, name: string) => {
//     setImages((prev) =>
//       prev.map((img) => (img.id === id ? { ...img, name } : img))
//     );
//   }, []);

//   const handleDelete = useCallback(
//     (id: string) => {
//       setImages((prev) => {
//         const imageToDelete = prev.find((img) => img.id === id);
//         if (imageToDelete) {
//           URL.revokeObjectURL(imageToDelete.url);
//           // اگر تصویر در حال پیش‌نمایش حذف شد، پنجره پیش‌نمایش را ببند
//           if (selectedImage?.id === id) {
//             setSelectedImage(null);
//             setIsPreviewOpen(false);
//           }
//         }
//         return prev.filter((img) => img.id !== id);
//       });
//     },
//     [selectedImage]
//   );

//   const handleMove = useCallback((id: string, direction: "up" | "down") => {
//     setImages((prev) => {
//       const index = prev.findIndex((img) => img.id === id);
//       if (index === -1) return prev;
//       const newIndex = direction === "up" ? index - 1 : index + 1;
//       if (newIndex < 0 || newIndex >= prev.length) return prev;

//       const updated = [...prev];
//       const [moved] = updated.splice(index, 1);
//       updated.splice(newIndex, 0, moved);
//       return updated;
//     });
//   }, []);

//   const handleDragEnd = useCallback((event: DragEndEvent) => {
//     const { active, over } = event;

//     if (over && active.id !== over.id) {
//       setImages((items) => {
//         const oldIndex = items.findIndex((item) => item.id === active.id);
//         const newIndex = items.findIndex((item) => item.id === over.id);

//         return arrayMove(items, oldIndex, newIndex);
//       });
//     }
//   }, []);

//   const handleFileSelect = useCallback((files: FileList | null) => {
//     if (!files) return;

//     console.log("📁 Files selected:", files.length);
//     const newImages: ImageFile[] = [];
//     Array.from(files).forEach((file) => {
//       const validation = validateFile(file);
//       if (validation.isValid) {
//         const url = URL.createObjectURL(file);
//         newImages.push({ id: generateId(), url, name: file.name, file });
//         console.log("✅ Added file:", file.name);
//       } else {
//         console.warn("❌ Invalid file:", file.name, validation.error);
//         alert(validation.error);
//       }
//     });

//     if (newImages.length > 0) {
//       setImages((prev) => [...prev, ...newImages]);
//     }
//   }, []);

//   const handleFileInputChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       console.log("🔄 File input changed");
//       handleFileSelect(e.target.files);
//       // Reset the input value to allow selecting the same file again
//       if (fileInputRef.current) {
//         fileInputRef.current.value = "";
//       }
//     },
//     [handleFileSelect]
//   );

//   const handleDragOver = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(true);
//   }, []);

//   const handleDragLeave = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     if (e.currentTarget === e.target) {
//       setIsDragging(false);
//     }
//   }, []);

//   const handleDrop = useCallback(
//     (e: React.DragEvent) => {
//       e.preventDefault();
//       setIsDragging(false);
//       handleFileSelect(e.dataTransfer.files);
//     },
//     [handleFileSelect]
//   );

//   const handleAddMoreClick = useCallback(() => {
//     console.log("🔘 Add more button clicked");
//     setTriggerFileInput(true);
//   }, []);

//   const handleSettingChange = useCallback(
//     (key: keyof PDFSettings, value: string) => {
//       setSettings((prev) => ({ ...prev, [key]: value }));
//     },
//     []
//   );

//   const handleConvert = useCallback(async () => {
//     if (images.length === 0) return;

//     setConversionStatus("converting");
//     setConversionProgress({
//       current: 0,
//       total: images.length,
//       status: "شروع تبدیل...",
//     });

//     try {
//       const blob = await PDFConverter.convertImagesToPDF(
//         images,
//         settings,
//         setConversionProgress
//       );
//       setPdfBlob(blob);
//       setConversionStatus("completed");
//     } catch (error) {
//       console.error("Conversion error:", error);
//       setConversionStatus("error");
//       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
//     }
//   }, [images, settings]);

//   const handleDownloadPDF = useCallback(() => {
//     if (!pdfBlob) return;
//     const url = URL.createObjectURL(pdfBlob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `images-to-pdf-${Date.now()}.pdf`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   }, [pdfBlob]);

//   const handleDownloadZIP = useCallback(async () => {
//     if (images.length === 0) return;

//     setConversionStatus("converting");
//     setConversionProgress({
//       current: 0,
//       total: images.length,
//       status: "در حال ساخت ZIP...",
//     });

//     try {
//       const zipBlob = await PDFConverter.createZipFromImages(images);
//       const url = URL.createObjectURL(zipBlob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `images-${Date.now()}.zip`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
//       setConversionStatus("idle");
//     } catch (error) {
//       console.error("ZIP creation error:", error);
//       alert("خطا در ساخت ZIP");
//       setConversionStatus("idle");
//     }
//   }, [images]);

//   const handleImagePreview = useCallback((image: ImageFile) => {
//     setSelectedImage(image);
//     setIsPreviewOpen(true);
//   }, []);

//   const handleClosePreview = useCallback(() => {
//     setIsPreviewOpen(false);
//     setSelectedImage(null);
//   }, []);

//   const goToNextStep = useCallback(() => {
//     if (currentStep === "upload" && images.length > 0)
//       setCurrentStep("settings");
//     else if (currentStep === "settings") setCurrentStep("convert");
//   }, [currentStep, images.length]);

//   const goToPreviousStep = useCallback(() => {
//     if (currentStep === "settings") setCurrentStep("upload");
//     else if (currentStep === "convert") setCurrentStep("settings");
//   }, [currentStep]);

//   const resetConverter = useCallback(() => {
//     images.forEach((img) => URL.revokeObjectURL(img.url));
//     setImages([]);
//     setSettings(initialSettings);
//     setCurrentStep("upload");
//     setConversionStatus("idle");
//     setPdfBlob(null);
//     setSelectedImage(null);
//     setIsPreviewOpen(false);
//   }, [images]);

//   // کامپوننت پیش‌نمایش PDF
//   const PDFPreview = () => {
//     const dimensions = getPaperDimensions(
//       settings.paperSize,
//       settings.orientation
//     );
//     const margin = getMarginSize(settings.margin);

//     // مقیاس برای نمایش در پیش‌نمایش
//     const scale = 0.8;
//     const previewWidth = dimensions.width * scale;
//     const previewHeight = dimensions.height * scale;
//     const previewMargin = margin * scale;

//     return (
//       <div className="flex flex-col items-center space-y-4 p-4 bg-white/5 dark:bg-black/5 rounded-lg border border-gray-300/50 dark:border-gray-600/50">
//         <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
//           <Eye className="w-4 h-4" />
//           پیش‌نمایش خروجی PDF
//         </div>

//         <div className="relative bg-white shadow-lg rounded-sm border border-gray-300">
//           {/* کاغذ */}
//           <div
//             className="bg-white relative"
//             style={{
//               width: `${previewWidth}px`,
//               height: `${previewHeight}px`,
//               padding: `${previewMargin}px`,
//             }}
//           >
//             {/* محتوای نمونه */}
//             <div className="w-full h-full border border-dashed border-gray-300/50 rounded flex flex-col items-center justify-center p-2">
//               {images.length > 0 ? (
//                 <>
//                   <div className="text-xs text-gray-500 text-center mb-2">
//                     {images.length} عکس در {settings.paperSize}
//                   </div>
//                   <div className="grid grid-cols-2 gap-1 w-full flex-1">
//                     {images.slice(0, 4).map((img, index) => (
//                       <div
//                         key={img.id}
//                         className="bg-gray-100 border border-gray-300 rounded flex items-center justify-center overflow-hidden"
//                         title={img.name}
//                       >
//                         <div className="text-[8px] text-gray-500 p-1 truncate w-full text-center">
//                           {index === 3 && images.length > 4
//                             ? `+${images.length - 3} بیشتر`
//                             : `عکس ${index + 1}`}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               ) : (
//                 <div className="text-xs text-gray-400 text-center">
//                   عکسی برای نمایش وجود ندارد
//                 </div>
//               )}
//             </div>

//             {/* نشانگر جهت */}
//             <div
//               className={`absolute bottom-1 left-1 text-[8px] text-gray-400 ${
//                 settings.orientation === "landscape"
//                   ? "transform rotate-90 origin-left"
//                   : ""
//               }`}
//             >
//               {settings.orientation === "portrait" ? "عمودی" : "افقی"}
//             </div>
//           </div>
//         </div>

//         {/* اطلاعات سایز */}
//         <div className="text-xs text-gray-500 text-center">
//           سایز: {settings.paperSize} • جهت:{" "}
//           {settings.orientation === "portrait" ? "عمودی" : "افقی"} • حاشیه:{" "}
//           {settings.margin === "none" ? "بدون" : settings.margin}
//         </div>
//       </div>
//     );
//   };

//   // Modal Preview Component
//   const ImagePreviewModal = () => {
//     if (!isPreviewOpen || !selectedImage) return null;

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
//         <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
//           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
//             {/* Header */}
//             <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                 {selectedImage.name}
//               </h3>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => window.open(selectedImage.url, "_blank")}
//                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
//                   title="باز کردن در تب جدید"
//                 >
//                   <Maximize2 className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={handleClosePreview}
//                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="flex items-center justify-center p-4 max-h-[70vh] overflow-auto">
//               <img
//                 src={selectedImage.url}
//                 alt={selectedImage.name}
//                 className="max-w-full max-h-full object-contain rounded-lg"
//               />
//             </div>

//             {/* Footer */}
//             <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
//                 <div className="text-sm text-gray-600 dark:text-gray-400">
//                   برای بستن، روی دکمه × کلیک کنید یا ESC را فشار دهید
//                 </div>
//                 <button
//                   onClick={handleClosePreview}
//                   className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
//                 >
//                   بستن
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
//       {/* Progress Steps - Responsive */}
//       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
//         {/* Step 1 */}
//         <div className="flex flex-col items-center flex-1 max-w-24">
//           <div
//             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
//               currentStep === "upload"
//                 ? "bg-primary/20 border-primary/50 text-primary"
//                 : images.length > 0
//                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
//                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
//             }`}
//           >
//             {images.length > 0 ? (
//               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             ) : (
//               <span className="text-sm sm:text-base md:text-lg font-bold">
//                 1
//               </span>
//             )}
//           </div>
//           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
//             {images.length > 0 ? "چیدمان" : "آپلود"}
//           </span>
//         </div>

//         <div
//           className={`h-1 flex-1 transition-colors glass-effect ${
//             currentStep === "settings" || currentStep === "convert"
//               ? "bg-primary/50"
//               : "bg-gray-300/50 dark:bg-gray-600/50"
//           }`}
//         />

//         {/* Step 2 */}
//         <div className="flex flex-col items-center flex-1 max-w-24">
//           <div
//             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
//               currentStep === "settings"
//                 ? "bg-primary/20 border-primary/50 text-primary"
//                 : currentStep === "convert"
//                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
//                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
//             }`}
//           >
//             {currentStep === "convert" ? (
//               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             ) : (
//               <span className="text-sm sm:text-base md:text-lg font-bold">
//                 2
//               </span>
//             )}
//           </div>
//           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
//             تنظیمات
//           </span>
//         </div>

//         <div
//           className={`h-1 flex-1 transition-colors glass-effect ${
//             currentStep === "convert"
//               ? "bg-primary/50"
//               : "bg-gray-300/50 dark:bg-gray-600/50"
//           }`}
//         />

//         {/* Step 3 */}
//         <div className="flex flex-col items-center flex-1 max-w-24">
//           <div
//             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
//               currentStep === "convert"
//                 ? "bg-primary/20 border-primary/50 text-primary"
//                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
//             }`}
//           >
//             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
//           </div>
//           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
//             دانلود
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
//         {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
//         {currentStep === "upload" && images.length === 0 && (
//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 آپلود عکس‌ها
//               </h2>
//             </div>

//             <div
//               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
//                 isDragging
//                   ? "border-primary/50 bg-primary/5"
//                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
//               }`}
//               onDragOver={handleDragOver}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//             >
//               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
//               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
//                 عکس‌ها را اینجا بکشید
//               </p>
//               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
//                 یا
//               </p>
//               <button
//                 onClick={handleAddMoreClick}
//                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
//               >
//                 انتخاب از دستگاه
//               </button>
//               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
//                 JPG, PNG, WEBP • حداکثر 10MB
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Layout Section - وقتی عکس آپلود شده باشد */}
//         {currentStep === "upload" && images.length > 0 && (
//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 چیدمان عکس‌ها
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 {images.length} عکس
//               </span>
//             </div>

//             {/* درگ اند دراپ برای کل کادر */}
//             <DndContext
//               sensors={sensors}
//               collisionDetection={closestCenter}
//               onDragEnd={handleDragEnd}
//               modifiers={[]}
//             >
//               <SortableContext
//                 items={images.map((img) => img.id)}
//                 strategy={rectSortingStrategy}
//               >
//                 <div className="flex flex-col gap-5">
//                   {/* کادر اصلی چیدمان */}
//                   <div
//                     className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
//                     rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
//                     transition-all duration-300"
//                   >
//                     {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
//                       {images.map((img, i) => (
//                         <ImagePreview
//                           key={img.id}
//                           image={img}
//                           index={i}
//                           onNameChange={handleNameChange}
//                           onDelete={handleDelete}
//                           onMove={handleMove}
//                           onPreview={handleImagePreview}
//                           canMoveUp={i > 0}
//                           canMoveDown={i < images.length - 1}
//                         />
//                       ))}
//                       {/* Add More Button as last item in grid */}
//                       <button
//                         onClick={handleAddMoreClick}
//                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
//                         rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2
//                         hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect
//                         cursor-pointer"
//                       >
//                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
//                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
//                           افزودن عکس
//                         </span>
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
//                     <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                       <span className="text-xs sm:text-sm text-center sm:text-right">
//                         برای جابجایی: عکس را نگه دارید و بکشید
//                       </span>
//                       <span className="hidden sm:inline text-xs">•</span>
//                       <span className="text-xs sm:text-sm text-center sm:text-right">
//                         برای پیش‌نمایش: روی عکس کلیک کنید
//                       </span>
//                     </div>

//                     <div className="flex gap-2 w-full sm:w-auto">
//                       <button
//                         onClick={handleAddMoreClick}
//                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
//                         border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium
//                         hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm
//                         glass-effect text-gray-700 dark:text-gray-300"
//                       >
//                         <Plus className="w-4 h-4" />
//                         افزودن بیشتر
//                       </button>
//                       <button
//                         onClick={goToNextStep}
//                         disabled={images.length === 0}
//                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
//                         bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition
//                         text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         ادامه
//                         <ChevronLeft className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SortableContext>
//             </DndContext>
//           </div>
//         )}

//         {/* Settings Step */}
//         {currentStep === "settings" && (
//           <div className="space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 تنظیمات PDF
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 {images.length} عکس
//               </span>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* تنظیمات */}
//               <div className="lg:col-span-2 space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                       جهت کاغذ
//                     </label>
//                     <select
//                       value={settings.orientation}
//                       onChange={(e) =>
//                         handleSettingChange("orientation", e.target.value)
//                       }
//                       className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
//                     >
//                       <option value="portrait">عمودی</option>
//                       <option value="landscape">افقی</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                       سایز کاغذ
//                     </label>
//                     <select
//                       value={settings.paperSize}
//                       onChange={(e) =>
//                         handleSettingChange("paperSize", e.target.value)
//                       }
//                       className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
//                     >
//                       <option value="A4">A4</option>
//                       <option value="A3">A3</option>
//                       <option value="letter">Letter</option>
//                       <option value="legal">Legal</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                       حاشیه
//                     </label>
//                     <select
//                       value={settings.margin}
//                       onChange={(e) =>
//                         handleSettingChange("margin", e.target.value)
//                       }
//                       className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
//                     >
//                       <option value="small">کوچک</option>
//                       <option value="medium">متوسط</option>
//                       <option value="large">بزرگ</option>
//                       <option value="none">بدون حاشیه</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                       کیفیت
//                     </label>
//                     <select
//                       value={settings.quality}
//                       onChange={(e) =>
//                         handleSettingChange("quality", e.target.value)
//                       }
//                       className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
//                     >
//                       <option value="low">پایین</option>
//                       <option value="standard">استاندارد</option>
//                       <option value="high">بالا</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Preview Section - اضافه شده برای نمایش پیش‌نمایش تنظیمات */}
//                 <div className="mt-4 p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
//                   <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
//                     پیش‌نمایش تنظیمات
//                   </h3>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                     <div>
//                       <span className="text-gray-600 dark:text-gray-400">
//                         جهت:
//                       </span>
//                       <span className="font-medium text-gray-800 dark:text-white mr-2">
//                         {settings.orientation === "portrait" ? "عمودی" : "افقی"}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="text-gray-600 dark:text-gray-400">
//                         سایز:
//                       </span>
//                       <span className="font-medium text-gray-800 dark:text-white mr-2">
//                         {settings.paperSize}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="text-gray-600 dark:text-gray-400">
//                         حاشیه:
//                       </span>
//                       <span className="font-medium text-gray-800 dark:text-white mr-2">
//                         {settings.margin === "small"
//                           ? "کوچک"
//                           : settings.margin === "medium"
//                           ? "متوسط"
//                           : settings.margin === "large"
//                           ? "بزرگ"
//                           : "بدون حاشیه"}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="text-gray-600 dark:text-gray-400">
//                         کیفیت:
//                       </span>
//                       <span className="font-medium text-gray-800 dark:text-white mr-2">
//                         {settings.quality === "low"
//                           ? "پایین"
//                           : settings.quality === "standard"
//                           ? "استاندارد"
//                           : "بالا"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* پیش‌نمایش بصری PDF */}
//               <div className="lg:col-span-1">
//                 <PDFPreview />
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
//               <button
//                 onClick={goToPreviousStep}
//                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//               >
//                 <ChevronRight className="w-4 h-4" />
//                 بازگشت
//               </button>
//               <button
//                 onClick={goToNextStep}
//                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
//               >
//                 ادامه به تبدیل
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Convert Step */}
//         {currentStep === "convert" && (
//           <div className="space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 تبدیل و دانلود
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 {images.length} عکس
//               </span>
//             </div>

//             {/* نمایش خلاصه تنظیمات */}
//             <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
//                 خلاصه تنظیمات
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                 <div>
//                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
//                   <span className="font-medium text-gray-800 dark:text-white mr-2">
//                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600 dark:text-gray-400">
//                     سایز:
//                   </span>
//                   <span className="font-medium text-gray-800 dark:text-white mr-2">
//                     {settings.paperSize}
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600 dark:text-gray-400">
//                     حاشیه:
//                   </span>
//                   <span className="font-medium text-gray-800 dark:text-white mr-2">
//                     {settings.margin === "small"
//                       ? "کوچک"
//                       : settings.margin === "medium"
//                       ? "متوسط"
//                       : settings.margin === "large"
//                       ? "بزرگ"
//                       : "بدون حاشیه"}
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600 dark:text-gray-400">
//                     کیفیت:
//                   </span>
//                   <span className="font-medium text-gray-800 dark:text-white mr-2">
//                     {settings.quality === "low"
//                       ? "پایین"
//                       : settings.quality === "standard"
//                       ? "استاندارد"
//                       : "بالا"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {conversionStatus === "idle" && (
//               <div className="text-center space-y-4">
//                 <FileImage className="w-16 h-16 mx-auto text-primary" />
//                 <p className="text-lg text-gray-700 dark:text-gray-300">
//                   آماده برای تبدیل {images.length} عکس به PDF
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                   <button
//                     onClick={handleConvert}
//                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
//                   >
//                     <Settings className="w-5 h-5" />
//                     شروع تبدیل
//                   </button>
//                   <button
//                     onClick={handleDownloadZIP}
//                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//                   >
//                     <Folder className="w-5 h-5" />
//                     دانلود ZIP
//                   </button>
//                 </div>
//               </div>
//             )}

//             {conversionStatus === "converting" && (
//               <div className="text-center space-y-4">
//                 <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
//                 <div className="space-y-2">
//                   <p className="text-lg text-gray-700 dark:text-gray-300">
//                     در حال تبدیل...
//                   </p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {conversionProgress.status}
//                   </p>
//                   <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
//                     <div
//                       className="bg-primary h-2 rounded-full transition-all duration-300"
//                       style={{
//                         width: `${
//                           (conversionProgress.current /
//                             conversionProgress.total) *
//                           100
//                         }%`,
//                       }}
//                     />
//                   </div>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     {conversionProgress.current} از {conversionProgress.total}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {conversionStatus === "completed" && pdfBlob && (
//               <div className="text-center space-y-4">
//                 <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
//                 <p className="text-lg text-gray-700 dark:text-gray-300">
//                   تبدیل با موفقیت انجام شد!
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                   <button
//                     onClick={handleDownloadPDF}
//                     className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
//                   >
//                     <Download className="w-5 h-5" />
//                     دانلود PDF
//                   </button>
//                   <button
//                     onClick={resetConverter}
//                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//                   >
//                     <RefreshCw className="w-5 h-5" />
//                     شروع جدید
//                   </button>
//                 </div>
//               </div>
//             )}

//             {conversionStatus === "error" && (
//               <div className="text-center space-y-4">
//                 <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
//                 <p className="text-lg text-red-600 dark:text-red-400">
//                   خطا در تبدیل
//                 </p>
//                 <div className="flex gap-3 justify-center">
//                   <button
//                     onClick={handleConvert}
//                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
//                   >
//                     <RefreshCw className="w-5 h-5" />
//                     تلاش مجدد
//                   </button>
//                   <button
//                     onClick={goToPreviousStep}
//                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//                   >
//                     بازگشت
//                   </button>
//                 </div>
//               </div>
//             )}

//             <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
//               <button
//                 onClick={goToPreviousStep}
//                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//               >
//                 <ChevronRight className="w-4 h-4" />
//                 بازگشت به تنظیمات
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Hidden file input for adding more images */}
//       <input
//         ref={fileInputRef}
//         type="file"
//         multiple
//         accept=".jpg,.jpeg,.png,.webp"
//         onChange={handleFileInputChange}
//         className="hidden"
//       />

//       {/* Image Preview Modal */}
//       <ImagePreviewModal />
//     </div>
//   );
// }
//components/ImageToPDFConverter.tsx
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  ImageFile,
  PDFSettings,
  ConversionStatus,
  ConversionProgress,
  AppStep,
} from "@/types";
import { PDFConverter } from "@/lib/pdfConverter";
import ImagePreview from "./ImagePreview";
import { generateId, validateFile } from "@/lib/utils";
import {
  Upload,
  CheckCircle,
  Settings,
  FileImage,
  Download,
  Folder,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Plus,
  AlertCircle,
  Loader2,
  X,
  Maximize2,
  Eye,
  Smartphone,
  Tablet,
  Monitor,
} from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

const initialSettings: PDFSettings = {
  orientation: "portrait",
  paperSize: "A4",
  margin: "medium",
  quality: "standard",
};

// تابع کمکی برای تبدیل سایز کاغذ به ابعاد پیکسل برای پیش‌نمایش
const getPaperDimensions = (paperSize: string, orientation: string) => {
  const dimensions: { [key: string]: { width: number; height: number } } = {
    A4: { width: 210, height: 297 },
    A3: { width: 297, height: 420 },
    letter: { width: 216, height: 279 },
    legal: { width: 216, height: 356 },
  };

  const size = dimensions[paperSize] || dimensions.A4;
  return orientation === "landscape"
    ? { width: size.height, height: size.width }
    : size;
};

// تابع کمکی برای محاسبه حاشیه
const getMarginSize = (margin: string) => {
  const margins: { [key: string]: number } = {
    none: 0,
    small: 10,
    medium: 20,
    large: 30,
  };
  return margins[margin] || margins.medium;
};

export default function ImageToPDFConverter() {
  const [currentStep, setCurrentStep] = useState<AppStep>("upload");
  const [images, setImages] = useState<ImageFile[]>([]);
  const [settings, setSettings] = useState<PDFSettings>(initialSettings);
  const [conversionStatus, setConversionStatus] =
    useState<ConversionStatus>("idle");
  const [conversionProgress, setConversionProgress] =
    useState<ConversionProgress>({
      current: 0,
      total: 0,
      status: "",
    });
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [triggerFileInput, setTriggerFileInput] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [deviceView, setDeviceView] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 10,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Clean up object URLs
  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.url));
    };
  }, [images]);

  // Trigger file input when state changes
  useEffect(() => {
    if (triggerFileInput && fileInputRef.current) {
      console.log("🎯 Triggering file input programmatically");
      fileInputRef.current.click();
      setTriggerFileInput(false);
    }
  }, [triggerFileInput]);

  // Handlers
  const handleNameChange = useCallback((id: string, name: string) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, name } : img))
    );
  }, []);

  const handleDelete = useCallback(
    (id: string) => {
      setImages((prev) => {
        const imageToDelete = prev.find((img) => img.id === id);
        if (imageToDelete) {
          URL.revokeObjectURL(imageToDelete.url);
          // اگر تصویر در حال پیش‌نمایش حذف شد، پنجره پیش‌نمایش را ببند
          if (selectedImage?.id === id) {
            setSelectedImage(null);
            setIsPreviewOpen(false);
          }
        }
        return prev.filter((img) => img.id !== id);
      });
    },
    [selectedImage]
  );

  const handleMove = useCallback((id: string, direction: "up" | "down") => {
    setImages((prev) => {
      const index = prev.findIndex((img) => img.id === id);
      if (index === -1) return prev;
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;

      const updated = [...prev];
      const [moved] = updated.splice(index, 1);
      updated.splice(newIndex, 0, moved);
      return updated;
    });
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setImages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }, []);

  const handleFileSelect = useCallback((files: FileList | null) => {
    if (!files) return;

    console.log("📁 Files selected:", files.length);
    const newImages: ImageFile[] = [];
    Array.from(files).forEach((file) => {
      const validation = validateFile(file);
      if (validation.isValid) {
        const url = URL.createObjectURL(file);
        newImages.push({ id: generateId(), url, name: file.name, file });
        console.log("✅ Added file:", file.name);
      } else {
        console.warn("❌ Invalid file:", file.name, validation.error);
        alert(validation.error);
      }
    });

    if (newImages.length > 0) {
      setImages((prev) => [...prev, ...newImages]);
    }
  }, []);

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("🔄 File input changed");
      handleFileSelect(e.target.files);
      // Reset the input value to allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (e.currentTarget === e.target) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFileSelect(e.dataTransfer.files);
    },
    [handleFileSelect]
  );

  const handleAddMoreClick = useCallback(() => {
    console.log("🔘 Add more button clicked");
    setTriggerFileInput(true);
  }, []);

  const handleSettingChange = useCallback(
    (key: keyof PDFSettings, value: string) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleConvert = useCallback(async () => {
    if (images.length === 0) return;

    setConversionStatus("converting");
    setConversionProgress({
      current: 0,
      total: images.length,
      status: "شروع تبدیل...",
    });

    try {
      const blob = await PDFConverter.convertImagesToPDF(
        images,
        settings,
        setConversionProgress
      );
      setPdfBlob(blob);
      setConversionStatus("completed");
    } catch (error) {
      console.error("Conversion error:", error);
      setConversionStatus("error");
      alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
    }
  }, [images, settings]);

  const handleDownloadPDF = useCallback(() => {
    if (!pdfBlob) return;
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `images-to-pdf-${Date.now()}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [pdfBlob]);

  const handleDownloadZIP = useCallback(async () => {
    if (images.length === 0) return;

    setConversionStatus("converting");
    setConversionProgress({
      current: 0,
      total: images.length,
      status: "در حال ساخت ZIP...",
    });

    try {
      const zipBlob = await PDFConverter.createZipFromImages(images);
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `images-${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setConversionStatus("idle");
    } catch (error) {
      console.error("ZIP creation error:", error);
      alert("خطا در ساخت ZIP");
      setConversionStatus("idle");
    }
  }, [images]);

  const handleImagePreview = useCallback((image: ImageFile) => {
    setSelectedImage(image);
    setIsPreviewOpen(true);
  }, []);

  const handleClosePreview = useCallback(() => {
    setIsPreviewOpen(false);
    setSelectedImage(null);
  }, []);

  const goToNextStep = useCallback(() => {
    if (currentStep === "upload" && images.length > 0)
      setCurrentStep("settings");
    else if (currentStep === "settings") setCurrentStep("convert");
  }, [currentStep, images.length]);

  const goToPreviousStep = useCallback(() => {
    if (currentStep === "settings") setCurrentStep("upload");
    else if (currentStep === "convert") setCurrentStep("settings");
  }, [currentStep]);

  const resetConverter = useCallback(() => {
    images.forEach((img) => URL.revokeObjectURL(img.url));
    setImages([]);
    setSettings(initialSettings);
    setCurrentStep("upload");
    setConversionStatus("idle");
    setPdfBlob(null);
    setSelectedImage(null);
    setIsPreviewOpen(false);
  }, [images]);

  const PDFPreview = () => {
    const dimensions = getPaperDimensions(
      settings.paperSize,
      settings.orientation
    );
    const margin = getMarginSize(settings.margin);

    // مقیاس‌های مختلف برای دستگاه‌های مختلف
    const scaleMap = {
      mobile: 0.5,
      tablet: 0.6,
      desktop: 0.7,
    };

    const scale = scaleMap[deviceView];
    const previewWidth = dimensions.width * scale;
    const previewHeight = dimensions.height * scale;
    const previewMargin = margin * scale;

    // انتخاب اولین تصویر برای پیش‌نمایش
    const previewImage = images.length > 0 ? images[0] : null;

    return (
      <div className="flex flex-col items-center space-y-4 p-4 bg-white/5 dark:bg-black/5 rounded-lg border border-gray-300/50 dark:border-gray-600/50">
        <div className="flex flex-col items-center justify-between w-full gap-2">
          <div className="flex items-center gap-2 text-sm text-nowrap font-medium text-gray-700 dark:text-gray-300">
            <Eye className="w-4 h-4" />
            پیش‌نمایش خروجی PDF
          </div>
          {/* Device View Selector */}
          <div className="flex gap-1 bg-white/10 dark:bg-black/10 rounded-lg">
            <button
              onClick={() => setDeviceView("mobile")}
              className={`p-1.5 rounded-md transition-colors ${
                deviceView === "mobile"
                  ? "bg-primary/20 text-primary"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              title="نمایش موبایل"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceView("tablet")}
              className={`p-1.5 rounded-md transition-colors ${
                deviceView === "tablet"
                  ? "bg-primary/20 text-primary"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              title="نمایش تبلت"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceView("desktop")}
              className={`p-1.5 rounded-md transition-colors ${
                deviceView === "desktop"
                  ? "bg-primary/20 text-primary"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              title="نمایش دسکتاپ"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-sm border border-gray-300">
          {/* کاغذ */}
          <div
            className="bg-white relative"
            style={{
              width: `${previewWidth}px`,
              height: `${previewHeight}px`,
              padding: `${previewMargin}px`,
            }}
          >
            {/* محتوای نمونه - یک تصویر کامل */}
            <div className="w-full h-full border border-dashed border-gray-300/50 rounded flex flex-col items-center justify-center overflow-hidden bg-gray-50">
              {previewImage ? (
                <div className="w-full h-full flex items-center justify-center p-1">
                  <img
                    src={previewImage.url}
                    alt={previewImage.name}
                    className="max-w-full max-h-full object-contain rounded"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  <FileImage className="w-8 h-8 text-gray-400 mb-2" />
                  <div className="text-xs text-gray-400">
                    عکسی برای نمایش وجود ندارد
                  </div>
                </div>
              )}
            </div>

            {/* نشانگر جهت */}
            <div
              className={`absolute bottom-1 left-1 text-[8px] text-gray-400 ${
                settings.orientation === "landscape"
                  ? "transform rotate-90 origin-left"
                  : ""
              }`}
            >
              {settings.orientation === "portrait" ? "عمودی" : "افقی"}
            </div>
          </div>
        </div>

        {/* اطلاعات سایز */}
        <div className="text-xs text-gray-500 text-center">
          سایز: {settings.paperSize} • جهت:{" "}
          {settings.orientation === "portrait" ? "عمودی" : "افقی"} • حاشیه:{" "}
          {settings.margin === "none" ? "بدون" : settings.margin}
          {previewImage && (
            <span className="block mt-1">نمایش: {previewImage.name}</span>
          )}
        </div>
      </div>
    );
  };
  // کامپوننت تنظیمات - بهبود یافته برای ریسپانسیو
  const SettingsSection = () => {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                جهت کاغذ
              </label>
              <select
                value={settings.orientation}
                onChange={(e) =>
                  handleSettingChange("orientation", e.target.value)
                }
                className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
              >
                <option value="portrait">عمودی</option>
                <option value="landscape">افقی</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                سایز کاغذ
              </label>
              <select
                value={settings.paperSize}
                onChange={(e) =>
                  handleSettingChange("paperSize", e.target.value)
                }
                className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
              >
                <option value="A4">A4</option>
                <option value="A3">A3</option>
                <option value="letter">Letter</option>
                <option value="legal">Legal</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                حاشیه
              </label>
              <select
                value={settings.margin}
                onChange={(e) => handleSettingChange("margin", e.target.value)}
                className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
              >
                <option value="small">کوچک</option>
                <option value="medium">متوسط</option>
                <option value="large">بزرگ</option>
                <option value="none">بدون حاشیه</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                کیفیت
              </label>
              <select
                value={settings.quality}
                onChange={(e) => handleSettingChange("quality", e.target.value)}
                className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
              >
                <option value="low">پایین</option>
                <option value="standard">استاندارد</option>
                <option value="high">بالا</option>
              </select>
            </div>
          </div>
        </div>

        {/* خلاصه تنظیمات - بهبود یافته برای ریسپانسیو */}
        <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            خلاصه تنظیمات
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex flex-col">
              <span className="text-gray-600 dark:text-gray-400 text-xs">
                جهت:
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.orientation === "portrait" ? "عمودی" : "افقی"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600 dark:text-gray-400 text-xs">
                سایز:
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.paperSize}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600 dark:text-gray-400 text-xs">
                حاشیه:
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.margin === "small"
                  ? "کوچک"
                  : settings.margin === "medium"
                  ? "متوسط"
                  : settings.margin === "large"
                  ? "بزرگ"
                  : "بدون حاشیه"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600 dark:text-gray-400 text-xs">
                کیفیت:
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.quality === "low"
                  ? "پایین"
                  : settings.quality === "standard"
                  ? "استاندارد"
                  : "بالا"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // کامپوننت خروجی - بهبود یافته برای ریسپانسیو
  const OutputSection = () => {
    return (
      <div className="space-y-6">
        {/* نمایش خلاصه تنظیمات */}
        <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            خلاصه تنظیمات نهایی
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                جهت
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.orientation === "portrait" ? "عمودی" : "افقی"}
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                سایز
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.paperSize}
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                حاشیه
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.margin === "small"
                  ? "کوچک"
                  : settings.margin === "medium"
                  ? "متوسط"
                  : settings.margin === "large"
                  ? "بزرگ"
                  : "بدون حاشیه"}
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                کیفیت
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {settings.quality === "low"
                  ? "پایین"
                  : settings.quality === "standard"
                  ? "استاندارد"
                  : "بالا"}
              </span>
            </div>
          </div>
        </div>

        {/* وضعیت تبدیل */}
        {conversionStatus === "idle" && (
          <div className="text-center space-y-6 p-6 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <FileImage className="w-16 h-16 mx-auto text-primary" />
            <div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                آماده برای تبدیل
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {images.length} عکس به PDF تبدیل خواهد شد
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleConvert}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect flex-1 sm:flex-none"
              >
                <Settings className="w-5 h-5" />
                شروع تبدیل
              </button>
              <button
                onClick={handleDownloadZIP}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none"
              >
                <Folder className="w-5 h-5" />
                دانلود ZIP
              </button>
            </div>
          </div>
        )}

        {conversionStatus === "converting" && (
          <div className="text-center space-y-6 p-6 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
            <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                در حال تبدیل...
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {conversionProgress.status}
              </p>
              <div className="space-y-2">
                <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        (conversionProgress.current /
                          conversionProgress.total) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {conversionProgress.current} از {conversionProgress.total}
                </p>
              </div>
            </div>
          </div>
        )}

        {conversionStatus === "completed" && pdfBlob && (
          <div className="text-center space-y-6 p-6 border border-green-500/20 rounded-lg bg-green-500/5 backdrop-blur-sm">
            <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
            <div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                تبدیل با موفقیت انجام شد!
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                فایل PDF شما آماده دانلود است
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect flex-1 sm:flex-none"
              >
                <Download className="w-5 h-5" />
                دانلود PDF
              </button>
              <button
                onClick={resetConverter}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none"
              >
                <RefreshCw className="w-5 h-5" />
                شروع جدید
              </button>
            </div>
          </div>
        )}

        {conversionStatus === "error" && (
          <div className="text-center space-y-6 p-6 border border-red-500/20 rounded-lg bg-red-500/5 backdrop-blur-sm">
            <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
            <div>
              <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                خطا در تبدیل
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                لطفاً دوباره تلاش کنید
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleConvert}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect flex-1 sm:flex-none"
              >
                <RefreshCw className="w-5 h-5" />
                تلاش مجدد
              </button>
              <button
                onClick={goToPreviousStep}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none"
              >
                بازگشت
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Modal Preview Component
  const ImagePreviewModal = () => {
    if (!isPreviewOpen || !selectedImage) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {selectedImage.name}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.open(selectedImage.url, "_blank")}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                  title="باز کردن در تب جدید"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button
                  onClick={handleClosePreview}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center p-4 max-h-[70vh] overflow-auto">
              <img
                src={selectedImage.url}
                alt={selectedImage.name}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  برای بستن، روی دکمه × کلیک کنید یا ESC را فشار دهید
                </div>
                <button
                  onClick={handleClosePreview}
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

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
      {/* Progress Steps - Responsive */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center flex-1 max-w-24">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
              currentStep === "upload"
                ? "bg-primary/20 border-primary/50 text-primary"
                : images.length > 0
                ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
                : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
            }`}
          >
            {images.length > 0 ? (
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            ) : (
              <span className="text-sm sm:text-base md:text-lg font-bold">
                1
              </span>
            )}
          </div>
          <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
            {images.length > 0 ? "چیدمان" : "آپلود"}
          </span>
        </div>

        <div
          className={`h-1 flex-1 transition-colors glass-effect ${
            currentStep === "settings" || currentStep === "convert"
              ? "bg-primary/50"
              : "bg-gray-300/50 dark:bg-gray-600/50"
          }`}
        />

        {/* Step 2 */}
        <div className="flex flex-col items-center flex-1 max-w-24">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
              currentStep === "settings"
                ? "bg-primary/20 border-primary/50 text-primary"
                : currentStep === "convert"
                ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
                : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
            }`}
          >
            {currentStep === "convert" ? (
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            ) : (
              <span className="text-sm sm:text-base md:text-lg font-bold">
                2
              </span>
            )}
          </div>
          <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
            تنظیمات
          </span>
        </div>

        <div
          className={`h-1 flex-1 transition-colors glass-effect ${
            currentStep === "convert"
              ? "bg-primary/50"
              : "bg-gray-300/50 dark:bg-gray-600/50"
          }`}
        />

        {/* Step 3 */}
        <div className="flex flex-col items-center flex-1 max-w-24">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
              currentStep === "convert"
                ? "bg-primary/20 border-primary/50 text-primary"
                : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
            }`}
          >
            <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
          </div>
          <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
            دانلود
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
        {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
        {currentStep === "upload" && images.length === 0 && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                آپلود عکس‌ها
              </h2>
            </div>

            <div
              className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
                isDragging
                  ? "border-primary/50 bg-primary/5"
                  : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
              }`}
              onDragOver={handleDragOver}
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
                onClick={handleAddMoreClick}
                className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
              >
                انتخاب از دستگاه
              </button>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
                JPG, PNG, WEBP • حداکثر 10MB
              </p>
            </div>
          </div>
        )}

        {/* Layout Section - وقتی عکس آپلود شده باشد */}
        {currentStep === "upload" && images.length > 0 && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                چیدمان عکس‌ها
              </h2>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {images.length} عکس
              </span>
            </div>

            {/* درگ اند دراپ برای کل کادر */}
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              modifiers={[]}
            >
              <SortableContext
                items={images.map((img) => img.id)}
                strategy={rectSortingStrategy}
              >
                <div className="flex flex-col gap-5">
                  {/* کادر اصلی چیدمان */}
                  <div
                    className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 
                    rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
                    transition-all duration-300"
                  >
                    {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
                      {images.map((img, i) => (
                        <ImagePreview
                          key={img.id}
                          image={img}
                          index={i}
                          onNameChange={handleNameChange}
                          onDelete={handleDelete}
                          onMove={handleMove}
                          onPreview={handleImagePreview}
                          canMoveUp={i > 0}
                          canMoveDown={i < images.length - 1}
                        />
                      ))}
                      {/* Add More Button as last item in grid */}
                      <button
                        onClick={handleAddMoreClick}
                        className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 
                        rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 
                        hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect 
                        cursor-pointer"
                      >
                        <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
                        <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                          افزودن عکس
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-xs sm:text-sm text-center sm:text-right">
                        برای جابجایی: عکس را نگه دارید و بکشید
                      </span>
                      <span className="hidden sm:inline text-xs">•</span>
                      <span className="text-xs sm:text-sm text-center sm:text-right">
                        برای پیش‌نمایش: روی عکس کلیک کنید
                      </span>
                    </div>

                    <div className="flex gap-2 w-full sm:w-auto">
                      <button
                        onClick={handleAddMoreClick}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 
                        border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium 
                        hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm 
                        glass-effect text-gray-700 dark:text-gray-300"
                      >
                        <Plus className="w-4 h-4" />
                        افزودن بیشتر
                      </button>
                      <button
                        onClick={goToNextStep}
                        disabled={images.length === 0}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 
                        bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition 
                        text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        ادامه
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </SortableContext>
            </DndContext>
          </div>
        )}

        {/* Settings Step */}
        {currentStep === "settings" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                تنظیمات PDF
              </h2>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {images.length} عکس
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* تنظیمات */}
              <div className="lg:col-span-2">
                <SettingsSection />
              </div>

              {/* پیش‌نمایش بصری PDF */}
              <div className="lg:col-span-1">
                <PDFPreview />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
              <button
                onClick={goToPreviousStep}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
              >
                <ChevronRight className="w-4 h-4" />
                بازگشت
              </button>
              <button
                onClick={goToNextStep}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
              >
                ادامه به تبدیل
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Convert Step */}
        {currentStep === "convert" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                تبدیل و دانلود
              </h2>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {images.length} عکس
              </span>
            </div>

            <OutputSection />

            <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
              <button
                onClick={goToPreviousStep}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
              >
                <ChevronRight className="w-4 h-4" />
                بازگشت به تنظیمات
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hidden file input for adding more images */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".jpg,.jpeg,.png,.webp"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Image Preview Modal */}
      <ImagePreviewModal />
    </div>
  );
}
