// // // // // // // app/components/ImageToPDFConverter.tsx
// // // // // // "use client";

// // // // // // import { useState, useRef, useCallback, useEffect } from "react";
// // // // // // import {
// // // // // //   ImageFile,
// // // // // //   PDFSettings,
// // // // // //   ConversionStatus,
// // // // // //   ConversionProgress,
// // // // // //   AppStep,
// // // // // // } from "@/types";
// // // // // // import { PDFConverter } from "@/lib/pdfConverter";
// // // // // // import ImagePreview from "./ImagePreview";
// // // // // // import { generateId, validateFile } from "@/lib/utils";
// // // // // // import {
// // // // // //   Upload,
// // // // // //   CheckCircle,
// // // // // //   Circle,
// // // // // //   Settings,
// // // // // //   FileImage,
// // // // // //   Download,
// // // // // //   Folder,
// // // // // //   RefreshCw,
// // // // // //   ChevronLeft,
// // // // // //   ChevronRight,
// // // // // //   Plus,
// // // // // //   AlertCircle,
// // // // // //   Loader2,
// // // // // //   ArrowUp,
// // // // // //   ArrowDown,
// // // // // //   X,
// // // // // //   Edit2,
// // // // // // } from "lucide-react";

// // // // // // const initialSettings: PDFSettings = {
// // // // // //   orientation: "portrait",
// // // // // //   paperSize: "A4",
// // // // // //   margin: "medium",
// // // // // //   quality: "standard",
// // // // // // };

// // // // // // export default function ImageToPDFConverter() {
// // // // // //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// // // // // //   const [images, setImages] = useState<ImageFile[]>([]);
// // // // // //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// // // // // //   const [conversionStatus, setConversionStatus] =
// // // // // //     useState<ConversionStatus>("idle");
// // // // // //   const [conversionProgress, setConversionProgress] =
// // // // // //     useState<ConversionProgress>({
// // // // // //       current: 0,
// // // // // //       total: 0,
// // // // // //       status: "",
// // // // // //     });
// // // // // //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

// // // // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // // // //   const [isDragging, setIsDragging] = useState(false);

// // // // // //   // Clean up object URLs
// // // // // //   useEffect(() => {
// // // // // //     return () => {
// // // // // //       images.forEach((img) => URL.revokeObjectURL(img.url));
// // // // // //     };
// // // // // //   }, [images]);

// // // // // //   // Handlers
// // // // // //   const handleNameChange = (id: string, name: string) => {
// // // // // //     setImages((prev) =>
// // // // // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // // // // //     );
// // // // // //   };

// // // // // //   const handleDelete = (id: string) => {
// // // // // //     setImages((prev) => {
// // // // // //       const filtered = prev.filter((img) => img.id !== id);
// // // // // //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// // // // // //       return filtered;
// // // // // //     });
// // // // // //   };

// // // // // //   const handleMove = (id: string, direction: "up" | "down") => {
// // // // // //     setImages((prev) => {
// // // // // //       const index = prev.findIndex((img) => img.id === id);
// // // // // //       if (index === -1) return prev;
// // // // // //       const newIndex = direction === "up" ? index - 1 : index + 1;
// // // // // //       if (newIndex < 0 || newIndex >= prev.length) return prev;

// // // // // //       const updated = [...prev];
// // // // // //       const [moved] = updated.splice(index, 1);
// // // // // //       updated.splice(newIndex, 0, moved);
// // // // // //       return updated;
// // // // // //     });
// // // // // //   };

// // // // // //   const handleFileSelect = (files: FileList | null) => {
// // // // // //     if (!files) return;

// // // // // //     const newImages: ImageFile[] = [];
// // // // // //     Array.from(files).forEach((file) => {
// // // // // //       const validation = validateFile(file);
// // // // // //       if (validation.isValid) {
// // // // // //         const url = URL.createObjectURL(file);
// // // // // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // // // // //       } else {
// // // // // //         alert(validation.error);
// // // // // //       }
// // // // // //     });

// // // // // //     if (newImages.length > 0) {
// // // // // //       setImages((prev) => [...prev, ...newImages]);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // //     handleFileSelect(e.target.files);
// // // // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // // // //   };

// // // // // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsDragging(true);
// // // // // //   }, []);

// // // // // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsDragging(false);
// // // // // //   }, []);

// // // // // //   const handleDrop = useCallback((e: React.DragEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsDragging(false);
// // // // // //     handleFileSelect(e.dataTransfer.files);
// // // // // //   }, []);

// // // // // //   const handleAddMoreClick = () => fileInputRef.current?.click();

// // // // // //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// // // // // //     setSettings((prev) => ({ ...prev, [key]: value }));
// // // // // //   };

// // // // // //   const handleConvert = useCallback(async () => {
// // // // // //     if (images.length === 0) return;

// // // // // //     setConversionStatus("converting");
// // // // // //     setConversionProgress({
// // // // // //       current: 0,
// // // // // //       total: images.length,
// // // // // //       status: "شروع تبدیل...",
// // // // // //     });

// // // // // //     try {
// // // // // //       const blob = await PDFConverter.convertImagesToPDF(
// // // // // //         images,
// // // // // //         settings,
// // // // // //         setConversionProgress
// // // // // //       );
// // // // // //       setPdfBlob(blob);
// // // // // //       setConversionStatus("completed");
// // // // // //     } catch (error) {
// // // // // //       console.error("Conversion error:", error);
// // // // // //       setConversionStatus("error");
// // // // // //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// // // // // //     }
// // // // // //   }, [images, settings]);

// // // // // //   const handleDownloadPDF = useCallback(() => {
// // // // // //     if (!pdfBlob) return;
// // // // // //     const url = URL.createObjectURL(pdfBlob);
// // // // // //     const a = document.createElement("a");
// // // // // //     a.href = url;
// // // // // //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// // // // // //     a.click();
// // // // // //     URL.revokeObjectURL(url);
// // // // // //   }, [pdfBlob]);

// // // // // //   const handleDownloadZIP = useCallback(async () => {
// // // // // //     if (images.length === 0) return;

// // // // // //     setConversionStatus("converting");
// // // // // //     setConversionProgress({
// // // // // //       current: 0,
// // // // // //       total: images.length,
// // // // // //       status: "در حال ساخت ZIP...",
// // // // // //     });

// // // // // //     try {
// // // // // //       const zipBlob = await PDFConverter.createZipFromImages(images);
// // // // // //       const url = URL.createObjectURL(zipBlob);
// // // // // //       const a = document.createElement("a");
// // // // // //       a.href = url;
// // // // // //       a.download = `images-${Date.now()}.zip`;
// // // // // //       a.click();
// // // // // //       URL.revokeObjectURL(url);
// // // // // //       setConversionStatus("idle");
// // // // // //     } catch (error) {
// // // // // //       alert("خطا در ساخت ZIP");
// // // // // //       setConversionStatus("idle");
// // // // // //     }
// // // // // //   }, [images]);

// // // // // //   const goToNextStep = () => {
// // // // // //     if (currentStep === "upload" && images.length > 0)
// // // // // //       setCurrentStep("settings");
// // // // // //     else if (currentStep === "settings") setCurrentStep("convert");
// // // // // //   };

// // // // // //   const goToPreviousStep = () => {
// // // // // //     if (currentStep === "settings") setCurrentStep("upload");
// // // // // //     else if (currentStep === "convert") setCurrentStep("settings");
// // // // // //   };

// // // // // //   const resetConverter = () => {
// // // // // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // // // // //     setImages([]);
// // // // // //     setSettings(initialSettings);
// // // // // //     setCurrentStep("upload");
// // // // // //     setConversionStatus("idle");
// // // // // //     setPdfBlob(null);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex flex-col gap-8 w-full  mx-auto p-4">
// // // // // //       {/* Progress Steps */}
// // // // // //       <div className="flex justify-center items-center gap-4 md:gap-8">
// // // // // //         {/* Step 1 */}
// // // // // //         <div className="flex flex-col items-center">
// // // // // //           <div
// // // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // // //               currentStep === "upload"
// // // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // // //                 : images.length > 0
// // // // // //                 ? "bg-green-500 border-green-500 text-white"
// // // // // //                 : "border-gray-300 text-gray-500"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {images.length > 0 ? (
// // // // // //               <CheckCircle className="w-6 h-6" />
// // // // // //             ) : (
// // // // // //               <span className="text-lg font-bold">1</span>
// // // // // //             )}
// // // // // //           </div>
// // // // // //           <span className="mt-2 text-sm font-medium">آپلود</span>
// // // // // //         </div>

// // // // // //         <div
// // // // // //           className={`h-1 flex-1 transition-colors ${
// // // // // //             currentStep === "settings" || currentStep === "convert"
// // // // // //               ? "bg-blue-600"
// // // // // //               : "bg-gray-300"
// // // // // //           }`}
// // // // // //         />

// // // // // //         {/* Step 2 */}
// // // // // //         <div className="flex flex-col items-center">
// // // // // //           <div
// // // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // // //               currentStep === "settings"
// // // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // // //                 : currentStep === "convert"
// // // // // //                 ? "bg-green-500 border-green-500 text-white"
// // // // // //                 : "border-gray-300 text-gray-500"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {currentStep === "convert" ? (
// // // // // //               <CheckCircle className="w-6 h-6" />
// // // // // //             ) : (
// // // // // //               <span className="text-lg font-bold">2</span>
// // // // // //             )}
// // // // // //           </div>
// // // // // //           <span className="mt-2 text-sm font-medium">تنظیمات</span>
// // // // // //         </div>

// // // // // //         <div
// // // // // //           className={`h-1 flex-1 transition-colors ${
// // // // // //             currentStep === "convert" ? "bg-blue-600" : "bg-gray-300"
// // // // // //           }`}
// // // // // //         />

// // // // // //         {/* Step 3 */}
// // // // // //         <div className="flex flex-col items-center">
// // // // // //           <div
// // // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // // //               currentStep === "convert"
// // // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // // //                 : "border-gray-300 text-gray-500"
// // // // // //             }`}
// // // // // //           >
// // // // // //             <span className="text-lg font-bold">3</span>
// // // // // //           </div>
// // // // // //           <span className="mt-2 text-sm font-medium">دانلود</span>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Content */}
// // // // // //       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
// // // // // //         {/* Upload Step */}
// // // // // //         {currentStep === "upload" && (
// // // // // //           <div className="space-y-6">
// // // // // //             <div className="flex items-center justify-between">
// // // // // //               <h2 className="text-2xl font-bold">آپلود و چیدمان عکس‌ها</h2>
// // // // // //               <span className="text-sm text-gray-500">{images.length} عکس</span>
// // // // // //             </div>

