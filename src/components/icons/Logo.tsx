export function Logo({
  className,
  textClassName = "text-white",
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="14" fill="var(--brand-lime)" />
        <path
          d="M9 8.5C9 7.67 9.67 7 10.5 7H15c2.76 0 5 2.24 5 5s-2.24 5-5 5h-3v3.5c0 .83-.67 1.5-1.5 1.5S9 21.33 9 20.5v-12Z"
          fill="var(--brand-blue)"
        />
        <path d="M12 12h3a2 2 0 1 1 0 4h-3v-4Z" fill="var(--brand-lime)" />
      </svg>
      <span className={`text-lg font-bold tracking-tight ${textClassName}`}>
        ByteSpace
      </span>
    </div>
  );
}
