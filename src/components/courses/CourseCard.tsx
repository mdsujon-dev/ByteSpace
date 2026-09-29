import Link from "next/link";
import { StarIcon } from "@/components/icons/StarIcon";

export type Course = {
  id: string;
  title: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  thumbnailGradient: string;
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
    >
      <div
        className={`aspect-4/3 w-full bg-gradient-to-br ${course.thumbnailGradient}`}
      />
      <div className="p-4">
        <span className="text-xs font-medium text-brand-blue">
          {course.category}
        </span>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-zinc-900">
          {course.title}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-zinc-500">
            <StarIcon className="h-3.5 w-3.5 text-brand-lime" />
            <span>{course.rating.toFixed(1)}</span>
            <span className="text-zinc-400">({course.reviews})</span>
          </div>
          <span className="rounded-full bg-brand-lime/15 px-2.5 py-1 text-xs font-semibold text-zinc-900">
            {course.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
