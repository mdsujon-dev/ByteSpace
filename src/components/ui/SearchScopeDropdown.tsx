"use client";

import { useState } from "react";
import { Dropdown, type MenuProps } from "antd";
import { FiChevronDown } from "react-icons/fi";

const scopes = ["Courses", "Creators", "Categories"];

export function SearchScopeDropdown() {
  const [selected, setSelected] = useState(scopes[0]);

  const items: MenuProps["items"] = scopes.map((scope) => ({
    key: scope,
    label: scope,
  }));

  return (
    <Dropdown
      menu={{ items, onClick: ({ key }) => setSelected(key) }}
      trigger={["click"]}
    >
      <button
        type="button"
        className="flex shrink-0 items-center gap-1.5 rounded-full bg-brand-lime px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
      >
        {selected}
        <FiChevronDown className="h-4 w-4" />
      </button>
    </Dropdown>
  );
}
