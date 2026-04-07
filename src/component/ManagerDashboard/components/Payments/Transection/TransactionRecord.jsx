import React, { useState } from "react";
import FilterBar from "./FilterBar";
import TransactionTable from "./TransactionTable";
import ViewModal from "./ViewModal";

export default function TransactionRecord() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [selected, setSelected] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");

  // 🔥 Dummy Data
  const transactions = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: ["Nandita Pandey", "Vashu Verma", "Farhan Ali"][i % 3],
    date: "9 Sep , 2025",
    time: "05:56 PM",
    status: i % 3 === 0 ? "Received" : i % 3 === 1 ? "Received" : "Withdraw",
    amount: i % 3 === 2 ? "+50" : i % 2 === 0 ? "+50053" : "50000",
  }));

  // 🔥 FILTER
  const filtered =
    statusFilter === "all"
      ? transactions
      : transactions.filter((t) => t.status === statusFilter);

  const visibleData = filtered.slice(0, visibleCount);

  return (
    <div className="bg-white rounded-xl border border-gray-300 p-5 shadow-sm mt-5">

      {/* HEADER */}
      <h2 className="text-[25px] font-semibold mb-4">
        Transaction Record
      </h2>

      {/* FILTER */}
      <FilterBar setStatusFilter={setStatusFilter} />

      {/* TABLE */}
      <TransactionTable
        data={visibleData}
        onView={(item) => setSelected(item)}
      />

      {/* LOAD MORE */}
      {visibleCount < filtered.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="bg-gradient-to-r from-green-500 to-teal-400 text-white px-6 py-2 rounded-lg text-sm"
          >
            View More
          </button>
        </div>
      )}

      {/* MODAL */}
      {selected && (
        <ViewModal
          data={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}