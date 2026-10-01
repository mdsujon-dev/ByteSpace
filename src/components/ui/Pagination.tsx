type PaginationProps = {
  page?: number;
  totalPages?: number;
};

export function Pagination({ page = 1, totalPages = 5 }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex items-center justify-center gap-4"
      aria-label="Pagination"
    >
      <button
        type="button"
        disabled={page === 1}
        aria-label="Previous page"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gray text-zinc-700 transition-colors hover:border-zinc-600 disabled:opacity-40"
      >
        &lt;
      </button>

      <div className="flex items-center gap-4">
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            aria-current={p === page ? "page" : undefined}
            className={`text-base transition-colors ${
              p === page
                ? "text-zinc-300"
                : "font-semibold text-zinc-900 hover:text-brand-blue"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={page === totalPages}
        aria-label="Next page"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gray text-zinc-700 transition-colors hover:border-zinc-600 disabled:opacity-40"
      >
        &gt;
      </button>
    </nav>
  );
}
