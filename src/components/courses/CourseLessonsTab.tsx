import { FiVideo, FiLock } from "react-icons/fi";
import type { CourseDetail } from "@/lib/get-course-detail";

export function CourseLessonsTab({ course }: { course: CourseDetail }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold text-zinc-900">Explore the Modules</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Unlock a wealth of bite-sized content as you dive deep into module lessons, providing you with real insights and hands-on experience.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-zinc-900">Lesson List</h2>
        <div className="mt-6 flex flex-col gap-6">
          {course.lessonsList.map((lesson, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lime">
                {lesson.locked ? (
                  <FiLock className="h-6 w-6 text-zinc-900" />
                ) : (
                  <FiVideo className="h-6 w-6 text-zinc-900" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">
                  Module {i + 1}: {lesson.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Dive into the essentials and master the core concepts with this comprehensive module designed for your success.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-zinc-900">Lesson Content</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-zinc-900">Lesson Progress Tracking</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Witness your growth as you complete lessons with an intuitive progress tracking feature guiding you through your learning journey.
        </p>
        <div className="mt-4 rounded-xl border border-zinc-200 p-6">
          <span className="text-xs font-medium text-zinc-500">Learning Progress</span>
          <div className="mt-1 text-3xl font-bold text-zinc-900">55%</div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
            <div className="h-full w-[55%] rounded-full bg-brand-lime" />
          </div>
        </div>
      </div>
    </div>
  );
}
