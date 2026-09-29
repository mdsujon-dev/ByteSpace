import Link from "next/link";
import { MdStar, MdSignalCellularAlt } from "react-icons/md";
import { AppImage } from "@/components/ui/AppImage";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  title: string;
  author: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: CourseLevel;
  price: number;
  pricingLabel: string;
  thumbnail: string;
  avatars: string[];
  extraStudents: number;
};

type CourseCardProps = {
  course: Course;
  badgePosition?: "top" | "bottom";
};

export function CourseCard({ course, badgePosition = "bottom" }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block rounded-3xl border border-[#CED0D3] bg-white p-3"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-zinc-100">
        <AppImage
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div
          className={`absolute inset-x-3 flex flex-wrap gap-2 ${
            badgePosition === "top" ? "top-3" : "bottom-3"
          }`}
        >
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur-sm">
            {course.lessons} Lessons
          </span>
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur-sm">
            {course.duration}
          </span>
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur-sm">
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-base font-bold text-zinc-900">
            {course.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-sm text-zinc-500">
            {course.rating.toFixed(1)}
            <MdStar className="text-zinc-300" />
          </span>
        </div>
        <p className="mt-1 text-sm text-zinc-500">
          by <span className="text-brand-blue">{course.author}</span>
        </p>

        <div className="mt-4 flex items-center gap-4">
          <span className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700">
            <MdSignalCellularAlt className="text-zinc-500" />
            {course.level}
          </span>
          <div className="flex items-center -space-x-2">
            {course.avatars.map((avatar, i) => (
              <AppImage
                key={i}
                src={avatar}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border-2 border-white"
              />
            ))}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-lime text-[10px] font-semibold text-zinc-900">
              {course.extraStudents}+
            </span>
          </div>
        </div>

        <p className="mt-4 text-lg font-bold text-brand-blue">
          {course.price === 0 ? (
            "Free"
          ) : (
            <>
              ${course.price}
              <span className="text-sm font-normal text-zinc-500">
                /{course.pricingLabel}
              </span>
            </>
          )}
        </p>
      </div>
    </Link>
  );
}
