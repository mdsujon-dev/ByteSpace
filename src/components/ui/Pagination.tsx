type PaginationProps = {
  page?: number;
  totalPages?: number;
};

export function Pagination({ page = 1, totalPages = 5 }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        disabled={page === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 disabled:opacity-40"
      >
        &larr;
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          aria-current={p === page ? "page" : undefined}
          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
            p === page
              ? "bg-brand-blue text-white"
              : "text-zinc-600 hover:bg-zinc-100"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={page === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 disabled:opacity-40"
      >
        &rarr;
      </button>
    </nav>
  );
}
