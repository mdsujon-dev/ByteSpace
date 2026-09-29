import { AppImage } from "@/components/ui/AppImage";

const avatars = [
  "/avatars/avatar-1.png",
  "/avatars/avatar-2.png",
  "/avatars/avatar-3.png",
];

export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div className={`relative h-72 w-full max-w-sm ${className ?? ""}`}>
      <div className="absolute top-6 left-0 h-56 w-40 -rotate-6 rounded-2xl bg-white/90 shadow-xl" />

      <div className="absolute top-0 left-16 w-56 -rotate-3 overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="relative h-28 w-full">
          <AppImage
            src="/courses/course-1.jpg"
            alt=""
            fill
            sizes="224px"
          />
        </div>
        <div className="p-3">
          <p className="text-sm font-bold text-zinc-900">The Power of Big Data</p>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
            <span>4.5</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
          </div>
          <p className="mt-2 text-sm font-bold text-brand-blue">$95</p>
        </div>
      </div>

      <span className="absolute top-2 -left-2 h-6 w-6 rounded-full border-4 border-brand-lime" />

      <span className="absolute -bottom-2 left-2 h-0 w-0 border-x-[14px] border-t-[22px] border-x-transparent border-t-brand-lime" />

      <div className="absolute right-0 bottom-0 flex items-center gap-2 rounded-xl bg-brand-lime px-3 py-2 shadow-lg">
        <div className="flex -space-x-2">
          {avatars.map((src) => (
            <AppImage
              key={src}
              src={src}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 rounded-full border border-white"
            />
          ))}
        </div>
        <span className="text-xs font-semibold text-zinc-900">
          Happy Students
        </span>
      </div>
    </div>
  );
}
