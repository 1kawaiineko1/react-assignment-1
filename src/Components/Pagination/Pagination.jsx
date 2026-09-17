import React from "react";

export default function Pagination({ page, setCurrentPage, currentPage }) {
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`${page == currentPage ? "min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white" :"min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"}`}
    >
      {page}
    </button>
  );
}
