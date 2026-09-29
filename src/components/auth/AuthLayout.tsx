import type { ReactNode } from "react";
import Link from "next/link";
import { gridBackgroundStyle } from "@/lib/styles";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { AppImage } from "@/components/ui/AppImage";

type AuthLayoutProps = {
  heading: string;
  description: string;
  children: ReactNode;
};

export function AuthLayout({ heading, description, children }: AuthLayoutProps) {
  return (
    <div
      className="relative flex flex-1 flex-col items-center overflow-hidden bg-brand-blue px-6 py-10 lg:min-h-256 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-12"
      style={gridBackgroundStyle}
    >
      <Link href="/" className="absolute top-8 left-6 lg:top-12 lg:left-16">
        <AppImage src="/logo.png" alt="ByteSpace" width={32} height={38} priority />
      </Link>

      <div className="hidden w-full max-w-lg flex-col lg:flex">
        <div className="max-w-sm">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            {heading}
          </h1>
          <p className="mt-3 text-sm text-white/70">{description}</p>
        </div>

        <AuthShowcase className="mt-12" />
      </div>

      <div className="mt-10 flex w-full max-w-md justify-center lg:mt-0">
        <div className="w-full rounded-3xl bg-white px-8 py-10 shadow-2xl sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
}
