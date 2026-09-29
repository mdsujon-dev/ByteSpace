import Image from "next/image";

export function Logo({
  className,
  textClassName = "text-white",
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/logo.png"
        alt="ByteSpace"
        width={26}
        height={31}
        priority
        className="h-7 w-auto"
      />
      <span className={`text-lg font-bold tracking-tight ${textClassName}`}>
        ByteSpace
      </span>
    </div>
  );
}
