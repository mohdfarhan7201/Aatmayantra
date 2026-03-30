import { sessions } from "./data";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function UploadedTable() {
  const navigate = useNavigate();

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sessions.length / ITEMS_PER_PAGE);

  // pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSessions = sessions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // page numbers like 1 2 3 -> 2 3 4
  const getPageNumbers = () => {
    const pages = [];
    let start = Math.max(currentPage - 1, 1);
    let end = Math.min(start + 2, totalPages);

    if (end - start < 2) {
      start = Math.max(end - 2, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div>
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="border-b text-gray-500 text-sm">
            <tr>
              <th className="p-3 text-left font-medium">Title</th>
              <th className="p-3 text-left font-medium">Date</th>
              <th className="p-3 text-left font-medium">Rating</th>
              <th className="p-3 text-left font-medium">Status</th>
              <th className="p-3 text-left font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentSessions.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Title */}
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <span className="font-medium text-gray-800">
                      {item.title}
                    </span>
                  </div>
                </td>

                {/* Date */}
                <td className="p-3 text-sm text-gray-600">
                  {item.date}, <br /> {item.time}
                </td>

                {/* Rating */}
                <td className="p-3">
                  <div className="flex items-center gap-1 text-green-600 font-medium">
                    {item.rating}
                    <FaStar />
                  </div>
                </td>

                {/* Status */}
                <td className="p-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                    {item.status}
                  </span>
                </td>

                {/* Action */}
                <td className="p-3">
                  <button
                    onClick={() => navigate(`/trainer/session/view/${item.id}`)}
                    className="bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    View Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-end items-center gap-2 mt-4">
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          Prev
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded border ${
              page === currentPage
                ? "bg-purple-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
