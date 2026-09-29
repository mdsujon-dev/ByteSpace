import { CourseCard, type Course } from "@/components/courses/CourseCard";
import { AppImage } from "@/components/ui/AppImage";

const showcaseAvatars = [
  "/avatars/avatar-1.png",
  "/avatars/avatar-2.png",
  "/avatars/avatar-3.png",
  "/avatars/avatar-4.png",
];

const showcaseCourses: Course[] = [
  {
    id: "showcase-1",
    title: "Build Digital Asset",
    author: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    pricingLabel: "lifetime",
    thumbnail: "/courses/course-4.jpg",
    avatars: showcaseAvatars,
    extraStudents: 26,
  },
  {
    id: "showcase-2",
    title: "the Power of Big Data",
    author: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    pricingLabel: "lifetime",
    thumbnail: "/courses/course-1.jpg",
    avatars: showcaseAvatars,
    extraStudents: 26,
  },
];

export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative h-80 w-full max-w-sm select-none ${className ?? ""}`}
    >
      <div className="absolute top-16 left-0 w-72 origin-top-left -rotate-6 scale-[0.55] opacity-90">
        <CourseCard course={showcaseCourses[0]} />
      </div>

      <div className="absolute top-0 left-16 w-72 origin-top-left -rotate-3 scale-[0.62]">
        <CourseCard course={showcaseCourses[1]} />
      </div>

      <span className="absolute top-10 -left-3 h-14 w-10 -rotate-12 rounded-full border-[6px] border-brand-lime" />

      <span className="absolute -bottom-3 left-2 h-0 w-0 rotate-[8deg] border-x-18 border-t-30 border-x-transparent border-t-brand-lime" />

      <div className="absolute right-0 bottom-2 rounded-xl bg-brand-lime px-3 py-2.5 shadow-lg">
        <p className="text-sm font-bold text-zinc-900">Happy Students</p>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-zinc-700">
          4.5
          <span className="text-blue-600">★</span>
          <span className="text-zinc-600">(240)</span>
        </p>
        <div className="mt-1.5 flex items-center -space-x-2">
          {showcaseAvatars.map((src) => (
            <AppImage
              key={src}
              src={src}
              alt=""
              width={22}
              height={22}
              className="h-5.5 w-5.5 rounded-full border border-white"
            />
          ))}
          <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-white bg-zinc-900 text-[9px] font-semibold text-white">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}
