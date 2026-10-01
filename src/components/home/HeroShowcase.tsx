import type { CSSProperties } from "react";
import { AppImage } from "@/components/ui/AppImage";
import { DecorShape } from "@/components/ui/DecorShape";
import { DecorStage } from "@/components/ui/DecorStage";
import {
  HappyStudentsCard,
  type StudentAvatar,
} from "@/components/ui/HappyStudentsCard";

// The last two are full-body photos, so they're scaled up from the top to frame the face.
const studentAvatars: StudentAvatar[] = [
  { src: "/avatars/avatar-1.png" },
  { src: "/avatars/avatar-2.png" },
  { src: "/avatars/avatar-3.png" },
  { src: "/avatars/avatar-4.png" },
  { src: "/avatars/purepearl.png" },
  { src: "/home/female.png", zoomClass: "origin-[50%_12%] scale-[2.6]" },
  { src: "/home/male.png", zoomClass: "origin-[50%_22%] scale-[3]" },
];

const cardClass =
  "absolute z-20 rounded-xl bg-white px-2.5 py-2 text-left shadow-[0_12px_32px_rgba(0,0,0,0.18)] md:rounded-2xl md:px-4 md:py-3";

const domeCutout =
  "radial-gradient(ellipse var(--dome-w) var(--dome-h) at 50% 100%, transparent 99%, #000 100%)";

const domeCutoutMask: CSSProperties = {
  maskImage: domeCutout,
  WebkitMaskImage: domeCutout,
};

/** Lower half of the home hero: student photo on a lime half-circle, with floating stat cards. */
export function HeroShowcase() {
  return (
    <div className="relative h-[340px] sm:h-[420px] lg:h-[500px]">
      {/* Side shapes; z-10 keeps them above the lime dome, while the photo (later, also z-10) stays on top */}
      <DecorStage className="z-10">
        <DecorShape
          src="/auth/ring.png"
          tint="white"
          className="absolute bottom-[4%] left-[60px] hidden h-44 w-40 rotate-12 lg:block lg:h-56 lg:w-52"
        />
        <DecorShape
          src="/auth/squiggle.png"
          tint="white"
          className="absolute bottom-[8%] right-[54px] hidden h-48 w-36 origin-top rotate-[6deg] lg:block lg:h-64 lg:w-48"
        />
      </DecorStage>

      <div className="relative mx-auto h-full max-w-[1000px]">
        {/* Lime dome, with a smaller dome cut out of its bottom-center so the blue shows behind the student.
            The mask layer spans the viewport width and ends at the showcase bottom, so the cutout sits on that edge. */}
        <div
          className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 [--dome-h:130px] [--dome-w:180px] sm:[--dome-h:160px] sm:[--dome-w:220px] lg:[--dome-h:100px] lg:[--dome-w:200px]"
          style={domeCutoutMask}
        >
          <div className="absolute top-10 left-1/2 h-[560px] w-[700px] -translate-x-1/2 rounded-[50%] bg-brand-lime sm:h-[720px] sm:w-[920px] lg:top-12 lg:h-[1300px] lg:w-[min(1150px,calc(100vw-50px))]" />
        </div>

        {/* Student photo, anchored to the bottom edge of the showcase */}
        <div className="absolute bottom-0 left-1/2 z-10 aspect-[516/483] w-[330px] -translate-x-1/2 sm:w-[430px] lg:w-[540px]">
          <AppImage
            src="/home/male.png"
            alt="Smiling student with headphones holding a laptop"
            fill
            fit="contain"
            sizes="(min-width: 1024px) 540px, (min-width: 640px) 430px, 330px"
            priority
          />
        </div>

        {/* Course card */}
        <div
          className={`${cardClass} top-[22%] left-[2%] md:top-[18%] md:left-[12%] lg:left-[16%]`}
        >
          <p className="text-[11px] font-semibold text-zinc-900 md:text-sm">
            UI/UX Design
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[8px] text-zinc-400 md:mt-1 md:gap-2 md:text-[11px]">
            240 Courses
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            1000+ Students
          </p>
        </div>

        {/* Learning progress card */}
        <div
          className={`${cardClass} top-[30%] right-[2%] w-28 md:top-[26%] md:right-[4%] md:w-44 lg:right-[12%] lg:w-48`}
        >
          <p className="text-[9px] font-medium text-zinc-600 md:text-xs">
            Learning Progress
          </p>
          <p className="mt-0.5 text-xl font-bold text-zinc-900 md:mt-1 md:text-3xl">
            55%
          </p>
          <div className="mt-1.5 h-1 w-full rounded-full bg-zinc-100 md:mt-2 md:h-1.5">
            <div className="h-full w-[55%] rounded-full bg-brand-lime" />
          </div>
        </div>

        {/* Happy students card */}
        <HappyStudentsCard
          variant="white"
          compactOnMobile
          avatars={studentAvatars}
          rating={4.9}
          reviews={240}
          className="absolute bottom-[8%] left-[2%] z-20 text-left md:bottom-[12%] md:left-[4%] lg:left-[10%]"
        />
      </div>
    </div>
  );
}
