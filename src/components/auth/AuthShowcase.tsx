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
      <div className="absolute -top-5.5 left-36.5 z-10 w-93.25">
        <CourseCard course={showcaseCourses[0]} />
      </div>

      {/* lower card, flush with the container's left edge */}
      <div className="absolute top-16 left-0 w-93.25">
        <CourseCard course={showcaseCourses[1]} />
      </div>

      <AppImage
        src="/auth/ring.png"
        alt=""
        width={318}
        height={286}
        fit="contain"
        className="absolute top-0 left-18.5 z-20 h-27 w-29"
      />

      <AppImage
        src="/auth/triangle.png"
        alt=""
        width={1277}
        height={1231}
        fit="contain"
        className="absolute top-94.75 left-2 h-40 w-44"
      />

      <div className="absolute right-0 bottom-29.5 rounded-xl bg-brand-lime px-2 py-4 shadow-lg">
        <p className="text-base font-bold text-zinc-900">Happy Students</p>
        <p className="mt-0.5 flex items-center gap-1 text-sm text-zinc-700">
          4.5
          <span className="text-blue-600">★</span>
          <span className="text-zinc-600">(240)</span>
        </p>
        <div className="mt-2 flex items-center -space-x-3">
          {badgeAvatars.map((src, i) => (
            <AppImage
              key={i}
              src={src}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full border border-white object-cover"
            />
          ))}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-zinc-900 text-[11px] font-semibold text-white">
            2K+
          </span>
        </div>
      </div>

      <AppImage
        src="/auth/squiggle.png"
        alt=""
        width={1254}
        height={1254}
        fit="contain"
        className="absolute right-2 bottom-51.5 z-20 h-40 w-38.5 opacity-70"
      />
    </div>
  );
}
