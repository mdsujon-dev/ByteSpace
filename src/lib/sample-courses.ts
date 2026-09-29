import type { Course } from "@/components/courses/CourseCard";

const gradients = [
  "from-blue-200 to-blue-400",
  "from-zinc-200 to-zinc-400",
  "from-slate-800 to-cyan-700",
  "from-amber-100 to-orange-300",
  "from-emerald-100 to-teal-300",
  "from-violet-200 to-fuchsia-300",
];

const titles = [
  "The Complete Web Development Bootcamp",
  "Data Science & Machine Learning A-Z",
  "Digital Marketing Masterclass",
  "UI/UX Design Essentials",
  "Personal Finance & Investing 101",
  "Photography for Beginners",
];

const categories = [
  "Development",
  "IT & Software",
  "Marketing",
  "Design",
  "Finance",
  "Photography",
];

export const sampleCourses: Course[] = Array.from({ length: 18 }, (_, i) => ({
  id: `course-${i + 1}`,
  title: titles[i % titles.length],
  category: categories[i % categories.length],
  price: i % 5 === 0 ? "Free" : `$${(19 + (i % 6) * 10).toFixed(2)}`,
  rating: 4.2 + ((i % 5) * 0.15),
  reviews: 120 + i * 17,
  thumbnailGradient: gradients[i % gradients.length],
}));
