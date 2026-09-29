import { CourseCard, type Course } from "@/components/courses/CourseCard";
import { AppImage } from "@/components/ui/AppImage";

const uniqueAvatars = [
  "/avatars/avatar-1.png",
  "/avatars/avatar-2.png",
  "/avatars/avatar-3.png",
  "/avatars/avatar-4.png",
];

const badgeAvatars = [
  "/avatars/avatar-1.png",
  "/avatars/avatar-2.png",
  "/avatars/avatar-3.png",
  "/avatars/avatar-4.png",
  "/avatars/avatar-1.png",
  "/avatars/avatar-2.png",
  "/avatars/avatar-3.png",
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
    avatars: uniqueAvatars,
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
    avatars: uniqueAvatars,
    extraStudents: 26,
  },
];

export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative h-165 w-full max-w-lg select-none ${className ?? ""}`}
    >
      {/* right card, raised above the other card */}
      <div className="absolute -top-15.5 left-36.5 z-10 w-93.25">
        <CourseCard course={showcaseCourses[0]} badgePosition="top" />
      </div>

      {/* upper card, brought down below the right card */}
      <div className="absolute top-16 left-5 w-93.25">
        <CourseCard course={showcaseCourses[1]} badgePosition="top" />
      </div>

      <span className="absolute top-30 -left-4 h-20 w-14 rounded-full border-8 border-brand-lime" />

      {/* 3D-style triangle, 20px below the upper card */}
      <div className="absolute top-110.5 left-2 h-24 w-28">
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 50% 100%)",
            background: "var(--brand-lime)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(50% 0%, 100% 100%, 50% 100%)",
            background: "#a3c400",
          }}
        />
      </div>

      <div className="absolute right-0 bottom-24.5 rounded-xl bg-brand-lime px-10.25 py-6.75 shadow-lg">
        <p className="text-base font-bold text-zinc-900">Happy Students</p>
        <p className="mt-0.5 flex items-center gap-1 text-sm text-zinc-700">
          4.5
          <span className="text-blue-600">★</span>
          <span className="text-zinc-600">(240)</span>
        </p>
        <div className="mt-2 flex items-center -space-x-2">
          {badgeAvatars.map((src, i) => (
            <AppImage
              key={i}
              src={src}
              alt=""
              width={43}
              height={43}
              className="h-10.75 w-10.75 rounded-full border border-white"
            />
          ))}
          <span className="flex h-10.75 w-10.75 items-center justify-center rounded-full border border-white bg-zinc-900 text-[10px] font-semibold text-white">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}
