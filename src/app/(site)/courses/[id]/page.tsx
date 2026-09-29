import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CourseDetailHero } from "@/components/courses/CourseDetailHero";
import { CourseTabs } from "@/components/courses/CourseTabs";
import { getAllCourseIds, getCourseDetail } from "@/lib/get-course-detail";

export function generateStaticParams() {
  return getAllCourseIds().map((id) => ({ id }));
}

export async function generateMetadata(
  props: PageProps<"/courses/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const course = getCourseDetail(id);
  if (!course) return { title: "Course Not Found | ByteSpace" };
  return {
    title: `${course.title} | ByteSpace`,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage(
  props: PageProps<"/courses/[id]">
) {
  const { id } = await props.params;
  const course = getCourseDetail(id);
  if (!course) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <CourseDetailHero course={course} />

      <Container className="py-16 lg:pr-96">
        <CourseTabs course={course} />
      </Container>
    </div>
  );
}
