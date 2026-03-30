import React, { useState } from "react";
import FilterChips from "./FilterChips";
import TopRightFilter from "./TopRightFilter";
import MemberTable from "./MemberTable";
import MemberGrid from "./MemberGrid";
import Pagination from "./Pagination";
import ViewModal from "./ViewModal";
import ViewSwitcher from "./ViewSwitcher";

import membersData from "./membersData";

export default function MemberSummary() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [rightFilter, setRightFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("table"); // NEW

  const [selectedMember, setSelectedMember] = useState(null);

  const ITEMS_PER_PAGE = 5;

  // Filters
  const filteredData = membersData.filter((item) => {
    if (selectedFilter !== "All" && item.status !== selectedFilter) return false;
    if (rightFilter !== "All" && item.membership !== rightFilter) return false;
    return true;
  });

  // Paginate only for table view
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData =
    view === "table"
      ? filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE)
      : filteredData;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300">

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl text-[#1D7464] font-bold">Member Summary</h2>

      </div>
      <div className="flex items-center justify-between mb-3">
  
  {/* Left side */}
  <div>
    <ViewSwitcher view={view} setView={setView} />
  </div>

  {/* Right side */}
  <div className="flex items-center gap-4">
    <TopRightFilter rightFilter={rightFilter} setRightFilter={setRightFilter} />
  </div>

</div>

      {/* Top Chips */}
      <FilterChips selected={selectedFilter} setSelected={setSelectedFilter} />

      {/* Conditional UI */}
      {view === "table" ? (
        <MemberTable data={paginatedData} onView={setSelectedMember} />
      ) : (
        <MemberGrid data={paginatedData} onView={setSelectedMember} />
      )}

      {/* Pagination only in table */}
      {view === "table" && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      {/* Modal */}
      {selectedMember && (
        <ViewModal member={selectedMember} close={() => setSelectedMember(null)} />
      )}
    </div>
  );
}
