import type { ReactNode } from "react";
import { gridBackgroundStyle } from "@/lib/styles";
import { AuthShowcase } from "@/components/auth/AuthShowcase";

type AuthLayoutProps = {
  heading: string;
  description: string;
  children: ReactNode;
};

export function AuthLayout({ heading, description, children }: AuthLayoutProps) {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <div
        className="relative flex flex-1 flex-col justify-center overflow-hidden bg-brand-blue px-8 pt-28 pb-12 lg:px-16 lg:pt-16 lg:pb-16"
        style={gridBackgroundStyle}
      >
        <div className="max-w-sm">
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
