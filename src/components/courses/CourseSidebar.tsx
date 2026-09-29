import { FiLock, FiPlayCircle, FiCheck } from "react-icons/fi";
import type { CourseDetail } from "@/lib/get-course-detail";

const includes = [
  "Certificate upon completion",
  "Learn at your own pace",
  "Full Lifetime Access",
];

export function CourseSidebar({ course }: { course: CourseDetail }) {
  return (
    <div className="rounded-3xl border border-[#CED0D3] bg-white p-6 shadow-xl">
      <h2 className="text-lg font-bold text-zinc-900">
        {course.lessons} Lessons ({course.duration})
      </h2>

      <ul className="mt-4 max-h-72 space-y-1 overflow-y-auto">
        {course.lessonsList.map((lesson, i) => (
          <li
            key={i}
            className="flex items-center justify-between gap-3 border-b border-zinc-100 py-2.5 last:border-0"
          >
            <span className="flex min-w-0 items-center gap-2.5 text-sm text-zinc-700">
              {lesson.locked ? (
                <FiLock className="h-4 w-4 shrink-0 text-zinc-400" />
              ) : (
                <FiPlayCircle className="h-4 w-4 shrink-0 text-brand-blue" />
              )}
              <span className="truncate">{lesson.title}</span>
            </span>
            <span className="shrink-0 text-xs text-zinc-400">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-zinc-100 pt-6">
        <p className="text-2xl font-bold text-brand-blue">
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
        <p className="mt-1 text-xs text-zinc-500">Free Trial available</p>

        <button
          type="button"
          className="mt-4 w-full rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
        >
          Enroll Now
        </button>

        <div className="mt-6">
          <p className="text-sm font-semibold text-zinc-900">
            This course includes
          </p>
          <ul className="mt-2 space-y-2">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-zinc-600"
              >
                <FiCheck className="h-4 w-4 shrink-0 text-brand-lime" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
