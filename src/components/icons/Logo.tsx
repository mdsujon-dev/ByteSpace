import Image from "next/image";

export function Logo({
  className,
  textClassName = "text-white",
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    // Figma spec: 28.88×31.5 mark, 8px gap, 134×30 Clash Display Bold 24px wordmark whose box starts 7px below the mark's top
    <div className={`flex items-start gap-2 ${className ?? ""}`}>
      {/* logo-mark.png is logo.png cropped to the visible mark; the original's transparent padding pushed the mark up and left */}
      <Image
        src="/logo-mark.png"
        alt="ByteSpace"
        width={45}
        height={47}
        priority
        className="h-[31.5px] w-[28.88px] object-contain"
      />
      <span
        className={`mt-1.75 font-display text-2xl leading-7.5 font-bold ${textClassName}`}
      >
        ByteSpace
      </span>
    </div>
  );
}
