"use client";

import { useState } from "react";

const categories = [
  "All",
  "Web Development",
  "Marketing",
  "Finance",
  "Design",
  "IT & Software",
  "Photography",
  "Business",
  "Personal Development",
];

export function CourseFilters() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
              isActive
                ? "bg-brand-lime text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
