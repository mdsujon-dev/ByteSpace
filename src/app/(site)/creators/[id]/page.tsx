import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CreatorHero } from "@/components/creators/CreatorHero";
import { CreatorFilterTabs } from "@/components/creators/CreatorFilterTabs";
import { CourseCard } from "@/components/courses/CourseCard";
import {
  getAllCreatorSlugs,
  getCreator,
  getCoursesByCreator,
} from "@/lib/get-creator";

export function generateStaticParams() {
  return getAllCreatorSlugs().map((id) => ({ id }));
}

export async function generateMetadata(
  props: PageProps<"/creators/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const creator = getCreator(id);
  if (!creator) return { title: "Creator Not Found | ByteSpace" };
  return {
    title: `${creator.name} | ByteSpace`,
    description: creator.bio,
  };
}

export default async function CreatorProfilePage(
  props: PageProps<"/creators/[id]">
) {
  const { id } = await props.params;
  const creator = getCreator(id);
  if (!creator) notFound();

  const courses = getCoursesByCreator(creator.name);

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
