// // // // // // // //components/ImagePreview.tsx
// // // // // // // "use client";

// // // // // // // import { ImageFile } from "@/types";

// // // // // // // interface ImagePreviewProps {
// // // // // // //   image: ImageFile;
// // // // // // //   index: number;
// // // // // // //   onNameChange: (id: string, name: string) => void;
// // // // // // //   onDelete: (id: string) => void;
// // // // // // //   onMove: (id: string, direction: "up" | "down") => void;
// // // // // // //   canMoveUp: boolean;
// // // // // // //   canMoveDown: boolean;
// // // // // // // }

// // // // // // // export default function ImagePreview({
// // // // // // //   image,
// // // // // // //   index,
// // // // // // //   onNameChange,
// // // // // // //   onDelete,
// // // // // // //   onMove,
// // // // // // //   canMoveUp,
// // // // // // //   canMoveDown,
// // // // // // // }: ImagePreviewProps) {
// // // // // // //   return (
// // // // // // //     <div className="flex flex-col gap-3 pb-3 group relative">
// // // // // // //       <div className="absolute top-2 right-2 z-10 text-sm font-bold bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center backdrop-blur-sm">
// // // // // // //         {index + 1}
// // // // // // //       </div>

// // // // // // //       <div
// // // // // // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden ring-1 ring-border-light dark:ring-border-dark"
// // // // // // //         style={{ backgroundImage: `url("${image.url}")` }}
// // // // // // //       >
// // // // // // //         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// // // // // // //           <div className="flex flex-col gap-1">
// // // // // // //             <button
// // // // // // //               onClick={() => onMove(image.id, "up")}
// // // // // // //               disabled={!canMoveUp}
// // // // // // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // // // //               title="جابجایی به بالا"
// // // // // // //             >
// // // // // // //               <span className="material-symbols-outlined text-sm">
// // // // // // //                 arrow_upward
// // // // // // //               </span>
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={() => onMove(image.id, "down")}
// // // // // // //               disabled={!canMoveDown}
// // // // // // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // // // //               title="جابجایی به پایین"
// // // // // // //             >
// // // // // // //               <span className="material-symbols-outlined text-sm">
// // // // // // //                 arrow_downward
// // // // // // //               </span>
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //           <button
// // // // // // //             onClick={() => onDelete(image.id)}
// // // // // // //             className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500/50 transition-colors"
// // // // // // //             title="حذف"
// // // // // // //           >
// // // // // // //             <span className="material-symbols-outlined text-xl">delete</span>
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <input
// // // // // // //         aria-label="نام صفحه"
// // // // // // //         className="w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-md text-sm px-2 py-1 focus:ring-primary focus:border-primary"
// // // // // // //         placeholder="نام صفحه (اختیاری)"
// // // // // // //         type="text"
// // // // // // //         value={image.name}
// // // // // // //         onChange={(e) => onNameChange(image.id, e.target.value)}
// // // // // // //       />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // // components/ImagePreview.tsx
// // // // // // "use client";

// // // // // // import { ImageFile } from "@/types";
// // // // // // import { ArrowUp, ArrowDown, Trash2, GripVertical } from "lucide-react";
// // // // // // import { useSortable } from "@dnd-kit/sortable";
// // // // // // import { CSS } from "@dnd-kit/utilities";

// // // // // // interface ImagePreviewProps {
// // // // // //   image: ImageFile;
// // // // // //   index: number;
// // // // // //   onNameChange: (id: string, name: string) => void;
// // // // // //   onDelete: (id: string) => void;
// // // // // //   onMove: (id: string, direction: "up" | "down") => void;
// // // // // //   canMoveUp: boolean;
// // // // // //   canMoveDown: boolean;
// // // // // // }

