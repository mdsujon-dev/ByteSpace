import { Container } from "@/components/ui/Container";
import { DecorShape } from "@/components/ui/DecorShape";
import { DecorStage } from "@/components/ui/DecorStage";
import { gridBackgroundStyle } from "@/lib/styles";
import Link from "next/link";

export function CreatorCTA() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue py-24"
      style={gridBackgroundStyle}
    >
      {/* Decorative floating shapes. The base classes are the tuned desktop layout; below lg (max-lg:) the
          text spans the full width, so the shapes shrink into the four corners and the side ones are hidden. */}
      {/* Phones show only the background and text */}
      <DecorStage className="max-md:hidden">
        {/* top-left, bleeding off the corner */}
        <DecorShape
          src="/auth/squiggle.png"
          className="absolute -top-[78px] -left-[62px] h-[330px] w-[230px] -rotate-[100deg] max-lg:-top-12 max-lg:-left-10 max-lg:h-36 max-lg:w-24"
        />
        {/* beside the first heading line */}
        <DecorShape
          src="/auth/squiggle.png"
          className="absolute top-[6%] left-[14%] h-28 w-24 -rotate-12 max-lg:hidden"
        />
        {/* top-right, bleeding off the corner */}
        <DecorShape
          src="/auth/triangle.png"
          className="absolute top-[60px] right-[230px] h-[240px] w-[210px] -rotate-[100deg] max-lg:top-2 max-lg:right-4 max-lg:h-20 max-lg:w-16"
        />
        {/* right edge, below the triangle */}
        <DecorShape
          src="/home/white.png"
          className="absolute top-[12%] -right-[54px] h-[338px] w-[178px] rotate-12 max-lg:hidden"
        />
        {/* left edge, mid-height */}
        <DecorShape
          src="/auth/triangle.png"
          tint="white"
          className="absolute top-[38%] -left-[62px] h-[264px] w-36 -rotate-30 max-lg:hidden"
        />
        {/* bottom-left, bleeding off the bottom edge */}
        <DecorShape
          src="/auth/ring.png"
          className="absolute bottom-[-74px] left-[5%] h-52 w-[280px] max-lg:-bottom-10 max-lg:left-2 max-lg:h-24 max-lg:w-32"
        />
        {/* right edge, beside the paragraph/button */}
        <DecorShape
          src="/auth/squiggle.png"
          tint="lime"
          className="absolute top-[42%] right-[4%] h-56 w-44 translate-y-[150px] -rotate-6 max-lg:top-auto max-lg:-bottom-6 max-lg:right-2 max-lg:h-24 max-lg:w-20 max-lg:translate-y-0"
        />
      </DecorStage>

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Unlock Your Potential as a<br />
            Creator with ByteSpace
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/80 md:text-base md:leading-8">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <div className="mt-10">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-brand-lime px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
            >
              Join as Creator
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
