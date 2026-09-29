import creators from "@/data/creators.json";
import { sampleCourses } from "@/lib/sample-courses";

export function slugifyAuthor(author: string): string {
  return author
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getCreator(slug: string) {
  return creators.find((c) => c.slug === slug);
}

export function getAllCreatorSlugs(): string[] {
  return creators.map((c) => c.slug);
}

export function getCoursesByCreator(name: string) {
  return sampleCourses.filter((c) => c.author === name);
}
