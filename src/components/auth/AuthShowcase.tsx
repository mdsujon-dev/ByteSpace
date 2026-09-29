import { AppImage } from "@/components/ui/AppImage";

export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div className={`relative h-80 w-full max-w-sm ${className ?? ""}`}>
      <AppImage
        src="/auth/showcase.png"
        alt=""
        fill
        sizes="384px"
        fit="contain"
        className="object-top-left"
      />
    </div>
  );
}
