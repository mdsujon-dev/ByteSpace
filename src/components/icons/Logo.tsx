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
      <Image
        src="/logo.png"
        alt="ByteSpace"
        width={29}
        height={32}
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
