import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CourseDetailHero } from "@/components/courses/CourseDetailHero";
import { CourseMedia } from "@/components/courses/CourseMedia";
import { CourseSidebar } from "@/components/courses/CourseSidebar";
import { CourseTabs } from "@/components/courses/CourseTabs";
import { CourseSneakPeek } from "@/components/courses/CourseSneakPeek";
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

      <Container className="-mt-14 grid grid-cols-1 gap-6 lg:-mt-16 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-8">
          <CourseMedia course={course} />
          <CourseTabs course={course} />
        </div>

        <CourseSidebar course={course} />
      </Container>

      <Container className="py-16">
        <CourseSneakPeek images={course.sneakPeek} />
      </Container>
    </div>
  );
}