// // // // // // export default function ImagePreview({
// // // // // //   image,
// // // // // //   index,
// // // // // //   onNameChange,
// // // // // //   onDelete,
// // // // // //   onMove,
// // // // // //   canMoveUp,
// // // // // //   canMoveDown,
// // // // // // }: ImagePreviewProps) {
// // // // // //   const {
// // // // // //     attributes,
// // // // // //     listeners,
// // // // // //     setNodeRef,
// // // // // //     transform,
// // // // // //     transition,
// // // // // //     isDragging,
// // // // // //   } = useSortable({ id: image.id });

// // // // // //   const style = {
// // // // // //     transform: CSS.Transform.toString(transform),
// // // // // //     transition,
// // // // // //     opacity: isDragging ? 0.5 : 1,
// // // // // //   };

// // // // // //   return (
// // // // // //     <div
// // // // // //       ref={setNodeRef}
// // // // // //       style={style}
// // // // // //       className="flex flex-col gap-3 pb-3 group relative"
// // // // // //     >
// // // // // //       {/* Drag Handle */}
// // // // // //       <div
// // // // // //         {...attributes}
// // // // // //         {...listeners}
// // // // // //         className="absolute top-2 left-2 z-20 h-6 w-6 flex items-center justify-center bg-black/50 text-white rounded cursor-grab active:cursor-grabbing backdrop-blur-sm"
// // // // // //       >
// // // // // //         <GripVertical className="w-4 h-4" />
// // // // // //       </div>

// // // // // //       {/* Image Number */}
// // // // // //       <div className="absolute top-2 right-2 z-10 text-sm font-bold bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center backdrop-blur-sm">
// // // // // //         {index + 1}
// // // // // //       </div>

// // // // // //       {/* Image Container */}
// // // // // //       <div
// // // // // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden ring-1 ring-gray-300 dark:ring-gray-600"
// // // // // //         style={{ backgroundImage: `url("${image.url}")` }}
// // // // // //       >
// // // // // //         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// // // // // //           <div className="flex flex-col gap-1">
// // // // // //             <button
// // // // // //               onClick={() => onMove(image.id, "up")}
// // // // // //               disabled={!canMoveUp}
// // // // // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // // //               title="جابجایی به بالا"
// // // // // //             >
// // // // // //               <ArrowUp className="w-4 h-4" />
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={() => onMove(image.id, "down")}
// // // // // //               disabled={!canMoveDown}
// // // // // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // // //               title="جابجایی به پایین"
// // // // // //             >
// // // // // //               <ArrowDown className="w-4 h-4" />
// // // // // //             </button>
// // // // // //           </div>
// // // // // //           <button
// // // // // //             onClick={() => onDelete(image.id)}
// // // // // //             className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500/50 transition-colors"
// // // // // //             title="حذف"
// // // // // //           >
// // // // // //             <Trash2 className="w-5 h-5" />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Name Input */}
// // // // // //       <input
// // // // // //         aria-label="نام صفحه"
// // // // // //         className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
// // // // // //         placeholder="نام صفحه (اختیاری)"
// // // // // //         type="text"
// // // // // //         value={image.name}
// // // // // //         onChange={(e) => onNameChange(image.id, e.target.value)}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // // components/ImagePreview.tsx
// // // // // "use client";

// // // // // import { ImageFile } from "@/types";
// // // // // import { ArrowUp, ArrowDown, Trash2, GripVertical } from "lucide-react";
// // // // // import { useSortable } from "@dnd-kit/sortable";
// // // // // import { CSS } from "@dnd-kit/utilities";

// // // // // interface ImagePreviewProps {
// // // // //   image: ImageFile;
// // // // //   index: number;
// // // // //   onNameChange: (id: string, name: string) => void;
// // // // //   onDelete: (id: string) => void;
// // // // //   onMove: (id: string, direction: "up" | "down") => void;
// // // // //   canMoveUp: boolean;
// // // // //   canMoveDown: boolean;
// // // // // }

