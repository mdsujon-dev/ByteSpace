"use client";

import { useState } from "react";
import { Tabs } from "antd";
import { FiFilter, FiBarChart2 } from "react-icons/fi";
import { MdOutlineCategory, MdSort } from "react-icons/md";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export function AdvancedCourseFilters() {
  const [active, setActive] = useState("Featured");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50">
            <FiFilter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50">
            <FiBarChart2 className="h-4 w-4" />
            Level
          </button>
          <button className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50">
            <MdOutlineCategory className="h-4 w-4" />
            Category
          </button>
        </div>
        <button className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50">
          <MdSort className="h-4 w-4" />
          Most relevant
        </button>
      </div>

      <Tabs
        activeKey={active}
        onChange={setActive}
        tabBarGutter={8}
        moreIcon={null}
        className="course-category-tabs"
        items={categories.map((category) => ({
          key: category,
          label: (
            <span
              className={`rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                category === active
                  ? "bg-brand-lime text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {category}
            </span>
          ),
        }))}
      />
    </div>
  );
}
