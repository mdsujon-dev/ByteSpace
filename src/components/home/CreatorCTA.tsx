import { Container } from "@/components/ui/Container";
import { DecorShape } from "@/components/ui/DecorShape";
import { gridBackgroundStyle } from "@/lib/styles";
import Link from "next/link";

export function CreatorCTA() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue py-24"
      style={gridBackgroundStyle}
    >
      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* top-left, bleeding off the corner */}
        <DecorShape
          src="/auth/squiggle.png"
          tint="lime"
          className="absolute -top-6 -left-8 h-48 w-32 rotate-12"
        />
        {/* beside the first heading line */}
        <DecorShape
          src="/auth/squiggle.png"
          className="absolute top-[6%] left-[14%] h-28 w-24 -rotate-12"
        />
        {/* top-right, bleeding off the corner */}
        <DecorShape
          src="/auth/triangle.png"
          className="absolute -top-8 -right-10 h-40 w-24 rotate-100"
        />
        {/* right edge, below the triangle */}
        <DecorShape
          src="/auth/triangle.png"
          tint="white"
          className="absolute top-[4%] -right-6 h-64 w-28 rotate-12"
        />
        {/* left edge, mid-height */}
        <DecorShape
          src="/auth/triangle.png"
          tint="white"
          className="absolute top-[38%] -left-8 h-40 w-24 -rotate-90"
        />
        {/* bottom-left, bleeding off the bottom edge */}
        <DecorShape
          src="/auth/ring.png"
          className="absolute -bottom-4 left-[5%] h-56 w-52 -rotate-12"
        />
        {/* right edge, beside the paragraph/button */}
        <DecorShape
          src="/auth/squiggle.png"
          tint="lime"
          className="absolute top-[48%] right-[6%] h-36 w-28 rotate-12"
        />
        {/* bottom-right, bleeding off the corner */}
        <DecorShape
          src="/auth/squiggle.png"
          className="absolute -right-10 -bottom-10 h-16 w-16 rotate-180"
        />
      </div>

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
