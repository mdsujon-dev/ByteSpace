import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SearchInput } from "@/components/ui/SearchInput";
import { SearchScopeDropdown } from "@/components/ui/SearchScopeDropdown";
import { AdvancedCourseFilters } from "@/components/courses/AdvancedCourseFilters";
import { CourseCard } from "@/components/courses/CourseCard";
import { Pagination } from "@/components/ui/Pagination";
import { Container } from "@/components/ui/Container";
import { sampleCourses } from "@/lib/sample-courses";

export const metadata: Metadata = {
  title: "All Courses | ByteSpace",
  description: "Find your next course from our full catalog.",
};

export default function CoursesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero size="sm" title="Find Your Next Course">
        <SearchInput
          placeholder="Search"
          icon
          trailing={<SearchScopeDropdown />}
        />
      </Hero>

      <Container as="section" className="py-10">
        <AdvancedCourseFilters />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-10">
          <Pagination page={1} totalPages={5} />
        </div>
      </Container>
    </div>
  );
}
