import { sampleCourses } from "@/lib/sample-courses";
import courseDetails from "@/data/course-details.json";
import type { Course } from "@/components/courses/CourseCard";

export type Lesson = {
  title: string;
  duration: string;
  locked: boolean;
};

export type CourseDetail = Course & {
  subtitle: string;
  authorRole: string;
  description: string;
  keyPoints: string[];
  lessonsList: Lesson[];
  sneakPeek: string[];
};

export function getCourseDetail(id: string): CourseDetail | undefined {
  const course = sampleCourses.find((c) => c.id === id);
  if (!course) return undefined;

  const detail = courseDetails.find((d) => d.title === course.title);
  if (!detail) return undefined;

  const lessonsList: Lesson[] = Array.from({ length: course.lessons }, (_, i) => ({
    title: detail.keyPoints[i % detail.keyPoints.length],
    duration: `${8 + ((i * 5) % 20)} mins`,
    locked: i !== 0,
  }));

  return {
    ...course,
    subtitle: detail.subtitle,
    authorRole: detail.authorRole,
    description: detail.description,
    keyPoints: detail.keyPoints,
    lessonsList,
    sneakPeek: course.avatars.length ? sneakPeekFor(course) : [],
  };
}

function sneakPeekFor(course: Course): string[] {
  const pool = [
    "/courses/course-1.jpg",
    "/courses/course-2.jpg",
    "/courses/course-3.jpg",
    "/courses/course-4.jpg",
    "/courses/course-5.jpg",
    "/courses/course-6.jpg",
  ];
  const start = pool.indexOf(course.thumbnail);
  return Array.from({ length: 4 }, (_, i) => pool[(start + i) % pool.length]);
}

export function getAllCourseIds(): string[] {
  return sampleCourses.map((c) => c.id);
}
