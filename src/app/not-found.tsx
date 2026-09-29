import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <Hero
      eyebrow={
        <span className="bg-gradient-to-b from-brand-lime to-brand-blue bg-clip-text text-[7rem] font-extrabold leading-none text-transparent sm:text-[10rem]">
          404
        </span>
      }
      title="The page you are looking for doesn't exist"
      description="Try to use a correct url or go back to homepage to start again"
      primaryAction={{ label: "Back to Home", href: "/" }}
    />
  );
}