// // // // // //             <div
// // // // // //               className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
// // // // // //                 isDragging
// // // // // //                   ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
// // // // // //                   : "border-gray-300 dark:border-gray-600"
// // // // // //               }`}
// // // // // //               onDragOver={handleDragOver}
// // // // // //               onDragLeave={handleDragLeave}
// // // // // //               onDrop={handleDrop}
// // // // // //             >
// // // // // //               <input
// // // // // //                 ref={fileInputRef}
// // // // // //                 type="file"
// // // // // //                 multiple
// // // // // //                 accept=".jpg,.jpeg,.png,.webp"
// // // // // //                 onChange={handleFileInputChange}
// // // // // //                 className="hidden"
// // // // // //               />
// // // // // //               <Upload className="w-12 h-12 mx-auto text-blue-600 mb-4" />
// // // // // //               <p className="text-lg font-semibold">عکس‌ها را اینجا بکشید</p>
// // // // // //               <p className="text-sm text-gray-500 mt-1">یا</p>
// // // // // //               <button
// // // // // //                 onClick={() => fileInputRef.current?.click()}
// // // // // //                 className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // // // //               >
// // // // // //                 انتخاب از دستگاه
// // // // // //               </button>
// // // // // //               <p className="text-xs text-gray-500 mt-3">
// // // // // //                 JPG, PNG, WEBP • حداکثر 10MB
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             {images.length > 0 && (
// // // // // //               <>
// // // // // //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
// // // // // //                   {images.map((img, i) => (
// // // // // //                     <ImagePreview
// // // // // //                       key={img.id}
// // // // // //                       image={img}
// // // // // //                       index={i}
// // // // // //                       onNameChange={handleNameChange}
// // // // // //                       onDelete={handleDelete}
// // // // // //                       onMove={handleMove}
// // // // // //                       canMoveUp={i > 0}
// // // // // //                       canMoveDown={i < images.length - 1}
// // // // // //                     />
// // // // // //                   ))}
// // // // // //                   <button
// // // // // //                     onClick={handleAddMoreClick}
// // // // // //                     className="aspect-[4/3] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50 transition"
// // // // // //                   >
// // // // // //                     <Plus className="w-8 h-8 text-gray-400" />
// // // // // //                     <span className="text-sm font-medium text-gray-500">
// // // // // //                       افزودن
// // // // // //                     </span>
// // // // // //                   </button>
// // // // // //                 </div>

// // // // // //                 <div className="flex justify-end">
// // // // // //                   <button
// // // // // //                     onClick={goToNextStep}
// // // // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // // // //                   >
// // // // // //                     ادامه
// // // // // //                     <ChevronLeft className="w-5 h-5" />
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* Settings Step */}
// // // // // //         {currentStep === "settings" && (
// // // // // //           <div className="space-y-6">
// // // // // //             <div>
// // // // // //               <h2 className="text-2xl font-bold">تنظیمات PDF</h2>
// // // // // //               <p className="text-gray-500">خروجی را سفارشی کنید</p>
// // // // // //             </div>

// // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
// // // // // //               <div>
// // // // // //                 <label className="block font-medium mb-2">جهت صفحه</label>
// // // // // //                 <select
// // // // // //                   value={settings.orientation}
// // // // // //                   onChange={(e) =>
// // // // // //                     handleSettingChange("orientation", e.target.value)
// // // // // //                   }
// // // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // // //                 >
// // // // // //                   <option value="portrait">عمودی</option>
// // // // // //                   <option value="landscape">افقی</option>
// // // // // //                 </select>
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <label className="block font-medium mb-2">اندازه کاغذ</label>
// // // // // //                 <select
// // // // // //                   value={settings.paperSize}
// // // // // //                   onChange={(e) =>
// // // // // //                     handleSettingChange("paperSize", e.target.value)
// // // // // //                   }
// // // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // // //                 >
// // // // // //                   <option value="A4">A4</option>
// // // // // //                   <option value="Letter">Letter</option>
// // // // // //                   <option value="A5">A5</option>
// // // // // //                 </select>
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <label className="block font-medium mb-2">حاشیه</label>
// // // // // //                 <select
// // // // // //                   value={settings.margin}
// // // // // //                   onChange={(e) =>
// // // // // //                     handleSettingChange("margin", e.target.value)
// // // // // //                   }
// // // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // // //                 >
// // // // // //                   <option value="none">بدون حاشیه</option>
// // // // // //                   <option value="medium">متوسط</option>
// // // // // //                   <option value="large">زیاد</option>
// // // // // //                 </select>
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <label className="block font-medium mb-2">کیفیت</label>
// // // // // //                 <select
// // // // // //                   value={settings.quality}
// // // // // //                   onChange={(e) =>
// // // // // //                     handleSettingChange("quality", e.target.value)
// // // // // //                   }
// // // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // // //                 >
// // // // // //                   <option value="standard">استاندارد</option>
// // // // // //                   <option value="high">بالا</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div className="flex justify-between">
// // // // // //               <button
// // // // // //                 onClick={goToPreviousStep}
// // // // // //                 className="flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
// // // // // //               >
// // // // // //                 <ChevronRight className="w-5 h-5" />
// // // // // //                 بازگشت
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={goToNextStep}
// // // // // //                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // // // //               >
// // // // // //                 تبدیل
// // // // // //                 <ChevronLeft className="w-5 h-5" />
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* Convert Step */}
// // // // // //         {currentStep === "convert" && (
// // // // // //           <div className="space-y-6 text-center">
// // // // // //             <div>
// // // // // //               <h2 className="text-2xl font-bold">تبدیل و دانلود</h2>
// // // // // //               <p className="text-gray-500">کلیک کنید تا PDF ساخته شود</p>
// // // // // //             </div>

// // // // // //             <button
// // // // // //               onClick={handleConvert}
// // // // // //               disabled={conversionStatus === "converting"}
// // // // // //               className="flex items-center gap-2 mx-auto px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
// // // // // //             >
// // // // // //               <FileImage className="w-6 h-6" />
// // // // // //               تبدیل به PDF
// // // // // //             </button>

