"use client";

import { useState } from "react";
import { MdStar } from "react-icons/md";
import { AppImage } from "@/components/ui/AppImage";
import type { CourseDetail } from "@/lib/get-course-detail";

export function CourseReviewsTab({ course }: { course: CourseDetail }) {
  const [activeRating, setActiveRating] = useState("All rating");

  return (
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
  );
}
