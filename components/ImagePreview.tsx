// //components/ImagePreview.tsx
// "use client";

// import { ImageFile } from "@/types";
// import { ArrowUp, ArrowDown, Trash2, Hand, GripVertical } from "lucide-react";
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
//   } = useSortable({
//     id: image.id,
//     transition: {
//       duration: 150,
//       easing: "cubic-bezier(0.25, 1, 0.5, 1)",
//     },
//   });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.6 : 1,
//     zIndex: isDragging ? 999 : 1,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className={`flex flex-col  gap-2 group relative select-none ${
//         isDragging
//           ? "scale-105 shadow-2xl ring-2 ring-primary/50"
//           : "scale-100 hover:shadow-lg"
//       } transition-all duration-200 bg-white/5 dark:bg-black/5 rounded-xl p-2 backdrop-blur-sm`}
//     >
//       {/* Drag Handle - Larger and more accessible on mobile */}
//       <div
//         {...attributes}
//         {...listeners}
//         className="absolute top-2 left-2 z-20 cursor-grab active:cursor-grabbing"
//         onClick={(e) => e.stopPropagation()} // Prevent event bubbling
//       >
//         <div
//           className="h-8 w-8 flex items-center justify-center rounded-full
//           bg-black/40 text-white backdrop-blur-md opacity-80
//           hover:opacity-100 hover:bg-black/60 transition-all
//           touch-manipulation" // Improve touch behavior
//         >
//           <Hand className="w-4 h-4" />
//         </div>
//       </div>

//       {/* Image Number */}
//       <div
//         className="absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold
//         bg-black/60 text-white rounded-full h-6 w-6 flex items-center justify-center
//         backdrop-blur-sm"
//       >
//         {index + 1}
//       </div>

//       {/* Delete Button */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           onDelete(image.id);
//         }}
//         className="absolute -top-2 -right-2 z-30 h-7 w-7 rounded-full bg-red-500 text-white
//         flex items-center justify-center hover:bg-red-600 transition-all shadow-lg
//         active:scale-95"
//         title="حذف"
//       >
//         <Trash2 className="w-3.5 h-3.5" />
//       </button>

//       {/* Image Container */}
//       <div
//         className="w-full aspect-[4/3] min-h-[150px] min-w- bg-center bg-no-repeat bg-cover rounded-lg relative overflow-hidden
//         border border-white/20 shadow-md transition-all group-hover:shadow-lg"
//         style={{ backgroundImage: `url("${image.url}")` }}
//       >
//         {/* Hover overlay with move buttons */}
//         <div
//           className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
//           opacity-0 group-hover:opacity-100 group-active:opacity-100
//           transition-opacity flex items-end justify-center pb-3"
//         >
//           <div className="flex gap-2 bg-black/50 backdrop-blur-lg rounded-xl p-2">
//             {/* Move Up Button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onMove(image.id, "up");
//               }}
//               disabled={!canMoveUp}
//               className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center
//               hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed
//               active:scale-95"
//             >
//               <ArrowUp className="w-4 h-4" />
//             </button>

//             {/* Move Down Button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onMove(image.id, "down");
//               }}
//               disabled={!canMoveDown}
//               className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center
//               hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed
//               active:scale-95"
//             >
//               <ArrowDown className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Image Name */}
//       <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate px-1">
//         {image.name}
//       </div>
//     </div>
//   );
// }//components/ImagePreview.tsx
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
      className={`flex flex-col gap-2 group relative select-none ${
        isDragging
          ? "scale-105 shadow-2xl ring-2 ring-primary/50 rotate-2"
          : "scale-100 hover:shadow-lg"
      } transition-all duration-200 bg-white/10 dark:bg-black/10  rounded-xl p-2 backdrop-blur-sm border border-white/10 min-w-[120px]`}
    >
      {/* Drag Handle - بهبود یافته برای موبایل */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-2 left-2 z-20 cursor-grab active:cursor-grabbing touch-manipulation"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="h-9 w-9 flex items-center justify-center rounded-full
          bg-black/60 text-white backdrop-blur-md opacity-90 
          hover:opacity-100 hover:bg-black/80 transition-all
          active:scale-95 shadow-lg border border-white/20"
        >
          <Hand className="w-4 h-4" />
        </div>
      </div>

      {/* Image Number */}
      <div
        className="absolute top-2 right-2 z-20 text-xs font-bold
        bg-black/70 text-white rounded-full h-6 w-6 flex items-center justify-center 
        backdrop-blur-sm border border-white/20"
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
        active:scale-95 border border-white/20"
        title="حذف"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>

      {/* Image Container - درگ اند دراپ روی کل کادر */}
      <div
        {...attributes}
        {...listeners}
        className="w-full aspect-[4/3] min-h-[120px]  bg-center bg-no-repeat bg-cover 
        rounded-lg relative overflow-hidden border-2 border-white/20 shadow-md 
        transition-all group-hover:shadow-lg cursor-grab active:cursor-grabbing
        active:border-primary/40 active:scale-95 touch-manipulation"
        style={{ backgroundImage: `url("${image.url}")` }}
      >
        {/* Overlay with move buttons - همیشه قابل مشاهده در موبایل */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
          opacity-100 sm:opacity-0 sm:group-hover:opacity-100
          transition-opacity flex items-end justify-center pb-2"
        >
          <div className="flex gap-1 bg-black/60 backdrop-blur-lg rounded-xl z-10 p-1 md:mb-2">
            {/* Move Up Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMove(image.id, "up");
              }}
              disabled={!canMoveUp}
              className="h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center
              hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed
              active:scale-95 border border-white/20"
              title="جابجایی به بالا"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            {/* Move Down Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMove(image.id, "down");
              }}
              disabled={!canMoveDown}
              className="h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center
              hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed
              active:scale-95 border border-white/20"
              title="جابجایی به پایین"
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile touch indicators */}
        {/* <div className="sm:hidden absolute inset-0 flex items-center justify-center">
          <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm opacity-70">
            لمس و نگه دارید
          </div>
        </div> */}
      </div>

      {/* Image Name */}
      <div className="text-center text-xs text-gray-700 dark:text-gray-300 truncate px-1 font-medium">
        {image.name}
      </div>

      {/* Mobile instructions */}
      {/* <div className="sm:hidden text-[10px] text-gray-500 dark:text-gray-400 text-center mt-1">
        برای جابجایی، عکس را نگه دارید
      </div> */}
    </div>
  );
}