// // // // // //             {conversionStatus === "converting" && (
// // // // // //               <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl space-y-4">
// // // // // //                 <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-600" />
// // // // // //                 <div className="w-full bg-gray-200 rounded-full h-3">
// // // // // //                   <div
// // // // // //                     className="bg-blue-600 h-3 rounded-full transition-all duration-300"
// // // // // //                     style={{
// // // // // //                       width: `${
// // // // // //                         (conversionProgress.current /
// // // // // //                           conversionProgress.total) *
// // // // // //                         100
// // // // // //                       }%`,
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <p className="font-bold">{conversionProgress.status}</p>
// // // // // //                 <p className="text-sm text-gray-500">
// // // // // //                   {conversionProgress.current} از {conversionProgress.total}
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {conversionStatus === "completed" && (
// // // // // //               <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-4">
// // // // // //                 <CheckCircle className="w-12 h-12 mx-auto text-green-600" />
// // // // // //                 <h3 className="text-xl font-bold">PDF با موفقیت ساخته شد!</h3>
// // // // // //                 <p className="text-gray-600 dark:text-gray-300">
// // // // // //                   {images.length} صفحه
// // // // // //                 </p>
// // // // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // // // //                   <button
// // // // // //                     onClick={handleDownloadPDF}
// // // // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // // // //                   >
// // // // // //                     <Download className="w-5 h-5" />
// // // // // //                     دانلود PDF
// // // // // //                   </button>
// // // // // //                   <button
// // // // // //                     onClick={handleDownloadZIP}
// // // // // //                     className="flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
// // // // // //                   >
// // // // // //                     <Folder className="w-5 h-5" />
// // // // // //                     دانلود ZIP
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //                 <button
// // // // // //                   onClick={resetConverter}
// // // // // //                   className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 mx-auto mt-4"
// // // // // //                 >
// // // // // //                   <RefreshCw className="w-4 h-4" />
// // // // // //                   تبدیل جدید
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {conversionStatus === "error" && (
// // // // // //               <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-4">
// // // // // //                 <AlertCircle className="w-12 h-12 mx-auto text-red-600" />
// // // // // //                 <h3 className="text-xl font-bold text-red-600">خطا در تبدیل</h3>
// // // // // //                 <div className="flex gap-3 justify-center">
// // // // // //                   <button
// // // // // //                     onClick={handleConvert}
// // // // // //                     className="pxhamber-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
// // // // // //                   >
// // // // // //                     تلاش مجدد
// // // // // //                   </button>
// // // // // //                   <button
// // // // // //                     onClick={goToPreviousStep}
// // // // // //                     className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-50"
// // // // // //                   >
// // // // // //                     بازگشت
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             <div className="flex justify-start">
// // // // // //               <button
// // // // // //                 onClick={goToPreviousStep}
// // // // // //                 className="flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-gray-50"
// // // // // //               >
// // // // // //                 <ChevronRight className="w-5 h-5" />
// // // // // //                 بازگشت
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // // app/components/ImageToPDFConverter.tsx
// // // // // "use client";

// // // // // import { useState, useRef, useCallback, useEffect } from "react";
// // // // // import {
// // // // //   ImageFile,
// // // // //   PDFSettings,
// // // // //   ConversionStatus,
// // // // //   ConversionProgress,
// // // // //   AppStep,
// // // // // } from "@/types";
// // // // // import { PDFConverter } from "@/lib/pdfConverter";
// // // // // import ImagePreview from "./ImagePreview";
// // // // // import { generateId, validateFile } from "@/lib/utils";
// // // // // import {
// // // // //   Upload,
// // // // //   CheckCircle,
// // // // //   Settings,
// // // // //   FileImage,
// // // // //   Download,
// // // // //   Folder,
// // // // //   RefreshCw,
// // // // //   ChevronLeft,
// // // // //   ChevronRight,
// // // // //   Plus,
// // // // //   AlertCircle,
// // // // //   Loader2,
// // // // // } from "lucide-react";
// // // // // import {
// // // // //   DndContext,
// // // // //   closestCenter,
// // // // //   KeyboardSensor,
// // // // //   PointerSensor,
// // // // //   useSensor,
// // // // //   useSensors,
// // // // //   DragEndEvent,
// // // // // } from "@dnd-kit/core";
// // // // // import {
// // // // //   arrayMove,
// // // // //   SortableContext,
// // // // //   sortableKeyboardCoordinates,
// // // // //   rectSortingStrategy,
// // // // // } from "@dnd-kit/sortable";

// // // // // const initialSettings: PDFSettings = {
// // // // //   orientation: "portrait",
// // // // //   paperSize: "A4",
// // // // //   margin: "medium",
// // // // //   quality: "standard",
// // // // // };

// // // // // export default function ImageToPDFConverter() {
// // // // //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// // // // //   const [images, setImages] = useState<ImageFile[]>([]);
// // // // //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// // // // //   const [conversionStatus, setConversionStatus] =
// // // // //     useState<ConversionStatus>("idle");
// // // // //   const [conversionProgress, setConversionProgress] =
// // // // //     useState<ConversionProgress>({
// // // // //       current: 0,
// // // // //       total: 0,
// // // // //       status: "",
// // // // //     });
// // // // //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

// // // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // // //   const [isDragging, setIsDragging] = useState(false);

// // // // //   const sensors = useSensors(
// // // // //     useSensor(PointerSensor),
// // // // //     useSensor(KeyboardSensor, {
// // // // //       coordinateGetter: sortableKeyboardCoordinates,
// // // // //     })
// // // // //   );

// // // // //   // Clean up object URLs
// // // // //   useEffect(() => {
// // // // //     return () => {
// // // // //       images.forEach((img) => URL.revokeObjectURL(img.url));
// // // // //     };
// // // // //   }, [images]);

// // // // //   // Handlers
// // // // //   const handleNameChange = (id: string, name: string) => {
// // // // //     setImages((prev) =>
// // // // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // // // //     );
// // // // //   };

// // // // //   const handleDelete = (id: string) => {
// // // // //     setImages((prev) => {
// // // // //       const filtered = prev.filter((img) => img.id !== id);
// // // // //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// // // // //       return filtered;
// // // // //     });
// // // // //   };

// // // // //   const handleMove = (id: string, direction: "up" | "down") => {
// // // // //     setImages((prev) => {
// // // // //       const index = prev.findIndex((img) => img.id === id);
// // // // //       if (index === -1) return prev;
// // // // //       const newIndex = direction === "up" ? index - 1 : index + 1;
// // // // //       if (newIndex < 0 || newIndex >= prev.length) return prev;

// // // // //       const updated = [...prev];
// // // // //       const [moved] = updated.splice(index, 1);
// // // // //       updated.splice(newIndex, 0, moved);
// // // // //       return updated;
// // // // //     });
// // // // //   };

// // // // //   const handleDragEnd = (event: DragEndEvent) => {
// // // // //     const { active, over } = event;

// // // // //     if (over && active.id !== over.id) {
// // // // //       setImages((items) => {
// // // // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // // // //         const newIndex = items.findIndex((item) => item.id === over.id);

// // // // //         return arrayMove(items, oldIndex, newIndex);
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const handleFileSelect = (files: FileList | null) => {
// // // // //     if (!files) return;

// // // // //     const newImages: ImageFile[] = [];
// // // // //     Array.from(files).forEach((file) => {
// // // // //       const validation = validateFile(file);
// // // // //       if (validation.isValid) {
// // // // //         const url = URL.createObjectURL(file);
// // // // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // // // //       } else {
// // // // //         alert(validation.error);
// // // // //       }
// // // // //     });

// // // // //     if (newImages.length > 0) {
// // // // //       setImages((prev) => [...prev, ...newImages]);
// // // // //     }
// // // // //   };

// // // // //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     handleFileSelect(e.target.files);
// // // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // // //   };

// // // // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // // // //     e.preventDefault();
// // // // //     setIsDragging(true);
// // // // //   }, []);

// // // // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // // // //     e.preventDefault();
// // // // //     setIsDragging(false);
// // // // //   }, []);

// // // // //   const handleDrop = useCallback((e: React.DragEvent) => {
// // // // //     e.preventDefault();
// // // // //     setIsDragging(false);
// // // // //     handleFileSelect(e.dataTransfer.files);
// // // // //   }, []);

// // // // //   const handleAddMoreClick = () => fileInputRef.current?.click();

// // // // //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// // // // //     setSettings((prev) => ({ ...prev, [key]: value }));
// // // // //   };

// // // // //   const handleConvert = useCallback(async () => {
// // // // //     if (images.length === 0) return;

// // // // //     setConversionStatus("converting");
// // // // //     setConversionProgress({
// // // // //       current: 0,
// // // // //       total: images.length,
// // // // //       status: "شروع تبدیل...",
// // // // //     });

// // // // //     try {
// // // // //       const blob = await PDFConverter.convertImagesToPDF(
// // // // //         images,
// // // // //         settings,
// // // // //         setConversionProgress
// // // // //       );
// // // // //       setPdfBlob(blob);
// // // // //       setConversionStatus("completed");
// // // // //     } catch (error) {
// // // // //       console.error("Conversion error:", error);
// // // // //       setConversionStatus("error");
// // // // //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// // // // //     }
// // // // //   }, [images, settings]);

// // // // //   const handleDownloadPDF = useCallback(() => {
// // // // //     if (!pdfBlob) return;
// // // // //     const url = URL.createObjectURL(pdfBlob);
// // // // //     const a = document.createElement("a");
// // // // //     a.href = url;
// // // // //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// // // // //     a.click();
// // // // //     URL.revokeObjectURL(url);
// // // // //   }, [pdfBlob]);

// // // // //   const handleDownloadZIP = useCallback(async () => {
// // // // //     if (images.length === 0) return;

// // // // //     setConversionStatus("converting");
// // // // //     setConversionProgress({
// // // // //       current: 0,
// // // // //       total: images.length,
// // // // //       status: "در حال ساخت ZIP...",
// // // // //     });

// // // // //     try {
// // // // //       const zipBlob = await PDFConverter.createZipFromImages(images);
// // // // //       const url = URL.createObjectURL(zipBlob);
// // // // //       const a = document.createElement("a");
// // // // //       a.href = url;
// // // // //       a.download = `images-${Date.now()}.zip`;
// // // // //       a.click();
// // // // //       URL.revokeObjectURL(url);
// // // // //       setConversionStatus("idle");
// // // // //     } catch (error) {
// // // // //       alert("خطا در ساخت ZIP");
// // // // //       setConversionStatus("idle");
// // // // //     }
// // // // //   }, [images]);

// // // // //   const goToNextStep = () => {
// // // // //     if (currentStep === "upload" && images.length > 0)
// // // // //       setCurrentStep("settings");
// // // // //     else if (currentStep === "settings") setCurrentStep("convert");
// // // // //   };

// // // // //   const goToPreviousStep = () => {
// // // // //     if (currentStep === "settings") setCurrentStep("upload");
// // // // //     else if (currentStep === "convert") setCurrentStep("settings");
// // // // //   };

// // // // //   const resetConverter = () => {
// // // // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // // // //     setImages([]);
// // // // //     setSettings(initialSettings);
// // // // //     setCurrentStep("upload");
// // // // //     setConversionStatus("idle");
// // // // //     setPdfBlob(null);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex flex-col gap-8 w-full mx-auto p-4">
// // // // //       {/* Progress Steps */}
// // // // //       <div className="flex justify-center items-center gap-4 md:gap-8">
// // // // //         {/* Step 1 */}
// // // // //         <div className="flex flex-col items-center">
// // // // //           <div
// // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // //               currentStep === "upload"
// // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // //                 : images.length > 0
// // // // //                 ? "bg-green-500 border-green-500 text-white"
// // // // //                 : "border-gray-300 text-gray-500"
// // // // //             }`}
// // // // //           >
// // // // //             {images.length > 0 ? (
// // // // //               <CheckCircle className="w-6 h-6" />
// // // // //             ) : (
// // // // //               <span className="text-lg font-bold">1</span>
// // // // //             )}
// // // // //           </div>
// // // // //           <span className="mt-2 text-sm font-medium">آپلود</span>
// // // // //         </div>

// // // // //         <div
// // // // //           className={`h-1 flex-1 transition-colors ${
// // // // //             currentStep === "settings" || currentStep === "convert"
// // // // //               ? "bg-blue-600"
// // // // //               : "bg-gray-300"
// // // // //           }`}
// // // // //         />

// // // // //         {/* Step 2 */}
// // // // //         <div className="flex flex-col items-center">
// // // // //           <div
// // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // //               currentStep === "settings"
// // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // //                 : currentStep === "convert"
// // // // //                 ? "bg-green-500 border-green-500 text-white"
// // // // //                 : "border-gray-300 text-gray-500"
// // // // //             }`}
// // // // //           >
// // // // //             {currentStep === "convert" ? (
// // // // //               <CheckCircle className="w-6 h-6" />
// // // // //             ) : (
// // // // //               <span className="text-lg font-bold">2</span>
// // // // //             )}
// // // // //           </div>
// // // // //           <span className="mt-2 text-sm font-medium">تنظیمات</span>
// // // // //         </div>

// // // // //         <div
// // // // //           className={`h-1 flex-1 transition-colors ${
// // // // //             currentStep === "convert" ? "bg-blue-600" : "bg-gray-300"
// // // // //           }`}
// // // // //         />

// // // // //         {/* Step 3 */}
// // // // //         <div className="flex flex-col items-center">
// // // // //           <div
// // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // //               currentStep === "convert"
// // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // //                 : "border-gray-300 text-gray-500"
// // // // //             }`}
// // // // //           >
// // // // //             <span className="text-lg font-bold">3</span>
// // // // //           </div>
// // // // //           <span className="mt-2 text-sm font-medium">دانلود</span>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Content */}
// // // // //       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
// // // // //         {/* Upload Step */}
// // // // //         {currentStep === "upload" && (
// // // // //           <div className="space-y-6">
// // // // //             <div className="flex items-center justify-between">
// // // // //               <h2 className="text-2xl font-bold">آپلود و چیدمان عکس‌ها</h2>
// // // // //               <span className="text-sm text-gray-500">{images.length} عکس</span>
// // // // //             </div>

// // // // //             <div
// // // // //               className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
// // // // //                 isDragging
// // // // //                   ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
// // // // //                   : "border-gray-300 dark:border-gray-600"
// // // // //               }`}
// // // // //               onDragOver={handleDragOver}
// // // // //               onDragLeave={handleDragLeave}
// // // // //               onDrop={handleDrop}
// // // // //             >
// // // // //               <input
// // // // //                 ref={fileInputRef}
// // // // //                 type="file"
// // // // //                 multiple
// // // // //                 accept=".jpg,.jpeg,.png,.webp"
// // // // //                 onChange={handleFileInputChange}
// // // // //                 className="hidden"
// // // // //               />
// // // // //               <Upload className="w-12 h-12 mx-auto text-blue-600 mb-4" />
// // // // //               <p className="text-lg font-semibold">عکس‌ها را اینجا بکشید</p>
// // // // //               <p className="text-sm text-gray-500 mt-1">یا</p>
// // // // //               <button
// // // // //                 onClick={() => fileInputRef.current?.click()}
// // // // //                 className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // // //               >
// // // // //                 انتخاب از دستگاه
// // // // //               </button>
// // // // //               <p className="text-xs text-gray-500 mt-3">
// // // // //                 JPG, PNG, WEBP • حداکثر 10MB
// // // // //               </p>
// // // // //             </div>

// // // // //             {images.length > 0 && (
// // // // //               <>
// // // // //                 <DndContext
// // // // //                   sensors={sensors}
// // // // //                   collisionDetection={closestCenter}
// // // // //                   onDragEnd={handleDragEnd}
// // // // //                 >
// // // // //                   <SortableContext
// // // // //                     items={images.map((img) => img.id)}
// // // // //                     strategy={rectSortingStrategy}
// // // // //                   >
// // // // //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
// // // // //                       {images.map((img, i) => (
// // // // //                         <ImagePreview
// // // // //                           key={img.id}
// // // // //                           image={img}
// // // // //                           index={i}
// // // // //                           onNameChange={handleNameChange}
// // // // //                           onDelete={handleDelete}
// // // // //                           onMove={handleMove}
// // // // //                           canMoveUp={i > 0}
// // // // //                           canMoveDown={i < images.length - 1}
// // // // //                         />
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </SortableContext>
// // // // //                 </DndContext>

// // // // //                 <div className="flex justify-between items-center">
// // // // //                   <button
// // // // //                     onClick={handleAddMoreClick}
// // // // //                     className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition"
// // // // //                   >
// // // // //                     <Plus className="w-5 h-5" />
// // // // //                     افزودن عکس بیشتر
// // // // //                   </button>

// // // // //                   <button
// // // // //                     onClick={goToNextStep}
// // // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // // //                   >
// // // // //                     ادامه
// // // // //                     <ChevronLeft className="w-5 h-5" />
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </>
// // // // //             )}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Settings Step */}
// // // // //         {currentStep === "settings" && (
// // // // //           <div className="space-y-6">
// // // // //             <div>
// // // // //               <h2 className="text-2xl font-bold">تنظیمات PDF</h2>
// // // // //               <p className="text-gray-500">خروجی را سفارشی کنید</p>
// // // // //             </div>

// // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
// // // // //               <div>
// // // // //                 <label className="block font-medium mb-2">جهت صفحه</label>
// // // // //                 <select
// // // // //                   value={settings.orientation}
// // // // //                   onChange={(e) =>
// // // // //                     handleSettingChange("orientation", e.target.value)
// // // // //                   }
// // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // //                 >
// // // // //                   <option value="portrait">عمودی</option>
// // // // //                   <option value="landscape">افقی</option>
// // // // //                 </select>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <label className="block font-medium mb-2">اندازه کاغذ</label>
// // // // //                 <select
// // // // //                   value={settings.paperSize}
// // // // //                   onChange={(e) =>
// // // // //                     handleSettingChange("paperSize", e.target.value)
// // // // //                   }
// // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // //                 >
// // // // //                   <option value="A4">A4</option>
// // // // //                   <option value="Letter">Letter</option>
// // // // //                   <option value="A5">A5</option>
// // // // //                 </select>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <label className="block font-medium mb-2">حاشیه</label>
// // // // //                 <select
// // // // //                   value={settings.margin}
// // // // //                   onChange={(e) =>
// // // // //                     handleSettingChange("margin", e.target.value)
// // // // //                   }
// // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // //                 >
// // // // //                   <option value="none">بدون حاشیه</option>
// // // // //                   <option value="medium">متوسط</option>
// // // // //                   <option value="large">زیاد</option>
// // // // //                 </select>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <label className="block font-medium mb-2">کیفیت</label>
// // // // //                 <select
// // // // //                   value={settings.quality}
// // // // //                   onChange={(e) =>
// // // // //                     handleSettingChange("quality", e.target.value)
// // // // //                   }
// // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // //                 >
// // // // //                   <option value="standard">استاندارد</option>
// // // // //                   <option value="high">بالا</option>
// // // // //                 </select>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="flex justify-between">
// // // // //               <button
// // // // //                 onClick={goToPreviousStep}
// // // // //                 className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // // //               >
// // // // //                 <ChevronRight className="w-5 h-5" />
// // // // //                 بازگشت
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={goToNextStep}
// // // // //                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // // //               >
// // // // //                 تبدیل
// // // // //                 <ChevronLeft className="w-5 h-5" />
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Convert Step */}
// // // // //         {currentStep === "convert" && (
// // // // //           <div className="space-y-6 text-center">
// // // // //             <div>
// // // // //               <h2 className="text-2xl font-bold">تبدیل و دانلود</h2>
// // // // //               <p className="text-gray-500">کلیک کنید تا PDF ساخته شود</p>
// // // // //             </div>

// // // // //             <button
// // // // //               onClick={handleConvert}
// // // // //               disabled={conversionStatus === "converting"}
// // // // //               className="flex items-center gap-2 mx-auto px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
// // // // //             >
// // // // //               <FileImage className="w-6 h-6" />
// // // // //               تبدیل به PDF
// // // // //             </button>

// // // // //             {conversionStatus === "converting" && (
// // // // //               <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl space-y-4">
// // // // //                 <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-600" />
// // // // //                 <div className="w-full bg-gray-200 rounded-full h-3">
// // // // //                   <div
// // // // //                     className="bg-blue-600 h-3 rounded-full transition-all duration-300"
// // // // //                     style={{
// // // // //                       width: `${
// // // // //                         (conversionProgress.current /
// // // // //                           conversionProgress.total) *
// // // // //                         100
// // // // //                       }%`,
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <p className="font-bold">{conversionProgress.status}</p>
// // // // //                 <p className="text-sm text-gray-500">
// // // // //                   {conversionProgress.current} از {conversionProgress.total}
// // // // //                 </p>
// // // // //               </div>
// // // // //             )}

// // // // //             {conversionStatus === "completed" && (
// // // // //               <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-4">
// // // // //                 <CheckCircle className="w-12 h-12 mx-auto text-green-600" />
// // // // //                 <h3 className="text-xl font-bold">PDF با موفقیت ساخته شد!</h3>
// // // // //                 <p className="text-gray-600 dark:text-gray-300">
// // // // //                   {images.length} صفحه
// // // // //                 </p>
// // // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // // //                   <button
// // // // //                     onClick={handleDownloadPDF}
// // // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // // //                   >
// // // // //                     <Download className="w-5 h-5" />
// // // // //                     دانلود PDF
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={handleDownloadZIP}
// // // // //                     className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // // //                   >
// // // // //                     <Folder className="w-5 h-5" />
// // // // //                     دانلود ZIP
// // // // //                   </button>
// // // // //                 </div>
// // // // //                 <button
// // // // //                   onClick={resetConverter}
// // // // //                   className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 mx-auto mt-4"
// // // // //                 >
// // // // //                   <RefreshCw className="w-4 h-4" />
// // // // //                   تبدیل جدید
// // // // //                 </button>
// // // // //               </div>
// // // // //             )}

// // // // //             {conversionStatus === "error" && (
// // // // //               <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-4">
// // // // //                 <AlertCircle className="w-12 h-12 mx-auto text-red-600" />
// // // // //                 <h3 className="text-xl font-bold text-red-600">خطا در تبدیل</h3>
// // // // //                 <div className="flex gap-3 justify-center">
// // // // //                   <button
// // // // //                     onClick={handleConvert}
// // // // //                     className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
// // // // //                   >
// // // // //                     تلاش مجدد
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={goToPreviousStep}
// // // // //                     className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // // //                   >
// // // // //                     بازگشت
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}

// // // // //             <div className="flex justify-start">
// // // // //               <button
// // // // //                 onClick={goToPreviousStep}
// // // // //                 className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // // //               >
// // // // //                 <ChevronRight className="w-5 h-5" />
// // // // //                 بازگشت
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // app/components/ImageToPDFConverter.tsx
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

// // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // //   const [isDragging, setIsDragging] = useState(false);

// // // //   const sensors = useSensors(
// // // //     useSensor(PointerSensor, {
// // // //       activationConstraint: {
// // // //         distance: 8,
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

// // // //   // Handlers
// // // //   const handleNameChange = (id: string, name: string) => {
// // // //     setImages((prev) =>
// // // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // // //     );
// // // //   };

// // // //   const handleDelete = (id: string) => {
// // // //     setImages((prev) => {
// // // //       const filtered = prev.filter((img) => img.id !== id);
// // // //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// // // //       return filtered;
// // // //     });
// // // //   };

// // // //   const handleMove = (id: string, direction: "up" | "down") => {
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
// // // //   };

// // // //   const handleDragEnd = (event: DragEndEvent) => {
// // // //     const { active, over } = event;

// // // //     if (over && active.id !== over.id) {
// // // //       setImages((items) => {
// // // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // // //         const newIndex = items.findIndex((item) => item.id === over.id);

// // // //         return arrayMove(items, oldIndex, newIndex);
// // // //       });
// // // //     }
// // // //   };

// // // //   const handleFileSelect = (files: FileList | null) => {
// // // //     if (!files) return;

// // // //     const newImages: ImageFile[] = [];
// // // //     Array.from(files).forEach((file) => {
// // // //       const validation = validateFile(file);
// // // //       if (validation.isValid) {
// // // //         const url = URL.createObjectURL(file);
// // // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // // //       } else {
// // // //         alert(validation.error);
// // // //       }
// // // //     });

// // // //     if (newImages.length > 0) {
// // // //       setImages((prev) => [...prev, ...newImages]);
// // // //     }
// // // //   };

// // // //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     handleFileSelect(e.target.files);
// // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // //   };

// // // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     setIsDragging(true);
// // // //   }, []);

// // // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     setIsDragging(false);
// // // //   }, []);

// // // //   const handleDrop = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     setIsDragging(false);
// // // //     handleFileSelect(e.dataTransfer.files);
// // // //   }, []);

// // // //   const handleAddMoreClick = () => fileInputRef.current?.click();

// // // //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// // // //     setSettings((prev) => ({ ...prev, [key]: value }));
// // // //   };

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
// // // //     a.click();
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
// // // //       a.click();
// // // //       URL.revokeObjectURL(url);
// // // //       setConversionStatus("idle");
// // // //     } catch (error) {
// // // //       alert("خطا در ساخت ZIP");
// // // //       setConversionStatus("idle");
// // // //     }
// // // //   }, [images]);

// // // //   const goToNextStep = () => {
// // // //     if (currentStep === "upload" && images.length > 0)
// // // //       setCurrentStep("settings");
// // // //     else if (currentStep === "settings") setCurrentStep("convert");
// // // //   };

// // // //   const goToPreviousStep = () => {
// // // //     if (currentStep === "settings") setCurrentStep("upload");
// // // //     else if (currentStep === "convert") setCurrentStep("settings");
// // // //   };

// // // //   const resetConverter = () => {
// // // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // // //     setImages([]);
// // // //     setSettings(initialSettings);
// // // //     setCurrentStep("upload");
// // // //     setConversionStatus("idle");
// // // //     setPdfBlob(null);
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
// // // //       {/* Progress Steps - Responsive */}
// // // //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // // //         {/* Step 1 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // //               currentStep === "upload"
// // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // //                 : images.length > 0
// // // //                 ? "bg-green-500 border-green-500 text-white"
// // // //                 : "border-gray-300 text-gray-500"
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
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
// // // //             آپلود
// // // //           </span>
// // // //         </div>

// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors ${
// // // //             currentStep === "settings" || currentStep === "convert"
// // // //               ? "bg-blue-600"
// // // //               : "bg-gray-300"
// // // //           }`}
// // // //         />

// // // //         {/* Step 2 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // //               currentStep === "settings"
// // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // //                 : currentStep === "convert"
// // // //                 ? "bg-green-500 border-green-500 text-white"
// // // //                 : "border-gray-300 text-gray-500"
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
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
// // // //             تنظیمات
// // // //           </span>
// // // //         </div>

// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors ${
// // // //             currentStep === "convert" ? "bg-blue-600" : "bg-gray-300"
// // // //           }`}
// // // //         />

// // // //         {/* Step 3 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // //               currentStep === "convert"
// // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // //                 : "border-gray-300 text-gray-500"
// // // //             }`}
// // // //           >
// // // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // // //           </div>
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
// // // //             دانلود
// // // //           </span>
// // // //         </div>
// // // //       </div>

// // // //       {/* Content */}
// // // //       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
// // // //         {/* Upload Step */}
// // // //         {currentStep === "upload" && (
// // // //           <div className="space-y-4 sm:space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold">
// // // //                 آپلود و چیدمان عکس‌ها
// // // //               </h2>
// // // //               <span className="text-xs sm:text-sm text-gray-500">
// // // //                 {images.length} عکس
// // // //               </span>
// // // //             </div>

// // // //             <div
// // // //               className={`border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center transition-all ${
// // // //                 isDragging
// // // //                   ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
// // // //                   : "border-gray-300 dark:border-gray-600"
// // // //               }`}
// // // //               onDragOver={handleDragOver}
// // // //               onDragLeave={handleDragLeave}
// // // //               onDrop={handleDrop}
// // // //             >
// // // //               <input
// // // //                 ref={fileInputRef}
// // // //                 type="file"
// // // //                 multiple
// // // //                 accept=".jpg,.jpeg,.png,.webp"
// // // //                 onChange={handleFileInputChange}
// // // //                 className="hidden"
// // // //               />
// // // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-blue-600 mb-2 sm:mb-3 md:mb-4" />
// // // //               <p className="text-base sm:text-lg md:text-xl font-semibold">
// // // //                 عکس‌ها را اینجا بکشید
// // // //               </p>
// // // //               <p className="text-xs sm:text-sm text-gray-500 mt-1">یا</p>
// // // //               <button
// // // //                 onClick={() => fileInputRef.current?.click()}
// // // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base"
// // // //               >
// // // //                 انتخاب از دستگاه
// // // //               </button>
// // // //               <p className="text-xs text-gray-500 mt-2 sm:mt-3">
// // // //                 JPG, PNG, WEBP • حداکثر 10MB
// // // //               </p>
// // // //             </div>

// // // //             {images.length > 0 && (
// // // //               <>
// // // //                 <DndContext
// // // //                   sensors={sensors}
// // // //                   collisionDetection={closestCenter}
// // // //                   onDragEnd={handleDragEnd}
// // // //                 >
// // // //                   <SortableContext
// // // //                     items={images.map((img) => img.id)}
// // // //                     strategy={rectSortingStrategy}
// // // //                   >
// // // //                     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
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
// // // //                         className="aspect-[4/3] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-blue-500 hover:bg-blue-50 transition"
// // // //                       >
// // // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
// // // //                         <span className="text-xs sm:text-sm font-medium text-gray-500">
// // // //                           افزودن عکس
// // // //                         </span>
// // // //                       </button>
// // // //                     </div>
// // // //                   </SortableContext>
// // // //                 </DndContext>

// // // //                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200">
// // // //                   <div className="flex items-center gap-2 text-sm text-gray-600">
// // // //                     <span className="text-xs sm:text-sm">
// // // //                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// // // //                     </span>
// // // //                   </div>

// // // //                   <div className="flex gap-2 w-full sm:w-auto">
// // // //                     <button
// // // //                       onClick={handleAddMoreClick}
// // // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition text-sm"
// // // //                     >
// // // //                       <Plus className="w-4 h-4" />
// // // //                       افزودن بیشتر
// // // //                     </button>
// // // //                     <button
// // // //                       onClick={goToNextStep}
// // // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm"
// // // //                     >
// // // //                       ادامه
// // // //                       <ChevronLeft className="w-4 h-4" />
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               </>
// // // //             )}
// // // //           </div>
// // // //         )}

// // // //         {/* Settings Step */}
// // // //         {currentStep === "settings" && (
// // // //           <div className="space-y-4 sm:space-y-6">
// // // //             <div>
// // // //               <h2 className="text-xl sm:text-2xl font-bold">تنظیمات PDF</h2>
// // // //               <p className="text-sm sm:text-base text-gray-500">
// // // //                 خروجی را سفارشی کنید
// // // //               </p>
// // // //             </div>

// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
// // // //               <div>
// // // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // // //                   جهت صفحه
// // // //                 </label>
// // // //                 <select
// // // //                   value={settings.orientation}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("orientation", e.target.value)
// // // //                   }
// // // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // // //                 >
// // // //                   <option value="portrait">عمودی</option>
// // // //                   <option value="landscape">افقی</option>
// // // //                 </select>
// // // //               </div>

// // // //               <div>
// // // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // // //                   اندازه کاغذ
// // // //                 </label>
// // // //                 <select
// // // //                   value={settings.paperSize}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("paperSize", e.target.value)
// // // //                   }
// // // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // // //                 >
// // // //                   <option value="A4">A4</option>
// // // //                   <option value="Letter">Letter</option>
// // // //                   <option value="A5">A5</option>
// // // //                 </select>
// // // //               </div>

// // // //               <div>
// // // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // // //                   حاشیه
// // // //                 </label>
// // // //                 <select
// // // //                   value={settings.margin}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("margin", e.target.value)
// // // //                   }
// // // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // // //                 >
// // // //                   <option value="none">بدون حاشیه</option>
// // // //                   <option value="medium">متوسط</option>
// // // //                   <option value="large">زیاد</option>
// // // //                 </select>
// // // //               </div>

// // // //               <div>
// // // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // // //                   کیفیت
// // // //                 </label>
// // // //                 <select
// // // //                   value={settings.quality}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("quality", e.target.value)
// // // //                   }
// // // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // // //                 >
// // // //                   <option value="standard">استاندارد</option>
// // // //                   <option value="high">بالا</option>
// // // //                 </select>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex flex-col sm:flex-row justify-between gap-3">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition order-2 sm:order-1"
// // // //               >
// // // //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //                 بازگشت
// // // //               </button>
// // // //               <button
// // // //                 onClick={goToNextStep}
// // // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition order-1 sm:order-2"
// // // //               >
// // // //                 تبدیل
// // // //                 <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Convert Step */}
// // // //         {currentStep === "convert" && (
// // // //           <div className="space-y-4 sm:space-y-6 text-center">
// // // //             <div>
// // // //               <h2 className="text-xl sm:text-2xl font-bold">تبدیل و دانلود</h2>
// // // //               <p className="text-sm sm:text-base text-gray-500">
// // // //                 کلیک کنید تا PDF ساخته شود
// // // //               </p>
// // // //             </div>

// // // //             <button
// // // //               onClick={handleConvert}
// // // //               disabled={conversionStatus === "converting"}
// // // //               className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg text-base sm:text-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto"
// // // //             >
// // // //               <FileImage className="w-5 h-5 sm:w-6 sm:h-6" />
// // // //               تبدیل به PDF
// // // //             </button>

// // // //             {conversionStatus === "converting" && (
// // // //               <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl space-y-3 sm:space-y-4">
// // // //                 <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-spin text-blue-600" />
// // // //                 <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
// // // //                   <div
// // // //                     className="bg-blue-600 h-2 sm:h-3 rounded-full transition-all duration-300"
// // // //                     style={{
// // // //                       width: `${
// // // //                         (conversionProgress.current /
// // // //                           conversionProgress.total) *
// // // //                         100
// // // //                       }%`,
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //                 <p className="font-bold text-sm sm:text-base">
// // // //                   {conversionProgress.status}
// // // //                 </p>
// // // //                 <p className="text-xs sm:text-sm text-gray-500">
// // // //                   {conversionProgress.current} از {conversionProgress.total}
// // // //                 </p>
// // // //               </div>
// // // //             )}

// // // //             {conversionStatus === "completed" && (
// // // //               <div className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-3 sm:space-y-4">
// // // //                 <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-green-600" />
// // // //                 <h3 className="text-lg sm:text-xl font-bold">
// // // //                   PDF با موفقیت ساخته شد!
// // // //                 </h3>
// // // //                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
// // // //                   {images.length} صفحه
// // // //                 </p>
// // // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleDownloadPDF}
// // // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex-1 sm:flex-none"
// // // //                   >
// // // //                     <Download className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //                     دانلود PDF
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={handleDownloadZIP}
// // // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition flex-1 sm:flex-none"
// // // //                   >
// // // //                     <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //                     دانلود ZIP
// // // //                   </button>
// // // //                 </div>
// // // //                 <button
// // // //                   onClick={resetConverter}
// // // //                   className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 mx-auto mt-2 sm:mt-4"
// // // //                 >
// // // //                   <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
// // // //                   تبدیل جدید
// // // //                 </button>
// // // //               </div>
// // // //             )}

// // // //             {conversionStatus === "error" && (
// // // //               <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-3 sm:space-y-4">
// // // //                 <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-red-600" />
// // // //                 <h3 className="text-lg sm:text-xl font-bold text-red-600">
// // // //                   خطا در تبدیل
// // // //                 </h3>
// // // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleConvert}
// // // //                     className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex-1 sm:flex-none"
// // // //                   >
// // // //                     تلاش مجدد
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={goToPreviousStep}
// // // //                     className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition flex-1 sm:flex-none"
// // // //                   >
// // // //                     بازگشت
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             <div className="flex justify-start">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // //               >
// // // //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //                 بازگشت
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
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

// // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // //   const [isDragging, setIsDragging] = useState(false);

// // //   const sensors = useSensors(
// // //     useSensor(PointerSensor, {
// // //       activationConstraint: {
// // //         distance: 8,
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

// // //   // Handlers
// // //   const handleNameChange = (id: string, name: string) => {
// // //     setImages((prev) =>
// // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // //     );
// // //   };

// // //   const handleDelete = (id: string) => {
// // //     setImages((prev) => {
// // //       const filtered = prev.filter((img) => img.id !== id);
// // //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// // //       return filtered;
// // //     });
// // //   };

// // //   const handleMove = (id: string, direction: "up" | "down") => {
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
// // //   };

// // //   const handleDragEnd = (event: DragEndEvent) => {
// // //     const { active, over } = event;

// // //     if (over && active.id !== over.id) {
// // //       setImages((items) => {
// // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // //         const newIndex = items.findIndex((item) => item.id === over.id);

// // //         return arrayMove(items, oldIndex, newIndex);
// // //       });
// // //     }
// // //   };

// // //   const handleFileSelect = (files: FileList | null) => {
// // //     if (!files) return;

// // //     const newImages: ImageFile[] = [];
// // //     Array.from(files).forEach((file) => {
// // //       const validation = validateFile(file);
// // //       if (validation.isValid) {
// // //         const url = URL.createObjectURL(file);
// // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // //       } else {
// // //         alert(validation.error);
// // //       }
// // //     });

// // //     if (newImages.length > 0) {
// // //       setImages((prev) => [...prev, ...newImages]);
// // //     }
// // //   };

// // //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     handleFileSelect(e.target.files);
// // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // //   };

// // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     setIsDragging(true);
// // //   }, []);

// // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     setIsDragging(false);
// // //   }, []);

// // //   const handleDrop = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     setIsDragging(false);
// // //     handleFileSelect(e.dataTransfer.files);
// // //   }, []);

// // //   const handleAddMoreClick = () => fileInputRef.current?.click();

// // //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// // //     setSettings((prev) => ({ ...prev, [key]: value }));
// // //   };

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
// // //     a.click();
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
// // //       a.click();
// // //       URL.revokeObjectURL(url);
// // //       setConversionStatus("idle");
// // //     } catch (error) {
// // //       alert("خطا در ساخت ZIP");
// // //       setConversionStatus("idle");
// // //     }
// // //   }, [images]);

// // //   const goToNextStep = () => {
// // //     if (currentStep === "upload" && images.length > 0)
// // //       setCurrentStep("settings");
// // //     else if (currentStep === "settings") setCurrentStep("convert");
// // //   };

// // //   const goToPreviousStep = () => {
// // //     if (currentStep === "settings") setCurrentStep("upload");
// // //     else if (currentStep === "convert") setCurrentStep("settings");
// // //   };

// // //   const resetConverter = () => {
// // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // //     setImages([]);
// // //     setSettings(initialSettings);
// // //     setCurrentStep("upload");
// // //     setConversionStatus("idle");
// // //     setPdfBlob(null);
// // //   };

// // //   return (
// // //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
// // //       {/* Progress Steps - Responsive */}
// // //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // //         {/* Step 1 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm ${
// // //               currentStep === "upload"
// // //                 ? "bg-primary border-primary text-white"
// // //                 : images.length > 0
// // //                 ? "bg-green-500 border-green-500 text-white"
// // //                 : "border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
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
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-text-light dark:text-text-dark">
// // //             آپلود
// // //           </span>
// // //         </div>

// // //         <div
// // //           className={`h-1 flex-1 transition-colors ${
// // //             currentStep === "settings" || currentStep === "convert"
// // //               ? "bg-primary"
// // //               : "bg-border-light dark:bg-border-dark"
// // //           }`}
// // //         />

// // //         {/* Step 2 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm ${
// // //               currentStep === "settings"
// // //                 ? "bg-primary border-primary text-white"
// // //                 : currentStep === "convert"
// // //                 ? "bg-green-500 border-green-500 text-white"
// // //                 : "border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
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
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-text-light dark:text-text-dark">
// // //             تنظیمات
// // //           </span>
// // //         </div>

// // //         <div
// // //           className={`h-1 flex-1 transition-colors ${
// // //             currentStep === "convert"
// // //               ? "bg-primary"
// // //               : "bg-border-light dark:bg-border-dark"
// // //           }`}
// // //         />

// // //         {/* Step 3 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm ${
// // //               currentStep === "convert"
// // //                 ? "bg-primary border-primary text-white"
// // //                 : "border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
// // //             }`}
// // //           >
// // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // //           </div>
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-text-light dark:text-text-dark">
// // //             دانلود
// // //           </span>
// // //         </div>
// // //       </div>

// // //       {/* Content */}
// // //       <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg p-4 sm:p-6 backdrop-blur-sm border border-border-light dark:border-border-dark">
// // //         {/* Upload Step */}
// // //         {currentStep === "upload" && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
// // //                 آپلود و چیدمان عکس‌ها
// // //               </h2>
// // //               <span className="text-xs sm:text-sm text-muted-light dark:text-muted-dark">
// // //                 {images.length} عکس
// // //               </span>
// // //             </div>

// // //             <div
// // //               className={`border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// // //                 isDragging
// // //                   ? "border-primary bg-background-light dark:bg-background-dark"
// // //                   : "border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark"
// // //               }`}
// // //               onDragOver={handleDragOver}
// // //               onDragLeave={handleDragLeave}
// // //               onDrop={handleDrop}
// // //             >
// // //               <input
// // //                 ref={fileInputRef}
// // //                 type="file"
// // //                 multiple
// // //                 accept=".jpg,.jpeg,.png,.webp"
// // //                 onChange={handleFileInputChange}
// // //                 className="hidden"
// // //               />
// // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// // //               <p className="text-base sm:text-lg md:text-xl font-semibold text-text-light dark:text-text-dark">
// // //                 عکس‌ها را اینجا بکشید
// // //               </p>
// // //               <p className="text-xs sm:text-sm text-muted-light dark:text-muted-dark mt-1">
// // //                 یا
// // //               </p>
// // //               <button
// // //                 onClick={() => fileInputRef.current?.click()}
// // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-sm sm:text-base backdrop-blur-sm"
// // //               >
// // //                 انتخاب از دستگاه
// // //               </button>
// // //               <p className="text-xs text-muted-light dark:text-muted-dark mt-2 sm:mt-3">
// // //                 JPG, PNG, WEBP • حداکثر 10MB
// // //               </p>
// // //             </div>

// // //             {images.length > 0 && (
// // //               <>
// // //                 <DndContext
// // //                   sensors={sensors}
// // //                   collisionDetection={closestCenter}
// // //                   onDragEnd={handleDragEnd}
// // //                 >
// // //                   <SortableContext
// // //                     items={images.map((img) => img.id)}
// // //                     strategy={rectSortingStrategy}
// // //                   >
// // //                     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
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
// // //                         className="aspect-[4/3] border-2 border-dashed border-border-light dark:border-border-dark rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary hover:bg-background-light dark:hover:bg-background-dark transition backdrop-blur-sm"
// // //                       >
// // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-muted-light dark:text-muted-dark" />
// // //                         <span className="text-xs sm:text-sm font-medium text-muted-light dark:text-muted-dark">
// // //                           افزودن عکس
// // //                         </span>
// // //                       </button>
// // //                     </div>
// // //                   </SortableContext>
// // //                 </DndContext>

// // //                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-border-light dark:border-border-dark">
// // //                   <div className="flex items-center gap-2 text-sm text-muted-light dark:text-muted-dark">
// // //                     <span className="text-xs sm:text-sm">
// // //                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// // //                     </span>
// // //                   </div>

// // //                   <div className="flex gap-2 w-full sm:w-auto">
// // //                     <button
// // //                       onClick={handleAddMoreClick}
// // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition text-sm backdrop-blur-sm"
// // //                     >
// // //                       <Plus className="w-4 h-4" />
// // //                       افزودن بیشتر
// // //                     </button>
// // //                     <button
// // //                       onClick={goToNextStep}
// // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-sm backdrop-blur-sm"
// // //                     >
// // //                       ادامه
// // //                       <ChevronLeft className="w-4 h-4" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </>
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* Settings Step */}
// // //         {currentStep === "settings" && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div>
// // //               <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
// // //                 تنظیمات PDF
// // //               </h2>
// // //               <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark">
// // //                 خروجی را سفارشی کنید
// // //               </p>
// // //             </div>

// // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl backdrop-blur-sm">
// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   جهت صفحه
// // //                 </label>
// // //                 <select
// // //                   value={settings.orientation}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("orientation", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// // //                 >
// // //                   <option value="portrait">عمودی</option>
// // //                   <option value="landscape">افقی</option>
// // //                 </select>
// // //               </div>

// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   اندازه کاغذ
// // //                 </label>
// // //                 <select
// // //                   value={settings.paperSize}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("paperSize", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// // //                 >
// // //                   <option value="A4">A4</option>
// // //                   <option value="Letter">Letter</option>
// // //                   <option value="A5">A5</option>
// // //                 </select>
// // //               </div>

// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   حاشیه
// // //                 </label>
// // //                 <select
// // //                   value={settings.margin}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("margin", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// // //                 >
// // //                   <option value="none">بدون حاشیه</option>
// // //                   <option value="medium">متوسط</option>
// // //                   <option value="large">زیاد</option>
// // //                 </select>
// // //               </div>

// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   کیفیت
// // //                 </label>
// // //                 <select
// // //                   value={settings.quality}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("quality", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// // //                 >
// // //                   <option value="standard">استاندارد</option>
// // //                   <option value="high">بالا</option>
// // //                 </select>
// // //               </div>
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row justify-between gap-3">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition order-2 sm:order-1 backdrop-blur-sm text-text-light dark:text-text-dark"
// // //               >
// // //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                 بازگشت
// // //               </button>
// // //               <button
// // //                 onClick={goToNextStep}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition order-1 sm:order-2 backdrop-blur-sm"
// // //               >
// // //                 تبدیل
// // //                 <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Convert Step */}
// // //         {currentStep === "convert" && (
// // //           <div className="space-y-4 sm:space-y-6 text-center">
// // //             <div>
// // //               <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
// // //                 تبدیل و دانلود
// // //               </h2>
// // //               <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark">
// // //                 کلیک کنید تا PDF ساخته شود
// // //               </p>
// // //             </div>

// // //             <button
// // //               onClick={handleConvert}
// // //               disabled={conversionStatus === "converting"}
// // //               className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg text-base sm:text-lg font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto backdrop-blur-sm"
// // //             >
// // //               <FileImage className="w-5 h-5 sm:w-6 sm:h-6" />
// // //               تبدیل به PDF
// // //             </button>

// // //             {conversionStatus === "converting" && (
// // //               <div className="p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl space-y-3 sm:space-y-4 backdrop-blur-sm">
// // //                 <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-spin text-primary" />
// // //                 <div className="w-full bg-border-light dark:bg-border-dark rounded-full h-2 sm:h-3">
// // //                   <div
// // //                     className="bg-primary h-2 sm:h-3 rounded-full transition-all duration-300"
// // //                     style={{
// // //                       width: `${
// // //                         (conversionProgress.current /
// // //                           conversionProgress.total) *
// // //                         100
// // //                       }%`,
// // //                     }}
// // //                   />
// // //                 </div>
// // //                 <p className="font-bold text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   {conversionProgress.status}
// // //                 </p>
// // //                 <p className="text-xs sm:text-sm text-muted-light dark:text-muted-dark">
// // //                   {conversionProgress.current} از {conversionProgress.total}
// // //                 </p>
// // //               </div>
// // //             )}

// // //             {conversionStatus === "completed" && (
// // //               <div className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-3 sm:space-y-4 backdrop-blur-sm">
// // //                 <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-green-600" />
// // //                 <h3 className="text-lg sm:text-xl font-bold text-text-light dark:text-text-dark">
// // //                   PDF با موفقیت ساخته شد!
// // //                 </h3>
// // //                 <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark">
// // //                   {images.length} صفحه
// // //                 </p>
// // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleDownloadPDF}
// // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition flex-1 sm:flex-none backdrop-blur-sm"
// // //                   >
// // //                     <Download className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                     دانلود PDF
// // //                   </button>
// // //                   <button
// // //                     onClick={handleDownloadZIP}
// // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition flex-1 sm:flex-none backdrop-blur-sm text-text-light dark:text-text-dark"
// // //                   >
// // //                     <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                     دانلود ZIP
// // //                   </button>
// // //                 </div>
// // //                 <button
// // //                   onClick={resetConverter}
// // //                   className="text-xs sm:text-sm text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark flex items-center gap-1 mx-auto mt-2 sm:mt-4"
// // //                 >
// // //                   <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
// // //                   تبدیل جدید
// // //                 </button>
// // //               </div>
// // //             )}

// // //             {conversionStatus === "error" && (
// // //               <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-3 sm:space-y-4 backdrop-blur-sm">
// // //                 <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-red-600" />
// // //                 <h3 className="text-lg sm:text-xl font-bold text-red-600">
// // //                   خطا در تبدیل
// // //                 </h3>
// // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleConvert}
// // //                     className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex-1 sm:flex-none backdrop-blur-sm"
// // //                   >
// // //                     تلاش مجدد
// // //                   </button>
// // //                   <button
// // //                     onClick={goToPreviousStep}
// // //                     className="px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition flex-1 sm:flex-none backdrop-blur-sm text-text-light dark:text-text-dark"
// // //                   >
// // //                     بازگشت
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             <div className="flex justify-start">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition backdrop-blur-sm text-text-light dark:text-text-dark"
// // //               >
// // //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                 بازگشت
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
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
// // } from "lucide-react";
// // import {
// //   DndContext,
// //   closestCenter,
// //   KeyboardSensor,
// //   PointerSensor,
// //   useSensor,
// //   useSensors,
// //   DragEndEvent,
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

// //   const fileInputRef = useRef<HTMLInputElement>(null);
// //   const [isDragging, setIsDragging] = useState(false);

// //   const sensors = useSensors(
// //     useSensor(PointerSensor, {
// //       activationConstraint: {
// //         distance: 8,
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

// //   // Handlers
// //   const handleNameChange = (id: string, name: string) => {
// //     setImages((prev) =>
// //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// //     );
// //   };

// //   const handleDelete = (id: string) => {
// //     setImages((prev) => {
// //       const filtered = prev.filter((img) => img.id !== id);
// //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// //       return filtered;
// //     });
// //   };

// //   const handleMove = (id: string, direction: "up" | "down") => {
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
// //   };

// //   const handleDragEnd = (event: DragEndEvent) => {
// //     const { active, over } = event;

// //     if (over && active.id !== over.id) {
// //       setImages((items) => {
// //         const oldIndex = items.findIndex((item) => item.id === active.id);
// //         const newIndex = items.findIndex((item) => item.id === over.id);

// //         return arrayMove(items, oldIndex, newIndex);
// //       });
// //     }
// //   };

// //   const handleFileSelect = (files: FileList | null) => {
// //     if (!files) return;

// //     const newImages: ImageFile[] = [];
// //     Array.from(files).forEach((file) => {
// //       const validation = validateFile(file);
// //       if (validation.isValid) {
// //         const url = URL.createObjectURL(file);
// //         newImages.push({ id: generateId(), url, name: file.name, file });
// //       } else {
// //         alert(validation.error);
// //       }
// //     });

// //     if (newImages.length > 0) {
// //       setImages((prev) => [...prev, ...newImages]);
// //     }
// //   };

// //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     handleFileSelect(e.target.files);
// //     if (fileInputRef.current) fileInputRef.current.value = "";
// //   };

// //   const handleDragOver = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     setIsDragging(true);
// //   }, []);

// //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //   }, []);

// //   const handleDrop = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //     handleFileSelect(e.dataTransfer.files);
// //   }, []);

// //   const handleAddMoreClick = () => fileInputRef.current?.click();

// //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// //     setSettings((prev) => ({ ...prev, [key]: value }));
// //   };

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
// //     a.click();
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
// //       a.click();
// //       URL.revokeObjectURL(url);
// //       setConversionStatus("idle");
// //     } catch (error) {
// //       alert("خطا در ساخت ZIP");
// //       setConversionStatus("idle");
// //     }
// //   }, [images]);

// //   const goToNextStep = () => {
// //     if (currentStep === "upload" && images.length > 0)
// //       setCurrentStep("settings");
// //     else if (currentStep === "settings") setCurrentStep("convert");
// //   };

// //   const goToPreviousStep = () => {
// //     if (currentStep === "settings") setCurrentStep("upload");
// //     else if (currentStep === "convert") setCurrentStep("settings");
// //   };

// //   const resetConverter = () => {
// //     images.forEach((img) => URL.revokeObjectURL(img.url));
// //     setImages([]);
// //     setSettings(initialSettings);
// //     setCurrentStep("upload");
// //     setConversionStatus("idle");
// //     setPdfBlob(null);
// //   };

// //   return (
// //     <div className="flex glass-card flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
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
// //             آپلود
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
// //         <div className="flex flex-col  items-center flex-1 max-w-24">
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
// //       <div className="glass-card rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// //         {/* Upload Step */}
// //         {currentStep === "upload" && (
// //           <div className="space-y-4 sm:space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 آپلود و چیدمان عکس‌ها
// //               </h2>
// //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //                 {images.length} عکس
// //               </span>
// //             </div>

// //             <div
// //               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm glass-effect ${
// //                 isDragging
// //                   ? "border-primary/50 bg-primary/5"
// //                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// //               }`}
// //               onDragOver={handleDragOver}
// //               onDragLeave={handleDragLeave}
// //               onDrop={handleDrop}
// //             >
// //               <input
// //                 ref={fileInputRef}
// //                 type="file"
// //                 multiple
// //                 accept=".jpg,.jpeg,.png,.webp"
// //                 onChange={handleFileInputChange}
// //                 className="hidden"
// //               />
// //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// //               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// //                 عکس‌ها را اینجا بکشید
// //               </p>
// //               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// //                 یا
// //               </p>
// //               <button
// //                 onClick={() => fileInputRef.current?.click()}
// //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// //               >
// //                 انتخاب از دستگاه
// //               </button>
// //               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// //                 JPG, PNG, WEBP • حداکثر 10MB
// //               </p>
// //             </div>

// //             {images.length > 0 && (
// //               <div className="flex flex-col md:flex-row flex-wrap flex-1 items-center justify-center md:justify-start gap-3 sm:gap-4">
// //                 <DndContext
// //                   sensors={sensors}
// //                   collisionDetection={closestCenter}
// //                   onDragEnd={handleDragEnd}
// //                 >
// //                   <SortableContext
// //                     items={images.map((img) => img.id)}
// //                     strategy={rectSortingStrategy}
// //                   >
// //                     {/* تغییر در کلاس‌های grid */}
// //                     <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
// //                       {images.map((img, i) => (
// //                         <ImagePreview
// //                           key={img.id}
// //                           image={img}
// //                           index={i}
// //                           onNameChange={handleNameChange}
// //                           onDelete={handleDelete}
// //                           onMove={handleMove}
// //                           canMoveUp={i > 0}
// //                           canMoveDown={i < images.length - 1}
// //                         />
// //                       ))}
// //                       {/* Add More Button as last item in grid */}
// //                       <button
// //                         onClick={handleAddMoreClick}
// //                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect"
// //                       >
// //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// //                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// //                           افزودن عکس
// //                         </span>
// //                       </button>
// //                     </div>
// //                   </SortableContext>
// //                 </DndContext>

// //                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// //                   <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// //                     <span className="text-xs sm:text-sm">
// //                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// //                     </span>
// //                   </div>

// //                   <div className="flex gap-2 w-full sm:w-auto">
// //                     <button
// //                       onClick={handleAddMoreClick}
// //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //                     >
// //                       <Plus className="w-4 h-4" />
// //                       افزودن بیشتر
// //                     </button>
// //                     <button
// //                       onClick={goToNextStep}
// //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect"
// //                     >
// //                       ادامه
// //                       <ChevronLeft className="w-4 h-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // // <div className="flex glass-card flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
// // //   {/* Progress Steps - Responsive */}
// // //   <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // //     {/* Step 1 */}
// // //     <div className="flex flex-col items-center flex-1 max-w-24">
// // //       <div
// // //         className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //           currentStep === "upload"
// // //             ? "bg-primary/20 border-primary/50 text-primary"
// // //             : images.length > 0
// // //             ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // //             : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //         }`}
// // //       >
// // //         {images.length > 0 ? (
// // //           <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // //         ) : (
// // //           <span className="text-sm sm:text-base md:text-lg font-bold">
// // //             1
// // //           </span>
// // //         )}
// // //       </div>
// // //       <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //         آپلود
// // //       </span>
// // //     </div>

// // //     <div
// // //       className={`h-1 flex-1 transition-colors glass-effect ${
// // //         currentStep === "settings" || currentStep === "convert"
// // //           ? "bg-primary/50"
// // //           : "bg-gray-300/50 dark:bg-gray-600/50"
// // //       }`}
// // //     />

// // //     {/* Step 2 */}
// // //     <div className="flex flex-col  items-center flex-1 max-w-24">
// // //       <div
// // //         className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //           currentStep === "settings"
// // //             ? "bg-primary/20 border-primary/50 text-primary"
// // //             : currentStep === "convert"
// // //             ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // //             : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //         }`}
// // //       >
// // //         {currentStep === "convert" ? (
// // //           <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // //         ) : (
// // //           <span className="text-sm sm:text-base md:text-lg font-bold">
// // //             2
// // //           </span>
// // //         )}
// // //       </div>
// // //       <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //         تنظیمات
// // //       </span>
// // //     </div>

// // //     <div
// // //       className={`h-1 flex-1 transition-colors glass-effect ${
// // //         currentStep === "convert"
// // //           ? "bg-primary/50"
// // //           : "bg-gray-300/50 dark:bg-gray-600/50"
// // //       }`}
// // //     />

// // //     {/* Step 3 */}
// // //     <div className="flex flex-col items-center flex-1 max-w-24">
// // //       <div
// // //         className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //           currentStep === "convert"
// // //             ? "bg-primary/20 border-primary/50 text-primary"
// // //             : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //         }`}
// // //       >
// // //         <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // //       </div>
// // //       <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //         دانلود
// // //       </span>
// // //     </div>
// // //   </div>

// // //   {/* Content */}
// // //   <div className="glass-card rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// // //     {/* Upload Step */}
// // //     {currentStep === "upload" && (
// // //       <div className="space-y-4 sm:space-y-6">
// // //         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //             آپلود و چیدمان عکس‌ها
// // //           </h2>
// // //           <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //             {images.length} عکس
// // //           </span>
// // //         </div>

// // //         <div
// // //           className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm glass-effect ${
// // //             isDragging
// // //               ? "border-primary/50 bg-primary/5"
// // //               : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// // //           }`}
// // //           onDragOver={handleDragOver}
// // //           onDragLeave={handleDragLeave}
// // //           onDrop={handleDrop}
// // //         >
// // //           <input
// // //             ref={fileInputRef}
// // //             type="file"
// // //             multiple
// // //             accept=".jpg,.jpeg,.png,.webp"
// // //             onChange={handleFileInputChange}
// // //             className="hidden"
// // //           />
// // //           <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// // //           <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// // //             عکس‌ها را اینجا بکشید
// // //           </p>
// // //           <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// // //             یا
// // //           </p>
// // //           <button
// // //             onClick={() => fileInputRef.current?.click()}
// // //             className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// // //           >
// // //             انتخاب از دستگاه
// // //           </button>
// // //           <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// // //             JPG, PNG, WEBP • حداکثر 10MB
// // //           </p>
// // //         </div>

// // //         {images.length > 0 && (
// // //           <>
// // //             <DndContext
// // //               sensors={sensors}
// // //               collisionDetection={closestCenter}
// // //               onDragEnd={handleDragEnd}
// // //             >
// // //               <SortableContext
// // //                 items={images.map((img) => img.id)}
// // //                 strategy={rectSortingStrategy}
// // //               >
// // //                 <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
// // //                   {images.map((img, i) => (
// // //                     <ImagePreview
// // //                       key={img.id}
// // //                       image={img}
// // //                       index={i}
// // //                       onNameChange={handleNameChange}
// // //                       onDelete={handleDelete}
// // //                       onMove={handleMove}
// // //                       canMoveUp={i > 0}
// // //                       canMoveDown={i < images.length - 1}
// // //                     />
// // //                   ))}
// // //                   {/* Add More Button as last item in grid */}
// // //                   <button
// // //                     onClick={handleAddMoreClick}
// // //                     className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect"
// // //                   >
// // //                     <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// // //                     <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// // //                       افزودن عکس
// // //                     </span>
// // //                   </button>
// // //                 </div>
// // //               </SortableContext>
// // //             </DndContext>

// // //             <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // //               <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// // //                 <span className="text-xs sm:text-sm">
// // //                   برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// // //                 </span>
// // //               </div>

// // //               <div className="flex gap-2 w-full sm:w-auto">
// // //                 <button
// // //                   onClick={handleAddMoreClick}
// // //                   className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //                 >
// // //                   <Plus className="w-4 h-4" />
// // //                   افزودن بیشتر
// // //                 </button>
// // //                 <button
// // //                   onClick={goToNextStep}
// // //                   className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect"
// // //                 >
// // //                   ادامه
// // //                   <ChevronLeft className="w-4 h-4" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </>
// // //         )}
// // //       </div>
// // //     )}

// // //     {/* Settings Step */}
// // //     {currentStep === "settings" && (
// // //       <div className="space-y-4 sm:space-y-6">
// // //         <div>
// // //           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //             تنظیمات PDF
// // //           </h2>
// // //           <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
// // //             خروجی را سفارشی کنید
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-white/10 dark:bg-black/10 rounded-2xl backdrop-blur-sm glass-effect">
// // //           <div>
// // //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// // //               جهت صفحه
// // //             </label>
// // //             <select
// // //               value={settings.orientation}
// // //               onChange={(e) =>
// // //                 handleSettingChange("orientation", e.target.value)
// // //               }
// // //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// // //             >
// // //               <option value="portrait">عمودی</option>
// // //               <option value="landscape">افقی</option>
// // //             </select>
// // //           </div>

// // //           <div>
// // //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// // //               اندازه کاغذ
// // //             </label>
// // //             <select
// // //               value={settings.paperSize}
// // //               onChange={(e) =>
// // //                 handleSettingChange("paperSize", e.target.value)
// // //               }
// // //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// // //             >
// // //               <option value="A4">A4</option>
// // //               <option value="Letter">Letter</option>
// // //               <option value="A5">A5</option>
// // //             </select>
// // //           </div>

// // //           <div>
// // //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// // //               حاشیه
// // //             </label>
// // //             <select
// // //               value={settings.margin}
// // //               onChange={(e) =>
// // //                 handleSettingChange("margin", e.target.value)
// // //               }
// // //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// // //             >
// // //               <option value="none">بدون حاشیه</option>
// // //               <option value="medium">متوسط</option>
// // //               <option value="large">زیاد</option>
// // //             </select>
// // //           </div>

// // //           <div>
// // //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// // //               کیفیت
// // //             </label>
// // //             <select
// // //               value={settings.quality}
// // //               onChange={(e) =>
// // //                 handleSettingChange("quality", e.target.value)
// // //               }
// // //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// // //             >
// // //               <option value="standard">استاندارد</option>
// // //               <option value="high">بالا</option>
// // //             </select>
// // //           </div>
// // //         </div>

// // //         <div className="flex flex-col sm:flex-row justify-between gap-3">
// // //           <button
// // //             onClick={goToPreviousStep}
// // //             className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition order-2 sm:order-1 backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //           >
// // //             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //             بازگشت
// // //           </button>
// // //           <button
// // //             onClick={goToNextStep}
// // //             className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition order-1 sm:order-2 backdrop-blur-sm glass-effect"
// // //           >
// // //             تبدیل
// // //             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )}

// // //     {/* Convert Step */}
// // //     {currentStep === "convert" && (
// // //       <div className="space-y-4 sm:space-y-6 text-center">
// // //         <div>
// // //           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //             تبدیل و دانلود
// // //           </h2>
// // //           <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
// // //             کلیک کنید تا PDF ساخته شود
// // //           </p>
// // //         </div>

// // //         <button
// // //           onClick={handleConvert}
// // //           disabled={conversionStatus === "converting"}
// // //           className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary/80 text-white rounded-lg text-base sm:text-lg font-bold hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto backdrop-blur-sm glass-effect"
// // //         >
// // //           <FileImage className="w-5 h-5 sm:w-6 sm:h-6" />
// // //           تبدیل به PDF
// // //         </button>

// // //         {conversionStatus === "converting" && (
// // //           <div className="p-4 sm:p-6 bg-white/10 dark:bg-black/10 rounded-2xl space-y-3 sm:space-y-4 backdrop-blur-sm glass-effect">
// // //             <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-spin text-primary" />
// // //             <div className="w-full bg-gray-300/50 dark:bg-gray-600/50 rounded-full h-2 sm:h-3">
// // //               <div
// // //                 className="bg-primary h-2 sm:h-3 rounded-full transition-all duration-300"
// // //                 style={{
// // //                   width: `${
// // //                     (conversionProgress.current /
// // //                       conversionProgress.total) *
// // //                     100
// // //                   }%`,
// // //                 }}
// // //               />
// // //             </div>
// // //             <p className="font-bold text-sm sm:text-base text-gray-800 dark:text-white">
// // //               {conversionProgress.status}
// // //             </p>
// // //             <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //               {conversionProgress.current} از {conversionProgress.total}
// // //             </p>
// // //           </div>
// // //         )}

// // //         {conversionStatus === "completed" && (
// // //           <div className="p-4 sm:p-6 bg-green-500/10 rounded-2xl space-y-3 sm:space-y-4 backdrop-blur-sm glass-effect border border-green-500/20">
// // //             <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-green-600 dark:text-green-400" />
// // //             <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
// // //               PDF با موفقیت ساخته شد!
// // //             </h3>
// // //             <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
// // //               {images.length} صفحه
// // //             </p>
// // //             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //               <button
// // //                 onClick={handleDownloadPDF}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition flex-1 sm:flex-none backdrop-blur-sm glass-effect"
// // //               >
// // //                 <Download className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                 دانلود PDF
// // //               </button>
// // //               <button
// // //                 onClick={handleDownloadZIP}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition flex-1 sm:flex-none backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //               >
// // //                 <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                 دانلود ZIP
// // //               </button>
// // //             </div>
// // //             <button
// // //               onClick={resetConverter}
// // //               className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white flex items-center gap-1 mx-auto mt-2 sm:mt-4"
// // //             >
// // //               <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
// // //               تبدیل جدید
// // //             </button>
// // //           </div>
// // //         )}

// // //         {conversionStatus === "error" && (
// // //           <div className="p-4 sm:p-6 bg-red-500/10 rounded-2xl space-y-3 sm:space-y-4 backdrop-blur-sm glass-effect border border-red-500/20">
// // //             <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-red-600 dark:text-red-400" />
// // //             <h3 className="text-lg sm:text-xl font-bold text-red-600 dark:text-red-400">
// // //               خطا در تبدیل
// // //             </h3>
// // //             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //               <button
// // //                 onClick={handleConvert}
// // //                 className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex-1 sm:flex-none backdrop-blur-sm glass-effect"
// // //               >
// // //                 تلاش مجدد
// // //               </button>
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition flex-1 sm:flex-none backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //               >
// // //                 بازگشت
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}

// // //         <div className="flex justify-start">
// // //           <button
// // //             onClick={goToPreviousStep}
// // //             className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //           >
// // //             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //             بازگشت
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )}
// // //   </div>
// // // </div>

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

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [isDragging, setIsDragging] = useState(false);