// // // // // export default function ImagePreview({
// // // // //   image,
// // // // //   index,
// // // // //   onNameChange,
// // // // //   onDelete,
// // // // //   onMove,
// // // // //   canMoveUp,
// // // // //   canMoveDown,
// // // // // }: ImagePreviewProps) {
// // // // //   const {
// // // // //     attributes,
// // // // //     listeners,
// // // // //     setNodeRef,
// // // // //     transform,
// // // // //     transition,
// // // // //     isDragging,
// // // // //   } = useSortable({ id: image.id });

// // // // //   const style = {
// // // // //     transform: CSS.Transform.toString(transform),
// // // // //     transition,
// // // // //     opacity: isDragging ? 0.5 : 1,
// // // // //   };

// // // // //   return (
// // // // //     <div
// // // // //       ref={setNodeRef}
// // // // //       style={style}
// // // // //       className="flex flex-col gap-2 sm:gap-3 pb-2 sm:pb-3 group relative"
// // // // //     >
// // // // //       {/* Drag Handle - Now the entire image is draggable */}
// // // // //       <div
// // // // //         {...attributes}
// // // // //         {...listeners}
// // // // //         className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing rounded-lg"
// // // // //       >
// // // // //         {/* Small drag icon in corner for visual indication */}
// // // // //         <div className="absolute top-1 left-1 sm:top-2 sm:left-2 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center bg-black/50 text-white rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
// // // // //           <GripVertical className="w-3 h-3 sm:w-4 sm:h-4" />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Image Number */}
// // // // //       <div className="absolute top-1 right-1 sm:top-2 sm:right-2 z-10 text-xs sm:text-sm font-bold bg-black/50 text-white rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center backdrop-blur-sm">
// // // // //         {index + 1}
// // // // //       </div>

