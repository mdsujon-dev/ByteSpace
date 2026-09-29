import type { ReactNode } from "react";
import { FiSearch } from "react-icons/fi";

type SearchInputProps = {
  placeholder?: string;
  buttonLabel?: string;
  type?: "text" | "email";
  className?: string;
  icon?: boolean;
  trailing?: ReactNode;
};

export function SearchInput({
  placeholder = "Search",
  buttonLabel = "Search",
  type = "text",
  className,
  icon = false,
  trailing,
}: SearchInputProps) {
  return (
    <form className={`flex w-full items-center gap-2 ${className ?? ""}`}>
      <div className="relative w-full">
        {icon && (
          <FiSearch className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-full border border-zinc-300 bg-white py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-blue focus:outline-none ${
            icon ? "pr-4 pl-11" : "px-4"
          }`}
        />
      </div>

      {trailing ?? (
        <button
          type="submit"
          className="shrink-0 rounded-full bg-brand-lime px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
        >
          {buttonLabel}
        </button>
      )}
    </form>
  );
}
