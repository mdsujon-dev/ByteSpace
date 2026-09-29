import type { Course, CourseLevel } from "@/components/courses/CourseCard";

const thumbnails = [
  "/courses/course-1.jpg",
  "/courses/course-2.jpg",
  "/courses/course-3.jpg",
  "/courses/course-4.jpg",
  "/courses/course-5.jpg",
  "/courses/course-6.jpg",
];

const avatarSets = [
  ["/avatars/avatar-1.png", "/avatars/avatar-2.png", "/avatars/avatar-3.png", "/avatars/avatar-4.png"],
  ["/avatars/avatar-2.png", "/avatars/avatar-3.png", "/avatars/avatar-4.png", "/avatars/avatar-1.png"],
  ["/avatars/avatar-3.png", "/avatars/avatar-4.png", "/avatars/avatar-1.png", "/avatars/avatar-2.png"],
];

const titles = [
  "Build Digital Asset",
  "The Complete Web Development Bootcamp",
  "Data Science & Machine Learning A-Z",
  "Digital Marketing Masterclass",
  "UI/UX Design Essentials",
  "Personal Finance & Investing 101",
  "Photography for Beginners",
  "Motion Graphics in After Effects",
  "Copywriting That Converts",
  "Freelancing on Fiverr & Upwork",
];

const authors = [
  "purepearl studio",
  "creativehive co",
  "northbeam academy",
  "bytelab school",
  "visionary labs",
  "growthdesk",
];

const levels: CourseLevel[] = ["Beginner", "Intermediate", "Advanced"];

export const sampleCourses: Course[] = Array.from({ length: 30 }, (_, i) => ({
  id: `course-${i + 1}`,
  title: titles[i % titles.length],
  author: authors[i % authors.length],
  lessons: 10 + ((i * 3) % 20),
  duration: `${1 + (i % 4)} hours ${(i * 7) % 60} mins`,
  comments: 20 + i * 5,
  rating: Number((4 + (i % 5) * 0.15).toFixed(1)),
  level: levels[i % levels.length],
  price: i % 6 === 0 ? 0 : 15 + (i % 6) * 5,
  pricingLabel: "lifetime",
  thumbnail: thumbnails[i % thumbnails.length],
  avatars: avatarSets[i % avatarSets.length],
  extraStudents: 10 + i * 2,
}));
