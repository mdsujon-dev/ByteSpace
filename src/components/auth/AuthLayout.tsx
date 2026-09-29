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
    <div className="flex flex-1 flex-col lg:flex-row">
      <div
        className="relative flex flex-1 flex-col justify-center overflow-hidden bg-brand-blue px-8 py-12 lg:px-16"
        style={gridBackgroundStyle}
      >
        <Link href="/" className="absolute top-8 left-8 lg:top-12 lg:left-16">
          <AppImage src="/logo.png" alt="ByteSpace" width={32} height={38} priority />
        </Link>

        <div className="mt-16 max-w-sm">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            {heading}
          </h1>
          <p className="mt-3 text-sm text-white/70">{description}</p>
        </div>

        <AuthShowcase className="mt-12" />
      </div>

      <div className="flex flex-1 items-center justify-center bg-white px-6 py-16 lg:px-16">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