//   // بهبود سنسورها برای موبایل
//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 5, // کاهش distance برای حساسیت بهتر
//       },
//     }),
//     useSensor(TouchSensor, {
//       activationConstraint: {
//         delay: 250, // تاخیر برای تشخیص بهتر تاچ
//         tolerance: 5,
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

//   // Handlers
//   const handleNameChange = useCallback((id: string, name: string) => {
//     setImages((prev) =>
//       prev.map((img) => (img.id === id ? { ...img, name } : img))
//     );
//   }, []);

//   const handleDelete = useCallback((id: string) => {
//     setImages((prev) => {
//       const imageToDelete = prev.find((img) => img.id === id);
//       if (imageToDelete) {
//         URL.revokeObjectURL(imageToDelete.url);
//       }
//       return prev.filter((img) => img.id !== id);
//     });
//   }, []);

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

//     const newImages: ImageFile[] = [];
//     Array.from(files).forEach((file) => {
//       const validation = validateFile(file);
//       if (validation.isValid) {
//         const url = URL.createObjectURL(file);
//         newImages.push({ id: generateId(), url, name: file.name, file });
//       } else {
//         alert(validation.error);
//       }
//     });

//     if (newImages.length > 0) {
//       setImages((prev) => [...prev, ...newImages]);
//     }
//   }, []);

