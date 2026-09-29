import { FiFilter, FiBarChart2 } from "react-icons/fi";
import { MdOutlineCategory, MdSort } from "react-icons/md";

export function CreatorFilterTabs() {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div className="flex w-full overflow-x-auto pb-2 md:w-auto md:pb-0 no-scrollbar">
        <div className="flex items-center gap-2 md:gap-4">
          <button className="flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50">
            <FiFilter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50">
            <FiBarChart2 className="h-4 w-4" />
            Level
          </button>
          <button className="flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50">
            <MdOutlineCategory className="h-4 w-4" />
            Category
          </button>
        </div>
      </div>
      <button className="flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50">
        <MdSort className="h-4 w-4" />
        Most relevant
      </button>
    </div>
  );
}
