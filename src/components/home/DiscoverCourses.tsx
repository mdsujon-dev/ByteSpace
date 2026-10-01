import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/courses/CourseCard";
import { sampleCourses } from "@/lib/sample-courses";
import Link from "next/link";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export function DiscoverCourses() {
  // Use first 6 courses for display
  const courses = sampleCourses.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-[44px] lg:leading-[1.2] lg:tracking-[-0.01em]">
            Discover Your Passion,<br />
            Build Your Skills
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 sm:mt-6 sm:text-base">
            At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`cursor-pointer rounded-full px-5 py-2 text-xs font-medium transition-colors ${
                category === "Featured"
                  ? "bg-brand-lime text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
          <button className="cursor-pointer px-5 py-2 text-xs font-medium text-brand-blue hover:underline">
            + More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
