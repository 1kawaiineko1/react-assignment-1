import React from "react";

export default function CategoryButtons({
  category,
  getPostsByCategory,
  activeCategory,
}) {
  let { name } = category;
  let isActive = activeCategory === name;
  return (
    <button
      onClick={() => getPostsByCategory(name)}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300  ${isActive ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"}`}
    >
      {name}
    </button>
  );
}