// // // // //       {/* Image Container */}
// // // // //       <div
// // // // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden ring-1 ring-gray-300 dark:ring-gray-600"
// // // // //         style={{ backgroundImage: `url("${image.url}")` }}
// // // // //       >
// // // // //         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 sm:gap-2">
// // // // //           <div className="flex flex-col gap-1">
// // // // //             <button
// // // // //               onClick={(e) => {
// // // // //                 e.stopPropagation();
// // // // //                 onMove(image.id, "up");
// // // // //               }}
// // // // //               disabled={!canMoveUp}
// // // // //               className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // //               title="جابجایی به بالا"
// // // // //             >
// // // // //               <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={(e) => {
// // // // //                 e.stopPropagation();
// // // // //                 onMove(image.id, "down");
// // // // //               }}
// // // // //               disabled={!canMoveDown}
// // // // //               className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // //               title="جابجایی به پایین"
// // // // //             >
// // // // //               <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
// // // // //             </button>
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={(e) => {
// // // // //               e.stopPropagation();
// // // // //               onDelete(image.id);
// // // // //             }}
// // // // //             className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500/50 transition-colors"
// // // // //             title="حذف"
// // // // //           >
// // // // //             <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Name Input */}
// // // // //       <input
// // // // //         aria-label="نام صفحه"
// // // // //         className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-xs sm:text-sm px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
// // // // //         placeholder="نام صفحه (اختیاری)"
// // // // //         type="text"
// // // // //         value={image.name}
// // // // //         onChange={(e) => onNameChange(image.id, e.target.value)}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // components/ImagePreview.tsx -
// // // // "use client";

// // // // import { ImageFile } from "@/types";
// // // // import { ArrowUp, ArrowDown, Trash2, GripVertical, Hand } from "lucide-react";
// // // // import { useSortable } from "@dnd-kit/sortable";
// // // // import { CSS } from "@dnd-kit/utilities";

// // // // interface ImagePreviewProps {
// // // //   image: ImageFile;
// // // //   index: number;
// // // //   onNameChange: (id: string, name: string) => void;
// // // //   onDelete: (id: string) => void;
// // // //   onMove: (id: string, direction: "up" | "down") => void;
// // // //   canMoveUp: boolean;
// // // //   canMoveDown: boolean;
// // // // }

// // // // export default function ImagePreview({
// // // //   image,
// // // //   index,
// // // //   onNameChange,
// // // //   onDelete,
// // // //   onMove,
// // // //   canMoveUp,
// // // //   canMoveDown,
// // // // }: ImagePreviewProps) {
// // // //   const {
// // // //     attributes,
// // // //     listeners,
// // // //     setNodeRef,
// // // //     transform,
// // // //     transition,
// // // //     isDragging,
// // // //   } = useSortable({ id: image.id });

// // // //   const style = {
// // // //     transform: CSS.Transform.toString(transform),
// // // //     transition,
// // // //     opacity: isDragging ? 0.5 : 1,
// // // //   };

// // // //   return (
// // // //     <div
// // // //       ref={setNodeRef}
// // // //       style={style}
// // // //       className="flex flex-col gap-2 sm:gap-3 pb-2 sm:pb-3 group relative"
// // // //     >
// // // //       {/* Drag Handle - Only the grip icon */}
// // // //       <div
// // // //         {...attributes}
// // // //         {...listeners}
// // // //         className="absolute top-1 left-1 sm:top-2 sm:left-2 z-20 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center bg-black/50 text-white rounded cursor-grab active:cursor-grabbing backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
// // // //       >
// // // //         {/* <GripVertical className="w-3 h-3 sm:w-4 sm:h-4" /> */}
// // // //         <Hand className="w-3 h-3 sm:w-4 sm:h-4" />
// // // //       </div>

// // // //       {/* Image Number */}
// // // //       <div className="absolute top-1 right-1 sm:top-2 sm:right-2 z-10 text-xs sm:text-sm font-bold bg-black/50 text-white rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center backdrop-blur-sm">
// // // //         {index + 1}
// // // //       </div>

// // // //       {/* Image Container */}
// // // //       <div
// // // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden ring-1 ring-gray-300 dark:ring-gray-600"
// // // //         style={{ backgroundImage: `url("${image.url}")` }}
// // // //       >
// // // //         <div
// // // //           className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 sm:gap-2"
// // // //           onClick={(e) => e.stopPropagation()} // Prevent drag when clicking buttons
// // // //         >
// // // //           <div className="flex flex-col gap-1">
// // // //             <button
// // // //               onClick={() => onMove(image.id, "up")}
// // // //               disabled={!canMoveUp}
// // // //               className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // //               title="جابجایی به بالا"
// // // //             >
// // // //               <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
// // // //             </button>
// // // //             <button
// // // //               onClick={() => onMove(image.id, "down")}
// // // //               disabled={!canMoveDown}
// // // //               className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // //               title="جابجایی به پایین"
// // // //             >
// // // //               <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
// // // //             </button>
// // // //           </div>
// // // //           <button
// // // //             onClick={() => onDelete(image.id)}
// // // //             className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500/50 transition-colors"
// // // //             title="حذف"
// // // //           >
// // // //             <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Name Input */}
// // // //       <input
// // // //         aria-label="نام صفحه"
// // // //         className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-xs sm:text-sm px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
// // // //         placeholder="نام صفحه (اختیاری)"
// // // //         type="text"
// // // //         value={image.name}
// // // //         onChange={(e) => onNameChange(image.id, e.target.value)}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }

// // // // components/ImagePreview.tsx
// // // "use client";

// // // import { ImageFile } from "@/types";
// // // import { ArrowUp, ArrowDown, Trash2, Hand } from "lucide-react";
// // // import { useSortable } from "@dnd-kit/sortable";
// // // import { CSS } from "@dnd-kit/utilities";

// // // interface ImagePreviewProps {
// // //   image: ImageFile;
// // //   index: number;
// // //   onNameChange: (id: string, name: string) => void;
// // //   onDelete: (id: string) => void;
// // //   onMove: (id: string, direction: "up" | "down") => void;
// // //   canMoveUp: boolean;
// // //   canMoveDown: boolean;
// // // }

// // // export default function ImagePreview({
// // //   image,
// // //   index,
// // //   onNameChange,
// // //   onDelete,
// // //   onMove,
// // //   canMoveUp,
// // //   canMoveDown,
// // // }: ImagePreviewProps) {
// // //   const {
// // //     attributes,
// // //     listeners,
// // //     setNodeRef,
// // //     transform,
// // //     transition,
// // //     isDragging,
// // //   } = useSortable({ id: image.id });

// // //   const style = {
// // //     transform: CSS.Transform.toString(transform),
// // //     transition,
// // //     opacity: isDragging ? 0.5 : 1,
// // //   };

// // //   return (
// // //     <div
// // //       ref={setNodeRef}
// // //       style={style}
// // //       className="flex flex-col gap-2 sm:gap-3 group relative"
// // //     >
// // //       {/* Drag Handle - Entire image area */}
// // //       <div
// // //         {...attributes}
// // //         {...listeners}
// // //         className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing rounded-lg"
// // //       >
// // //         {/* Drag indicator */}
// // //         <div className="absolute top-2 left-2 h-6 w-6 flex items-center justify-center bg-black/50 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
// // //           <Hand className="w-3 h-3" />
// // //         </div>
// // //       </div>

// // //       {/* Image Number */}
// // //       <div className="absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center backdrop-blur-sm">
// // //         {index + 1}
// // //       </div>

// // //       {/* Delete Button - Outside the image */}
// // //       <button
// // //         onClick={() => onDelete(image.id)}
// // //         className="absolute -top-2 -right-2 z-30 h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
// // //         title="حذف"
// // //       >
// // //         <Trash2 className="w-3 h-3" />
// // //       </button>

// // //       {/* Image Container */}
// // //       <div
// // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden border-2 border-gray-200 dark:border-gray-600"
// // //         style={{ backgroundImage: `url("${image.url}")` }}
// // //       >
// // //         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// // //           <div className="flex flex-col gap-1 bg-black/50 backdrop-blur-sm rounded-lg p-2">
// // //             <button
// // //               onClick={(e) => {
// // //                 e.stopPropagation();
// // //                 onMove(image.id, "up");
// // //               }}
// // //               disabled={!canMoveUp}
// // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // //               title="جابجایی به بالا"
// // //             >
// // //               <ArrowUp className="w-4 h-4" />
// // //             </button>
// // //             <button
// // //               onClick={(e) => {
// // //                 e.stopPropagation();
// // //                 onMove(image.id, "down");
// // //               }}
// // //               disabled={!canMoveDown}
// // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // //               title="جابجایی به پایین"
// // //             >
// // //               <ArrowDown className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* File name display (read-only) */}
// // //       <div className="text-xs text-gray-600 dark:text-gray-400 truncate px-1 text-center">
// // //         {image.name}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // components/ImagePreview.tsx
// // "use client";

// // import { ImageFile } from "@/types";
// // import { ArrowUp, ArrowDown, Trash2, Hand } from "lucide-react";
// // import { useSortable } from "@dnd-kit/sortable";
// // import { CSS } from "@dnd-kit/utilities";

// // interface ImagePreviewProps {
// //   image: ImageFile;
// //   index: number;
// //   onNameChange: (id: string, name: string) => void;
// //   onDelete: (id: string) => void;
// //   onMove: (id: string, direction: "up" | "down") => void;
// //   canMoveUp: boolean;
// //   canMoveDown: boolean;
// // }

// // export default function ImagePreview({
// //   image,
// //   index,
// //   onNameChange,
// //   onDelete,
// //   onMove,
// //   canMoveUp,
// //   canMoveDown,
// // }: ImagePreviewProps) {
// //   const {
// //     attributes,
// //     listeners,
// //     setNodeRef,
// //     transform,
// //     transition,
// //     isDragging,
// //   } = useSortable({ id: image.id });

// //   const style = {
// //     transform: CSS.Transform.toString(transform),
// //     transition,
// //     opacity: isDragging ? 0.5 : 1,
// //   };

// //   return (
// //     <div
// //       ref={setNodeRef}
// //       style={style}
// //       className="flex flex-col gap-2 sm:gap-3 group relative"
// //     >
// //       {/* Drag Handle - Entire image area */}
// //       <div
// //         {...attributes}
// //         {...listeners}
// //         className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing rounded-lg"
// //       >
// //         {/* Drag indicator */}
// //         <div className="absolute top-2 left-2 h-6 w-6 flex items-center justify-center bg-black/50 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity glass-effect">
// //           <Hand className="w-3 h-3" />
// //         </div>
// //       </div>

// //       {/* Image Number */}
// //       <div className="absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center backdrop-blur-sm glass-effect">
// //         {index + 1}
// //       </div>

// //       {/* Delete Button - Outside the image */}
// //       <button
// //         onClick={() => onDelete(image.id)}
// //         className="absolute -top-2 -right-2 z-30 h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg glass-effect"
// //         title="حذف"
// //       >
// //         <Trash2 className="w-3 h-3" />
// //       </button>

// //       {/* Image Container */}
// //       <div
// //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden border-2 border-gray-200/50 dark:border-gray-600/50 glass-effect"
// //         style={{ backgroundImage: `url("${image.url}")` }}
// //       >
// //         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// //           <div className="flex flex-col gap-1 bg-black/50 backdrop-blur-sm rounded-lg p-2 glass-effect">
// //             <button
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onMove(image.id, "up");
// //               }}
// //               disabled={!canMoveUp}
// //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed glass-effect"
// //               title="جابجایی به بالا"
// //             >
// //               <ArrowUp className="w-4 h-4" />
// //             </button>
// //             <button
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onMove(image.id, "down");
// //               }}
// //               disabled={!canMoveDown}
// //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed glass-effect"
// //               title="جابجایی به پایین"
// //             >
// //               <ArrowDown className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* File name display (read-only) */}
// //       <div className="text-xs text-gray-600 dark:text-gray-400 truncate px-1 text-center">
// //         {image.name}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { ImageFile } from "@/types";
// import { ArrowUp, ArrowDown, Trash2, Hand } from "lucide-react";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// interface ImagePreviewProps {
//   image: ImageFile;
//   index: number;
//   onNameChange: (id: string, name: string) => void;
//   onDelete: (id: string) => void;
//   onMove: (id: string, direction: "up" | "down") => void;
//   canMoveUp: boolean;
//   canMoveDown: boolean;
// }

// export default function ImagePreview({
//   image,
//   index,
//   onNameChange,
//   onDelete,
//   onMove,
//   canMoveUp,
//   canMoveDown,
// }: ImagePreviewProps) {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({ id: image.id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.3 : 1,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className={`flex flex-col   gap-2 group relative select-none ${
//         isDragging ? "scale-[0.97] shadow-2xl" : "scale-100"
//       } transition-all`}
//     >
//       {/* Drag Overlay */}
//       <div
//         {...attributes}
//         {...listeners}
//         className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing rounded-lg"
//       >
//         {/* drag icon */}
//         <div
//           className="absolute top-2 left-2 h-6 w-6 flex items-center justify-center
//         bg-black/40 text-white rounded-full backdrop-blur-md opacity-0
//         group-hover:opacity-100 transition-all"
//         >
//           <Hand className="w-3 h-3" />
//         </div>
//       </div>

//       {/* Image Number */}
//       <div
//         className="absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold
//       bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center
//       backdrop-blur-sm"
//       >
//         {index + 1}
//       </div>

//       {/* Delete Icon */}
//       <button
//         onClick={() => onDelete(image.id)}
//         className="absolute -top-2 -right-2 z-30 h-7 w-7 rounded-full bg-red-500 text-white
//         flex items-center justify-center hover:bg-red-600 transition shadow-lg"
//         title="حذف"
//       >
//         <Trash2 className="w-3.5 h-3.5" />
//       </button>

//       {/* Image Box */}
//       <div
//         className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl relative overflow-hidden
//         border border-white/20 backdrop-blur-md shadow-md"
//         style={{ backgroundImage: `url("${image.url}")` }}
//       >
//         {/* Hover overlay */}
//         <div
//           className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
//         transition-opacity flex items-center justify-center"
//         >
//           <div className="flex flex-col gap-2 bg-black/30 backdrop-blur-lg rounded-xl p-2">
//             {/* Move Up */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onMove(image.id, "up");
//               }}
//               disabled={!canMoveUp}
//               className="h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center
//               hover:bg-white/30 transition disabled:opacity-30 disabled:cursor-not-allowed"
//             >
//               <ArrowUp className="w-4 h-4" />
//             </button>

//             {/* Move Down */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onMove(image.id, "down");
//               }}
//               disabled={!canMoveDown}
//               className="h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center
//               hover:bg-white/30 transition disabled:opacity-30 disabled:cursor-not-allowed"
//             >
//               <ArrowDown className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Image Name */}
//       <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate">
//         {image.name}
//       </div>
//     </div>
//   );
// }
//components/ImagePreview.tsx
"use client";

import { ImageFile } from "@/types";
import { ArrowUp, ArrowDown, Trash2, Hand, GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ImagePreviewProps {
  image: ImageFile;
  index: number;
  onNameChange: (id: string, name: string) => void;
  onDelete: (id: string) => void;
  onMove: (id: string, direction: "up" | "down") => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}

export default function ImagePreview({
  image,
  index,
  onNameChange,
  onDelete,
  onMove,
  canMoveUp,
  canMoveDown,
}: ImagePreviewProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: image.id,
    transition: {
      duration: 150,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
    zIndex: isDragging ? 999 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex flex-col  gap-2 group relative select-none ${
        isDragging
          ? "scale-105 shadow-2xl ring-2 ring-primary/50"
          : "scale-100 hover:shadow-lg"
      } transition-all duration-200 bg-white/5 dark:bg-black/5 rounded-xl p-2 backdrop-blur-sm`}
    >
      {/* Drag Handle - Larger and more accessible on mobile */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-2 left-2 z-20 cursor-grab active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()} // Prevent event bubbling
      >
        <div
          className="h-8 w-8 flex items-center justify-center rounded-full
          bg-black/40 text-white backdrop-blur-md opacity-80 
          hover:opacity-100 hover:bg-black/60 transition-all
          touch-manipulation" // Improve touch behavior
        >
          <Hand className="w-4 h-4" />
        </div>
      </div>

      {/* Image Number */}
      <div
        className="absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold
        bg-black/60 text-white rounded-full h-6 w-6 flex items-center justify-center 
        backdrop-blur-sm"
      >
        {index + 1}
      </div>

      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(image.id);
        }}
        className="absolute -top-2 -right-2 z-30 h-7 w-7 rounded-full bg-red-500 text-white 
        flex items-center justify-center hover:bg-red-600 transition-all shadow-lg
        active:scale-95"
        title="حذف"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>

      {/* Image Container */}
      <div
        className="w-full aspect-[4/3] min-h-[150px] min-w- bg-center bg-no-repeat bg-cover rounded-lg relative overflow-hidden
        border border-white/20 shadow-md transition-all group-hover:shadow-lg"
        style={{ backgroundImage: `url("${image.url}")` }}
      >
        {/* Hover overlay with move buttons */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
          opacity-0 group-hover:opacity-100 group-active:opacity-100
          transition-opacity flex items-end justify-center pb-3"
        >
          <div className="flex gap-2 bg-black/50 backdrop-blur-lg rounded-xl p-2">
            {/* Move Up Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMove(image.id, "up");
              }}
              disabled={!canMoveUp}
              className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center
              hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed
              active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

            {/* Move Down Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMove(image.id, "down");
              }}
              disabled={!canMoveDown}
              className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center
              hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed
              active:scale-95"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Name */}
      <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate px-1">
        {image.name}
      </div>
    </div>
  );
}
