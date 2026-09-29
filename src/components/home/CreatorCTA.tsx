import { Container } from "@/components/ui/Container";
import { gridBackgroundStyle } from "@/lib/styles";
import Link from "next/link";

export function CreatorCTA() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue py-24"
      style={gridBackgroundStyle}
    >
      {/* Decorative floating shapes placeholders */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* We can use simple colored shapes to simulate the 3D objects */}
        <div className="absolute top-10 left-10 h-24 w-24 -rotate-12 rounded-full border-[16px] border-brand-lime opacity-80 blur-[2px]" />
        <div className="absolute bottom-20 left-20 h-0 w-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-white opacity-80 blur-[2px]" />
        <div className="absolute top-20 right-40 h-0 w-0 -rotate-45 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-brand-lime opacity-80 blur-[1px]" />
        <div className="absolute top-1/3 right-10 h-40 w-24 rotate-12 rounded-full bg-white opacity-90 blur-[2px]" />
        <div className="absolute bottom-10 right-32 h-16 w-32 -rotate-12 rounded-full border-[12px] border-brand-lime opacity-80 blur-[1px]" />
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
