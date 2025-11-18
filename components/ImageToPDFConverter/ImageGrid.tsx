// components/ImageToPDFConverter/ImageGrid.tsx
import { useConverterStore } from "@/stores/useConverterStore";
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
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { ImagePreview } from "../ImagePreview";
import { Plus } from "lucide-react";

interface ImageGridProps {
  onImagePreview: (image: ImageFile) => void;
}

export const ImageGrid = ({ onImagePreview }: ImageGridProps) => {
  const { images, reorderImages, deleteImage, updateImage, moveImage } =
    useConverterStore();

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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = images.findIndex((item) => item.id === active.id);
      const newIndex = images.findIndex((item) => item.id === over.id);
      reorderImages(oldIndex, newIndex);
    }
  };

  const handleNameChange = (id: string, name: string) => {
    updateImage(id, { name });
  };

  const handleDelete = (id: string) => {
    deleteImage(id);
  };

  const handleMove = (id: string, direction: "up" | "down") => {
    moveImage(id, direction);
  };

  return (
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
          <div
            className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 
            rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
            transition-all duration-300"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {images.map((img, i) => (
                <ImagePreview
                  key={img.id}
                  image={img}
                  index={i}
                  onNameChange={handleNameChange}
                  onDelete={handleDelete}
                  onMove={handleMove}
                  onPreview={onImagePreview}
                  canMoveUp={i > 0}
                  canMoveDown={i < images.length - 1}
                />
              ))}
              <button
                onClick={() => document.getElementById("file-input")?.click()}
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
        </SortableContext>
      </DndContext>

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
      </div>
    </div>
  );
};
