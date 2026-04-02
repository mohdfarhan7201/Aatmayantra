export default function Pagination({ currentPage, totalPages, setPage }) {
  return (
    <div className="flex justify-end items-center gap-2 mt-4">
      
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
        className="w-8 h-8 rounded-full border disabled:opacity-40"
      >
        {"<"}
      </button>

      {/* Pages */}
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-8 h-8 rounded-full ${
            currentPage === i + 1
              ? "bg-black text-white"
              : "border"
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
        className="w-8 h-8 rounded-full border disabled:opacity-40"
      >
        {">"}
      </button>
    </div>
  );
}