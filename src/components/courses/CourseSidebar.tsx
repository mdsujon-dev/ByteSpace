import Link from "next/link";
import {
  FiBookOpen,
  FiVideo,
  FiAward,
  FiHeadphones,
} from "react-icons/fi";
import { AppImage } from "@/components/ui/AppImage";
import type { CourseDetail } from "@/lib/get-course-detail";

const includes = [
  { icon: FiBookOpen, label: "Learning Resources" },
  { icon: FiVideo, label: "Quality Lesson Videos" },
  { icon: FiAward, label: "Certificate of Completion" },
  { icon: FiHeadphones, label: "Private Consultation" },
];

const cta = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

export function CourseSidebar({ course }: { course: CourseDetail }) {
  const preview = course.lessonsList.slice(0, 3);
  const remaining = course.lessonsList.length - preview.length;

  return (
    <div className="rounded-3xl border border-[#CED0D3] bg-white p-6 shadow-xl">
      <h2 className="text-lg font-bold text-zinc-900">
        {course.lessons} Lessons ({course.duration})
      </h2>

      <ul className="mt-4 space-y-5">
        {preview.map((lesson, i) => (
          <li key={i} className="flex items-start justify-between gap-3">
            <span className="flex min-w-0 items-start gap-2.5 text-sm text-zinc-700">
              <span className="shrink-0 text-xs font-semibold text-zinc-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              {lesson.title}
            </span>
            <span className="shrink-0 text-xs font-medium text-brand-blue">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ul>

      {remaining > 0 && (
        <p className="mt-3 text-xs text-zinc-400">{remaining} more videos</p>
      )}

      <p className="mt-6 text-sm font-medium text-zinc-900">{cta}</p>

      <p className="mt-4 text-2xl font-bold text-brand-blue">
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

      <button
        type="button"
        className="mt-4 w-full rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
      >
        Enroll Now
      </button>

      <div className="mt-6">
        <p className="text-sm font-semibold text-zinc-900">
          This course include
        </p>
        <ul className="mt-2 space-y-2.5">
          {includes.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-sm text-zinc-600"
            >
              <Icon className="h-4 w-4 shrink-0 text-brand-blue" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-6">
        <AppImage
          src={course.avatars[0]}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            {course.author}
          </p>
          <p className="text-xs text-zinc-500">{course.authorRole}</p>
        </div>
      </div>

      <p className="mt-4 text-sm font-medium text-zinc-900">{cta}</p>

      <Link
        href="/creators"
        className="mt-2 inline-block text-sm font-medium text-brand-blue hover:underline"
      >
        See Full Profile
      </Link>
    </div>
  );
}
