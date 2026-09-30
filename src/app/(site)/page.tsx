import { Container } from "@/components/ui/Container";
import { Sponsors } from "@/components/home/Sponsors";
import { DiscoverCourses } from "@/components/home/DiscoverCourses";
import { LearningPaths } from "@/components/home/LearningPaths";
import { Features } from "@/components/home/Features";
import { CreatorCTA } from "@/components/home/CreatorCTA";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col items-center justify-center py-32 text-center bg-zinc-50">
        <Container>
          <h1 className="text-4xl font-bold text-zinc-900 sm:text-5xl">
            Welcome to ByteSpace
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Learn without limits. Start your digital journey today.
          </p>
        </Container>
      </div>

      <Sponsors />
      <DiscoverCourses />
      <LearningPaths />
      <Features />
      <CreatorCTA />
      <Testimonials />
    </div>
  );
}
