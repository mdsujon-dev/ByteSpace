import { FiCheck } from "react-icons/fi";

export function CourseKeyPoints({ points }: { points: string[] }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-zinc-900">Key Points</h2>
      <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        {points.map((point) => (
          <div key={point} className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-lime">
              <FiCheck className="h-3 w-3 text-zinc-900" />
            </span>
            <span className="text-sm text-zinc-700">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
