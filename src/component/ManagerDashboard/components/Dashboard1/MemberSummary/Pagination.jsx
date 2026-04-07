import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  // Sliding Window 3 pages
  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, start + 2);

  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex gap-3 justify-end mt-4 items-center">
      <button
        className="p-2 rounded-full border"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <PiLessThan/>
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setCurrentPage(p)}
          className={`px-3 py-1 rounded-full ${
            currentPage === p ? "bg-black text-white" : "border"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        className="p-2 rounded-full w-8 h-8 border"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PiGreaterThan/>
      </button>
    </div>
  );
}
