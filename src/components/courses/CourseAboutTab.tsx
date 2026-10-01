import { FiCheck } from "react-icons/fi";
import { CourseSneakPeek } from "@/components/courses/CourseSneakPeek";
import type { CourseDetail } from "@/lib/get-course-detail";

export function CourseAboutTab({ course }: { course: CourseDetail }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-lg font-bold text-zinc-900">Description</h2>
        <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-600">
          {course.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <CourseSneakPeek images={course.sneakPeek} />

      <div>
        <h2 className="text-lg font-bold text-zinc-900">Key Points</h2>
        <ul className="mt-4 space-y-2.5">
          {course.keyPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2.5 text-sm text-zinc-700"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-lime">
                <FiCheck className="h-3 w-3 text-zinc-900" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
