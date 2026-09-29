type SearchInputProps = {
  placeholder?: string;
  buttonLabel?: string;
  type?: "text" | "email";
  className?: string;
};

export function SearchInput({
  placeholder = "Search",
  buttonLabel = "Search",
  type = "text",
  className,
}: SearchInputProps) {
  return (
    <form className={`flex w-full items-center gap-2 ${className ?? ""}`}>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-blue focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-brand-lime px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
