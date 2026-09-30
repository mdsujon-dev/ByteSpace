import { Container } from "@/components/ui/Container";
import { DecorShape } from "@/components/ui/DecorShape";
import { DecorStage } from "@/components/ui/DecorStage";
import { SearchInput } from "@/components/ui/SearchInput";
import { HeroShowcase } from "@/components/home/HeroShowcase";
import { gridBackgroundStyle } from "@/lib/styles";

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue"
      style={gridBackgroundStyle}
    >
      <div className="relative pt-36 pb-24 lg:pt-44 lg:pb-32">
        {/* Decorative floating shapes. lg+ is the tuned desktop layout; below lg (max-lg:) the shapes shrink
            into the top corners and the two beside the search bar are hidden, so none of them covers text. */}
        <DecorStage>
          {/* left edge, beside the heading */}
          <DecorShape
            src="/auth/squiggle.png"
            tint="lime"
            className="absolute top-[38%] -left-[50px] h-20 w-16 rotate-45 max-lg:top-16 max-lg:-left-6 lg:h-56 lg:w-44"
          />
          {/* bottom-left, below the search bar */}
          <DecorShape
            src="/auth/squiggle.png"
            tint="white"
            className="absolute bottom-4 left-[calc(16%-100px)] hidden h-36 w-40 -rotate-[20deg] lg:block"
          />
          {/* top-right, bleeding off the corner */}
          <DecorShape
            src="/home/white.png"
            tint="lime"
            className="absolute top-16 -right-10 h-24 w-14 rotate-12 max-lg:-right-5 lg:h-64 lg:w-36"
          />
          {/* right edge, beside the search bar */}
          <DecorShape
            src="/auth/triangle.png"
            tint="white"
            className="absolute bottom-6 right-[8%] hidden h-32 w-28 -rotate-12 lg:block"
          />
        </DecorStage>

        <Container className="relative z-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
            <SearchInput
              placeholder="Course, topic, creator"
              icon
              className="mt-10 max-w-xl"
            />
          </div>
        </Container>
      </div>

      <div className="-mt-16 lg:-mt-28">
        <HeroShowcase />
      </div>
    </section>
  );
}
