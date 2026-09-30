import type { ReactNode } from "react";

type DecorStageProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Positioning layer for floating DecorShapes. From lg up it is a 1700px-wide stage centered on the section
 * and scaled down proportionally on narrower viewports (see `.decor-stage` in globals.css), so the shapes keep
 * the same arrangement around the centered content at any viewport width or browser zoom level.
 * Below lg it falls back to the full section box. The transform makes it a stacking context, so pass a
 * z-index in `className` when shapes inside need to sit above later siblings.
 */
export function DecorStage({ children, className }: DecorStageProps) {
  return (
    <div
      aria-hidden="true"
      className={`decor-stage pointer-events-none absolute inset-0 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