//   const handleFileInputChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       handleFileSelect(e.target.files);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     },
//     [handleFileSelect]
//   );

//   const handleDragOver = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(true);
//   }, []);

//   const handleDragLeave = useCallback((e: React.DragEvent) => {
//     e.preventDefault();

//     // فقط زمانی که از روی المان اصلی خارج می‌شویم isDragging را false کنیم
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
//     fileInputRef.current?.click();
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
//   }, [images]);

//   return (
//     <div className="flex  flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6    backdrop-blur-sm ">
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
//             آپلود
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
//       <div className=" rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
//         {/* Upload Step */}
//         {currentStep === "upload" && (
//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 آپلود
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 {images.length} عکس
//               </span>
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
//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 multiple
//                 accept=".jpg,.jpeg,.png,.webp"
//                 onChange={handleFileInputChange}
//                 className="hidden"
//               />
//               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
//               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
//                 عکس‌ها را اینجا بکشید
//               </p>
//               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
//                 یا
//               </p>
//               <button
//                 onClick={() => fileInputRef.current?.click()}
//                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
//               >
//                 انتخاب از دستگاه
//               </button>
//               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
//                 JPG, PNG, WEBP • حداکثر 10MB
//               </p>
//             </div>

//             {images.length > 0 && (
//               <div className="flex flex-col gap-5">
//                 <DndContext
//                   sensors={sensors}
//                   collisionDetection={closestCenter}
//                   onDragEnd={handleDragEnd}
//                   modifiers={[]} // حذف مودیفایرها برای عملکرد بهتر در موبایل
//                 >
//                   <SortableContext
//                     items={images.map((img) => img.id)}
//                     strategy={rectSortingStrategy}
//                   >
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
//                       {images.map((img, i) => (
//                         <ImagePreview
//                           key={img.id}
//                           image={img}
//                           index={i}
//                           onNameChange={handleNameChange}
//                           onDelete={handleDelete}
//                           onMove={handleMove}
//                           canMoveUp={i > 0}
//                           canMoveDown={i < images.length - 1}
//                         />
//                       ))}
//                       {/* Add More Button as last item in grid */}
//                       <button
//                         onClick={handleAddMoreClick}
//                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect"
//                       >
//                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
//                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
//                           افزودن عکس
//                         </span>
//                       </button>
//                     </div>
//                   </SortableContext>
//                 </DndContext>

