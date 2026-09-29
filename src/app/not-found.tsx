import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div
      className="flex flex-1 flex-col items-center justify-center bg-brand-blue px-6 py-24 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <h1
        className="bg-gradient-to-b from-brand-lime to-brand-blue bg-clip-text text-[7rem] font-extrabold leading-none text-transparent sm:text-[10rem]"
      >
        404
      </h1>
      <h2 className="mt-2 max-w-xl text-2xl font-bold text-white sm:text-3xl">
        The page you are looking for doesn&apos;t exist
      </h2>
      <p className="mt-4 max-w-md text-sm text-white/70">
        Try to use a correct url or go back to homepage to start again
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
