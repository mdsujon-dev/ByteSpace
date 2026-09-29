"use client";

import { useState } from "react";
import type { CourseDetail } from "@/lib/get-course-detail";
import { CourseAboutTab } from "@/components/courses/CourseAboutTab";
import { CourseLessonsTab } from "@/components/courses/CourseLessonsTab";
import { CourseReviewsTab } from "@/components/courses/CourseReviewsTab";

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
            className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
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
        {active === "About" && <CourseAboutTab course={course} />}
        {active === "Lessons" && <CourseLessonsTab course={course} />}
        {active === "Reviews" && <CourseReviewsTab course={course} />}
      </div>
    </div>
  );
}
