import { FiPlay } from "react-icons/fi";
import { AppImage } from "@/components/ui/AppImage";
import type { CourseDetail } from "@/lib/get-course-detail";

export function CourseMedia({ course }: { course: CourseDetail }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-zinc-100 shadow-xl">
      <AppImage
        src={course.thumbnail}
        alt={course.title}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
      />
      <button
        type="button"
        aria-label="Play preview"
        className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-blue shadow-lg transition-transform hover:scale-105"
      >
        <FiPlay className="ml-1 h-6 w-6" />
      </button>
    </div>
  );
}
