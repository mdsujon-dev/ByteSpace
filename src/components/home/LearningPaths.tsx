import { Container } from "@/components/ui/Container";
import { FiPenTool, FiCode, FiMonitor, FiBriefcase, FiTarget, FiCamera } from "react-icons/fi";
import Link from "next/link";

const paths = [
  {
    name: "Design",
    icon: FiPenTool,
    href: "/courses?category=design",
  },
  {
    name: "Development",
    icon: FiCode,
    href: "/courses?category=development",
  },
  {
    name: "IT & Software",
    icon: FiMonitor,
    href: "/courses?category=it",
  },
  {
    name: "Business",
    icon: FiBriefcase,
    href: "/courses?category=business",
  },
  {
    name: "Marketing",
    icon: FiTarget,
    href: "/courses?category=marketing",
  },
  {
    name: "Photography",
    icon: FiCamera,
    href: "/courses?category=photography",
  },
];

export function LearningPaths() {
  return (
    <section className="pb-24 bg-white">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base md:leading-7">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 lg:gap-6">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <Link
                key={path.name}
                href={path.href}
                className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-brand-lime hover:shadow-md"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-lime transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7 text-zinc-900" />
                </div>
                <span className="mt-4 text-sm font-medium text-zinc-900">
                  {path.name}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