//                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
//                   <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                     <span className="text-xs sm:text-sm">
//                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
//                     </span>
//                   </div>

//                   <div className="flex gap-2 w-full sm:w-auto">
//                     <button
//                       onClick={handleAddMoreClick}
//                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//                     >
//                       <Plus className="w-4 h-4" />
//                       افزودن بیشتر
//                     </button>
//                     <button
//                       onClick={goToNextStep}
//                       disabled={images.length === 0}
//                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       ادامه
//                       <ChevronLeft className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
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

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     جهت کاغذ
//                   </label>
//                   <select
//                     value={settings.orientation}
//                     onChange={(e) =>
//                       handleSettingChange("orientation", e.target.value)
//                     }
//                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
//                   >
//                     <option value="portrait">عمودی</option>
//                     <option value="landscape">افقی</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     سایز کاغذ
//                   </label>
//                   <select
//                     value={settings.paperSize}
//                     onChange={(e) =>
//                       handleSettingChange("paperSize", e.target.value)
//                     }
//                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
//                   >
//                     <option value="A4">A4</option>
//                     <option value="A3">A3</option>
//                     <option value="letter">Letter</option>
//                     <option value="legal">Legal</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     حاشیه
//                   </label>
//                   <select
//                     value={settings.margin}
//                     onChange={(e) =>
//                       handleSettingChange("margin", e.target.value)
//                     }
//                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
//                   >
//                     <option value="small">کوچک</option>
//                     <option value="medium">متوسط</option>
//                     <option value="large">بزرگ</option>
//                     <option value="none">بدون حاشیه</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     کیفیت
//                   </label>
//                   <select
//                     value={settings.quality}
//                     onChange={(e) =>
//                       handleSettingChange("quality", e.target.value)
//                     }
//                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
//                   >
//                     <option value="low">پایین</option>
//                     <option value="standard">استاندارد</option>
//                     <option value="high">بالا</option>
//                   </select>
//                 </div>
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

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // بهبود سنسورها برای موبایل
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // کاهش distance برای حساسیت بهتر
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250, // تاخیر برای تشخیص بهتر تاچ
        tolerance: 5,
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

  // Handlers
  const handleNameChange = useCallback((id: string, name: string) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, name } : img))
    );
  }, []);

  const handleDelete = useCallback((id: string) => {
    setImages((prev) => {
      const imageToDelete = prev.find((img) => img.id === id);
      if (imageToDelete) {
        URL.revokeObjectURL(imageToDelete.url);
      }
      return prev.filter((img) => img.id !== id);
    });
  }, []);

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

    const newImages: ImageFile[] = [];
    Array.from(files).forEach((file) => {
      const validation = validateFile(file);
      if (validation.isValid) {
        const url = URL.createObjectURL(file);
        newImages.push({ id: generateId(), url, name: file.name, file });
      } else {
        alert(validation.error);
      }
    });

    if (newImages.length > 0) {
      setImages((prev) => [...prev, ...newImages]);
    }
  }, []);

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFileSelect(e.target.files);
      if (fileInputRef.current) fileInputRef.current.value = "";
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();

    // فقط زمانی که از روی المان اصلی خارج می‌شویم isDragging را false کنیم
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
    fileInputRef.current?.click();
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
  }, [images]);

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
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.webp"
                onChange={handleFileInputChange}
                className="hidden"
              />
              <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
              <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                عکس‌ها را اینجا بکشید
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                یا
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
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

            <div className="flex flex-col gap-5">
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                    {images.map((img, i) => (
                      <ImagePreview
                        key={img.id}
                        image={img}
                        index={i}
                        onNameChange={handleNameChange}
                        onDelete={handleDelete}
                        onMove={handleMove}
                        canMoveUp={i > 0}
                        canMoveDown={i < images.length - 1}
                      />
                    ))}
                    {/* Add More Button as last item in grid */}
                    <button
                      onClick={handleAddMoreClick}
                      className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect"
                    >
                      <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                        افزودن عکس
                      </span>
                    </button>
                  </div>
                </SortableContext>
              </DndContext>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-xs sm:text-sm">
                    برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
                  </span>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleAddMoreClick}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
                  >
                    <Plus className="w-4 h-4" />
                    افزودن بیشتر
                  </button>
                  <button
                    onClick={goToNextStep}
                    disabled={images.length === 0}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ادامه
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    جهت کاغذ
                  </label>
                  <select
                    value={settings.orientation}
                    onChange={(e) =>
                      handleSettingChange("orientation", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
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
                    className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
                  >
                    <option value="A4">A4</option>
                    <option value="A3">A3</option>
                    <option value="letter">Letter</option>
                    <option value="legal">Legal</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    حاشیه
                  </label>
                  <select
                    value={settings.margin}
                    onChange={(e) =>
                      handleSettingChange("margin", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
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
                    onChange={(e) =>
                      handleSettingChange("quality", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
                  >
                    <option value="low">پایین</option>
                    <option value="standard">استاندارد</option>
                    <option value="high">بالا</option>
                  </select>
                </div>
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

            {conversionStatus === "idle" && (
              <div className="text-center space-y-4">
                <FileImage className="w-16 h-16 mx-auto text-primary" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  آماده برای تبدیل {images.length} عکس به PDF
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleConvert}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
                  >
                    <Settings className="w-5 h-5" />
                    شروع تبدیل
                  </button>
                  <button
                    onClick={handleDownloadZIP}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
                  >
                    <Folder className="w-5 h-5" />
                    دانلود ZIP
                  </button>
                </div>
              </div>
            )}

            {conversionStatus === "converting" && (
              <div className="text-center space-y-4">
                <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
                <div className="space-y-2">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    در حال تبدیل...
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {conversionProgress.status}
                  </p>
                  <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
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
            )}

            {conversionStatus === "completed" && pdfBlob && (
              <div className="text-center space-y-4">
                <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  تبدیل با موفقیت انجام شد!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleDownloadPDF}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
                  >
                    <Download className="w-5 h-5" />
                    دانلود PDF
                  </button>
                  <button
                    onClick={resetConverter}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
                  >
                    <RefreshCw className="w-5 h-5" />
                    شروع جدید
                  </button>
                </div>
              </div>
            )}

            {conversionStatus === "error" && (
              <div className="text-center space-y-4">
                <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
                <p className="text-lg text-red-600 dark:text-red-400">
                  خطا در تبدیل
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleConvert}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
                  >
                    <RefreshCw className="w-5 h-5" />
                    تلاش مجدد
                  </button>
                  <button
                    onClick={goToPreviousStep}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
                  >
                    بازگشت
                  </button>
                </div>
              </div>
            )}

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
    </div>
  );
}
