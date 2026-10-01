import { AppImage } from "@/components/ui/AppImage";

type DecorShapeProps = {
  src: string;
  className?: string;
  /** Recolor the shape with a solid brand color instead of its native art. Omit to use the source image as-is. */
  tint?: "lime" | "white" | "blue";
};

const tintClass: Record<NonNullable<DecorShapeProps["tint"]>, string> = {
  lime: "bg-brand-lime mix-blend-multiply",
  // Multiply only darkens; forcing an already-colored asset (e.g. the lime triangle) to white needs
  // screen instead, since screen(color, white) is white regardless of the base color underneath.
  white: "bg-white mix-blend-screen",
  blue: "bg-brand-blue mix-blend-multiply",
};

/**
 * Floating 3D-style decorative icon (squiggle/triangle/ring assets), optionally recolored via a mask + multiply overlay.
 * `className` must include a position utility (e.g. `absolute inset-x-4 top-2`) — position:absolute also
 * establishes the containing block the inner `fill` image needs, so no default "relative" is added here
 * (Tailwind's `.relative` rule sits after `.absolute` in its stylesheet and would silently win the cascade).
 */
export function DecorShape({ src, className, tint }: DecorShapeProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className ?? ""}`}
    >
      <AppImage src={src} alt="" fill fit="contain" />
      {tint && (
        <div
          className={`absolute inset-0 ${tintClass[tint]}`}
          style={{
            maskImage: `url(${src})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: `url(${src})`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        />
      )}
    </div>
  );
}
