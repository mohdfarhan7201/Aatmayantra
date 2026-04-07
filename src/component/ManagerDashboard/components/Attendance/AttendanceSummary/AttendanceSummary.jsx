import React, { useState } from "react";
import MemberTable from "./MemberTable";
import Pagination from "./Pagination";

export default function AttendanceSummary() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Weekly");
  const [currentPage, setCurrentPage] = useState(1);

  const members = [
    { id: 1, name: "Member A", status: "Present", last: "2 hours ago", rating: 5 },
    { id: 2, name: "Member B", status: "Missed", last: "1 day ago", rating: 3 },
    { id: 3, name: "Member C", status: "Viewed", last: "Today", rating: 4 },
    { id: 4, name: "Member D", status: "Missed", last: "3 days ago", rating: 2 },
    { id: 5, name: "Member E", status: "Present", last: "1 hour ago", rating: 5 },
    { id: 6, name: "Member F", status: "Viewed", last: "Yesterday", rating: 4 },
    { id: 7, name: "Member G", status: "Present", last: "Today", rating: 5 },
  ];

  // 🔍 Search Filter
  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination Logic (5 per page)
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const currentData = filtered.slice(start, start + itemsPerPage);

  return (
    <div className="bg-white border border-gray-400 rounded-xl p-4 shadow-sm mt-5">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[24px] font-semibold text-[#15705F]">
          Attendance Summary
        </h2>

        <div className="flex gap-3 items-center">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search members"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-[15px] border px-3 py-1 rounded-md outline-none w-[280px]"
          />

          {/* FILTER */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-[15px] border px-2 py-1 rounded-md"
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <MemberTable data={currentData} />

      {/* PAGINATION */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}