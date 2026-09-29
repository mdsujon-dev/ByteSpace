import { AppImage } from "@/components/ui/AppImage";

export function CourseSneakPeek({ images }: { images: string[] }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-zinc-900">Sneak Peek</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-xl bg-zinc-100"
          >
            <AppImage src={src} alt="" fill sizes="200px" />
          </div>
        ))}
      </div>
    </div>
  );
}
