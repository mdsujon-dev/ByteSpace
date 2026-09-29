"use client";

import { useState } from "react";
import { FiCheck, FiVideo } from "react-icons/fi";
import { MdStar } from "react-icons/md";
import { AppImage } from "@/components/ui/AppImage";
import { CourseSneakPeek } from "@/components/courses/CourseSneakPeek";
import type { CourseDetail } from "@/lib/get-course-detail";

const tabs = ["About", "Lessons", "Reviews"] as const;
type Tab = (typeof tabs)[number];

export function CourseTabs({ course }: { course: CourseDetail }) {
  const [active, setActive] = useState<Tab>("About");
  const [activeRating, setActiveRating] = useState("All rating");

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
                      <FiVideo className="h-6 w-6 text-zinc-900" />
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
        )}

        {active === "Reviews" && (
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-zinc-900">What Learners Are Saying</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Discover what our students have to say about their experience with ByteSpace courses. Real feedback from individuals who have embarked on this transformative journey.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 rounded-xl border border-zinc-200 p-6">
              <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-lime">
                <span className="text-sm font-medium text-zinc-700">Ratings</span>
                <span className="text-4xl font-bold text-zinc-900">{course.rating.toFixed(1)}</span>
              </div>
              <div className="flex-1 w-full space-y-3">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-4">
                    <div className="h-1.5 flex-1 rounded-full bg-zinc-100 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-brand-lime" 
                        style={{ width: star === 5 ? '75%' : star === 4 ? '15%' : '2%' }}
                      />
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <MdStar key={i} className={`h-3 w-3 ${i < star ? 'text-zinc-700' : 'text-zinc-200'}`} />
                      ))}
                    </div>
                    <span className="w-6 text-right text-xs text-zinc-500">
                      {star === 5 ? 120 : star === 4 ? 13 : star === 3 ? 4 : 0}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900">Individual Reviews</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {["All rating", "5", "4", "3", "2", "1"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveRating(filter)}
                    className={`cursor-pointer flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      activeRating === filter ? "bg-brand-lime text-zinc-900" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                    }`}
                  >
                    {filter !== "All rating" && <MdStar className="h-4 w-4" />}
                    {filter}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {course.reviews
                  .filter(
                    (review) =>
                      activeRating === "All rating" ||
                      Math.round(review.rating).toString() === activeRating
                  )
                  .map((review, i) => (
                  <div key={i} className="rounded-xl border border-zinc-200 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <AppImage
                          src={review.avatar}
                          alt=""
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full"
                        />
                        <div>
                          <div className="font-semibold text-zinc-900">{review.author}</div>
                          <div className="text-xs text-zinc-500">UI/UX Designer</div>
                        </div>
                      </div>
                      <div className="text-xs text-zinc-400">1 year ago</div>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-zinc-700">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <MdStar key={starIdx} className={`h-4 w-4 ${starIdx < Math.round(review.rating) ? 'text-zinc-900' : 'text-zinc-200'}`} />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
