import Link from "next/link";
import type { ReactNode } from "react";
import { gridBackgroundStyle } from "@/lib/styles";

type HeroAction = {
  label: string;
  href: string;
};

type HeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  children?: ReactNode;
  size?: "lg" | "sm";
  className?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  size = "lg",
  className,
}: HeroProps) {
  const isCompact = size === "sm";

  return (
    <section
      className={`flex flex-1 flex-col items-center justify-center bg-brand-blue px-6 text-center ${isCompact ? "py-14 lg:min-h-90" : "py-24"} ${className ?? ""}`}
      style={gridBackgroundStyle}
    >
      {eyebrow}

      <h1
        className="mt-2 max-w-xl text-2xl font-bold text-white sm:text-3xl"
      >
        {title}
      </h1>

      {description && (
        <p className="mt-4 max-w-md text-sm text-white/70">{description}</p>
      )}

      {children && <div className="mt-6 w-full max-w-xl">{children}</div>}

      {(primaryAction || secondaryAction) && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {primaryAction && (
            <Link
              href={primaryAction.href}
              className="rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
            >
              {primaryAction.label}
            </Link>
          )}
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondaryAction.label}
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
