import { FaStar } from "react-icons/fa";
import { AppImage } from "@/components/ui/AppImage";

export type StudentAvatar = {
  src: string;
  /** Extra classes on the image, e.g. to zoom a full-body photo in on the face. */
  zoomClass?: string;
};

type HappyStudentsCardProps = {
  avatars: StudentAvatar[];
  rating: number;
  reviews: number;
  extraLabel?: string;
  /** "lime" is the brand-colored card on the auth pages, "white" the one in the home hero. */
  variant?: "lime" | "white";
  /** Shrink the avatars and text below the md breakpoint, for layouts that stay visible on phones. */
  compactOnMobile?: boolean;
  className?: string;
};

const variantClass = {
  lime: {
    card: "bg-brand-lime",
    meta: "text-zinc-700",
    star: "text-brand-blue",
    badge: "bg-zinc-900 text-white",
  },
  white: {
    card: "bg-white",
    meta: "text-zinc-400",
    star: "text-yellow-400",
    badge: "bg-brand-lime text-zinc-900",
  },
};

export function HappyStudentsCard({
  avatars,
  rating,
  reviews,
  extraLabel = "2K+",
  variant = "white",
  compactOnMobile = false,
  className,
}: HappyStudentsCardProps) {
  const colors = variantClass[variant];
  const avatarSize = compactOnMobile
    ? "h-6 w-6 md:h-[43px] md:w-[43px]"
    : "h-[43px] w-[43px]";

  return (
    <div
      className={`rounded-xl px-3 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.18)] md:rounded-2xl md:px-4 ${colors.card} ${className ?? ""}`}
    >
      <p
        className={`font-bold text-zinc-900 ${compactOnMobile ? "text-[11px] md:text-base" : "text-base"}`}
      >
        Happy Students
      </p>
      <p
        className={`mt-0.5 flex items-center gap-1 ${colors.meta} ${compactOnMobile ? "text-[8px] md:text-sm" : "text-sm"}`}
      >
        {rating}
        <FaStar className={`h-2.5 w-2.5 md:h-3 md:w-3 ${colors.star}`} />
        <span>({reviews})</span>
      </p>
      <div
        className={`mt-2 flex items-center ${compactOnMobile ? "-space-x-2 md:-space-x-3" : "-space-x-3"}`}
      >
        {avatars.map(({ src, zoomClass }, i) => (
          <span
            key={`${src}-${i}`}
            className={`relative shrink-0 overflow-hidden rounded-full border border-white bg-zinc-100 ${avatarSize}`}
          >
            {/* Zoomed photos only show a small crop, so request a larger source to keep the face sharp. */}
            <AppImage
              src={src}
              alt=""
              fill
              sizes={zoomClass ? "256px" : "86px"}
              className={zoomClass}
            />
          </span>
        ))}
        <span
          className={`flex shrink-0 items-center justify-center rounded-full border border-white font-semibold ${colors.badge} ${avatarSize} ${compactOnMobile ? "text-[7px] md:text-[11px]" : "text-[11px]"}`}
        >
          {extraLabel}
        </span>
      </div>
    </div>
  );
}
