import React from "react";

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <div className="flex justify-end items-center gap-2 mt-4 text-[12px]">
      
      {/* PREV */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        {"<"}
      </button>

      {/* PAGES */}
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1
              ? "bg-black text-white"
              : "border"
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* NEXT */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
}