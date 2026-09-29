"use client";

import { useState } from "react";
import { FiCheck, FiLock, FiPlayCircle } from "react-icons/fi";
import { MdStar } from "react-icons/md";
import { AppImage } from "@/components/ui/AppImage";
import { CourseSneakPeek } from "@/components/courses/CourseSneakPeek";
import type { CourseDetail } from "@/lib/get-course-detail";

const tabs = ["About", "Lessons", "Reviews"] as const;
type Tab = (typeof tabs)[number];

export function CourseTabs({ course }: { course: CourseDetail }) {
  const [active, setActive] = useState<Tab>("About");

  return (
    <div>
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === tab
                ? "bg-brand-lime text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {active === "About" && (
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
        )}

        {active === "Lessons" && (
          <ul className="divide-y divide-zinc-100">
            {course.lessonsList.map((lesson, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-3 py-3"
              >
                <span className="flex items-center gap-2.5 text-sm text-zinc-700">
                  {lesson.locked ? (
                    <FiLock className="h-4 w-4 shrink-0 text-zinc-400" />
                  ) : (
                    <FiPlayCircle className="h-4 w-4 shrink-0 text-brand-blue" />
                  )}
                  {lesson.title}
                </span>
                <span className="shrink-0 text-xs text-zinc-400">
                  {lesson.duration}
                </span>
              </li>
            ))}
          </ul>
        )}

        {active === "Reviews" && (
          <ul className="flex flex-col gap-5">
            {course.reviews.map((review, i) => (
              <li key={i} className="flex gap-3">
                <AppImage
                  src={review.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-zinc-900">
                      {review.author}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <MdStar className="text-brand-lime" />
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-600">
                    {review.comment}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
