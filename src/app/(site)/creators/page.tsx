import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CreatorHero } from "@/components/creators/CreatorHero";
import { CreatorFilterTabs } from "@/components/creators/CreatorFilterTabs";
import { CourseCard } from "@/components/courses/CourseCard";
import { getCreator } from "@/lib/get-creator";
import { sampleCourses } from "@/lib/sample-courses";

export const metadata: Metadata = {
  title: "Creator Profile | ByteSpace",
  description: "View creator profile and their courses",
};

export default function CreatorProfilePage() {
  // Hardcoded to purepearl-studio for the static page as requested
  const creator = getCreator("purepearl-studio");
  
  if (!creator) return notFound();

  // Get exactly 6 courses with different thumbnails
  const courses = sampleCourses.slice(0, 6).map((c) => ({
    ...c,
    author: creator.name,
  }));

  return (
    <div className="flex flex-1 flex-col">
      <CreatorHero
        name={creator.name}
        avatar={creator.avatar}
        verified={creator.verified}
        role={creator.role}
        bio={creator.bio}
        followers={creator.followers}
        productCount={courses.length}
      />

      <Container as="section" className="py-10">
        <CreatorFilterTabs />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </div>
  );
}
