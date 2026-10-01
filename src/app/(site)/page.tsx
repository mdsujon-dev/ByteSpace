import { HomeHero } from "@/components/home/HomeHero";
import { Sponsors } from "@/components/home/Sponsors";
import { DiscoverCourses } from "@/components/home/DiscoverCourses";
import { LearningPaths } from "@/components/home/LearningPaths";
import { Features } from "@/components/home/Features";
import { CreatorCTA } from "@/components/home/CreatorCTA";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HomeHero />
      <Sponsors />
      <DiscoverCourses />
      <LearningPaths />
      <Features />
      <CreatorCTA />
      <Testimonials />
    </div>
  );
}
