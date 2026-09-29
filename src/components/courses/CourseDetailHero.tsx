import { FiShare2, FiBarChart2, FiUsers } from "react-icons/fi";
import { MdStar } from "react-icons/md";
import { gridBackgroundStyle } from "@/lib/styles";
import { Container } from "@/components/ui/Container";
import { AppImage } from "@/components/ui/AppImage";
import { CourseMedia } from "@/components/courses/CourseMedia";
import { CourseSidebar } from "@/components/courses/CourseSidebar";
import type { CourseDetail } from "@/lib/get-course-detail";

export function CourseDetailHero({ course }: { course: CourseDetail }) {
  return (
    <section
      className="relative bg-brand-blue pt-28 pb-10 lg:pt-[84px]"
      style={gridBackgroundStyle}
    >
      <Container>
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              {course.title}
            </h1>
            <p className="mt-2 text-sm text-white/70">{course.subtitle}</p>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-white/80">
                by <span className="font-medium text-white">{course.author}</span>
              </span>
            </div>
          </div>

          <button
            type="button"
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-brand-lime px-4 py-2 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
          >
            <FiShare2 className="h-4 w-4" />
            Share
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700">
            <FiBarChart2 className="h-4 w-4 text-brand-blue" />
            {course.level}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700">
            <MdStar className="h-4 w-4 text-brand-blue" />
            {course.rating.toFixed(1)} ({Math.max(course.comments - 36, 172)} reviews)
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700">
            <FiUsers className="h-4 w-4 text-brand-blue" />
            {course.extraStudents} Students
          </span>
        </div>

        <div className="relative mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="lg:w-[calc(100%-394px)]">
            <CourseMedia course={course} />
          </div>
          <div className="lg:absolute lg:top-0 lg:right-0 lg:w-90">
            <CourseSidebar course={course} />
          </div>
        </div>
      </Container>
    </section>
  );
}
