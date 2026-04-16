import React, { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const instructorRows = [
  { id: 1, name: "John Doe", role: "Yoga Instructor", status: "Approved", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/men/31.jpg", date: "2024-08-01" },
  { id: 2, name: "Jane Smith", role: "Yoga Doctor", status: "Rejected", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/women/44.jpg", date: "2024-07-20" },
  { id: 3, name: "Alex Johnson", role: "Yoga Instructor", status: "Rejected", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/men/54.jpg", date: "2024-09-05" },
  { id: 4, name: "Emily Davis", role: "Yoga Instructor", status: "Approved", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/women/65.jpg", date: "2024-06-15" },
  { id: 5, name: "Michael Brown", role: "Yoga Doctor", status: "Pending", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/men/72.jpg", date: "2024-08-25" },
  { id: 6, name: "John", role: "Yoga Instructor", status: "Approved", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/men/32.jpg", date: "2024-08-01" },
  { id: 7, name: "Jane", role: "Yoga Doctor", status: "Rejected", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/women/44.jpg", date: "2024-07-20" },
  { id: 8, name: "Alex", role: "Yoga Instructor", status: "Rejected", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/men/54.jpg", date: "2024-09-05" },
  { id: 9, name: "Emily", role: "Yoga Instructor", status: "Approved", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/women/65.jpg", date: "2024-06-15" },
  { id: 10, name: "Michael", role: "Yoga Doctor", status: "Pending", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/men/72.jpg", date: "2024-08-25" },
  { id: 11, name: "John Doe", role: "Yoga Instructor", status: "Approved", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/men/31.jpg", date: "2024-08-01" },
  { id: 12, name: "Jane Smith", role: "Yoga Doctor", status: "Rejected", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/women/44.jpg", date: "2024-07-20" },
  { id: 13, name: "Alex Johnson", role: "Yoga Instructor", status: "Rejected", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/men/54.jpg", date: "2024-09-05" },
  { id: 14, name: "Emily Davis", role: "Yoga Instructor", status: "Approved", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/women/65.jpg", date: "2024-06-15" },
  { id: 15, name: "Michael Brown", role: "Yoga Doctor", status: "Pending", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/men/72.jpg", date: "2024-08-25" },
  { id: 16, name: "John", role: "Yoga Instructor", status: "Approved", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/men/32.jpg", date: "2024-08-01" },
  { id: 17, name: "Jane", role: "Yoga Doctor", status: "Rejected", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/women/44.jpg", date: "2024-07-20" },
  { id: 18, name: "Alex", role: "Yoga Instructor", status: "Rejected", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/men/54.jpg", date: "2024-09-05" },
  { id: 19, name: "Emily", role: "Yoga Instructor", status: "Approved", addedBy: "Admin", avatar: "https://randomuser.me/api/portraits/women/65.jpg", date: "2024-06-15" },
  { id: 20, name: "Michael", role: "Yoga Doctor", status: "Pending", addedBy: "Manager", avatar: "https://randomuser.me/api/portraits/men/72.jpg", date: "2024-08-25" },
];

const statusColors = {
  Approved: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

export default function InstructorTable() {
  const [data, setData] = useState(instructorRows);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { darkMode } = useTheme();

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const sortData = (type) => {
    let sorted = [...data];
    if (type === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (type === "name-desc") sorted.sort((a, b) => b.name.localeCompare(a.name));
    else if (type === "date-newest") sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    else if (type === "date-oldest") sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(sorted);
    setShowFilter(false);
    setCurrentPage(1);
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const getVisiblePages = () => {
    if (totalPages <= 3) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`rounded-lg shadow p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative">
        <h3 className="text-lg font-semibold">Recent Instructor Table</h3>

        <div className="flex items-center gap-3">
          <div className="relative">
            <FaSearch className={`absolute top-3 left-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
            <input
              type="text"
              placeholder="Search"
              className={`pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-teal-400 ${
                darkMode ? "bg-[#1f273d] border-gray-600 text-white" : "bg-white border-gray-300"
              }`}
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className={`flex items-center gap-2 text-sm px-3 py-2 rounded-md ${
                darkMode ? "bg-[#1f273d] text-gray-300 hover:bg-[#2a3550]" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <FaFilter /> Filter
            </button>

            {showFilter && (
              <div className={`absolute right-0 mt-2 border rounded shadow w-44 z-10 ${
                darkMode ? "bg-[#1f273d] border-gray-600" : "bg-white border-gray-200"
              }`}>
                
                {["name-asc","name-desc","date-newest","date-oldest"].map((type, i) => {
                  const labels = [
                    "Sort by Name (A–Z)",
                    "Sort by Name (Z–A)",
                    "Sort by Date (Newest)",
                    "Sort by Date (Oldest)"
                  ];
                  return (
                    <button
                      key={type}
                      onClick={() => sortData(type)}
                      className={`block w-full text-left px-4 py-2 ${
                        darkMode ? "hover:bg-[#2a3550]" : "hover:bg-gray-100"
                      }`}
                    >
                      {labels[i]}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className={`${darkMode ? "bg-[#1f273d]" : "bg-gray-50"} text-sm`}>
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Added By</th>
              <th className="py-3 px-4 text-left">View</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map(({ id, name, role, status, addedBy, avatar }) => (
              <tr
                key={id}
                className={`border-b ${
                  darkMode
                    ? "border-gray-700 hover:bg-[#2a3550]"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <td className="py-3 px-4 flex items-center gap-3">
                  <img src={avatar} className="w-8 h-8 rounded-full" />
                  {name}
                </td>

                <td className="py-3 px-4">{role}</td>

                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>
                    {status}
                  </span>
                </td>

                <td className="py-3 px-4">
                  <span className={addedBy === "Admin" ? "text-blue-500" : "text-purple-500"}>
                    {addedBy}
                  </span>
                </td>

                <td className="py-3 px-4">
                  <button className={`px-4 py-1.5 rounded-md ${
                    darkMode
                      ? "bg-blue-900 text-blue-200 hover:bg-blue-800"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ ORIGINAL PAGINATION BACK */}
      <div className="mt-5 flex justify-end items-end gap-2">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className="px-3 py-1 rounded-full text-gray-500 hover:bg-gray-200"
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
              currentPage === page
                ? darkMode
                  ? "bg-teal-600 text-white"
                  : "bg-black text-white"
                : darkMode
                ? "bg-[#1f273d] text-gray-300 hover:bg-[#2a3550]"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="px-3 py-1 rounded-full text-gray-500 hover:bg-gray-200"
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}