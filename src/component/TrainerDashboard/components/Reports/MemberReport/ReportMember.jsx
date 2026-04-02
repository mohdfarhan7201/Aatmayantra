import React, { useState } from "react";
import MemberTable from "./MemberTable";
import Pagination from "./Pagination";
import ViewModal from "./ViewModal";
import FilterBar from "./FilterBar";

export default function MemberReport() {
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  // 🔥 MORE DATA (pagination test)
  const members = Array.from({ length: 20 }, (_, i) => ({
    name: `Member ${i + 1}`,
    session: `${Math.floor(Math.random() * 10)}/10`,
    completion: Math.floor(Math.random() * 100),
    status: Math.random() > 0.5 ? "Active" : "Inactive",
  }));

  // 🔥 FILTER
  const filteredMembers =
    filter === "all"
      ? members
      : members.filter((m) => m.status === filter);

  // 🔥 PAGINATION LOGIC
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedMembers = filteredMembers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-white rounded-xl border border-gray-300 p-5 shadow-sm ml-5 mr-5 ">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg text-gray-700">
          Member Report
        </h2>

        <FilterBar setFilter={setFilter} />
      </div>

      {/* Table */}
      <MemberTable
        members={paginatedMembers}
        onView={() => setOpenModal(true)}
      />

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        setPage={setPage}
      />

      {/* Modal */}
      {openModal && <ViewModal onClose={() => setOpenModal(false)} />}
    </div>
  );
}