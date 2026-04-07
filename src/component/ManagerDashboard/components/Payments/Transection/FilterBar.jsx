import React from "react";

export default function FilterBar({ setStatusFilter }) {
  return (
    <div className="flex justify-between items-center mb-3">

      {/* LEFT FILTERS */}
      <div className="flex gap-2 text-sm">

        <button className="border px-3 py-1 rounded flex items-center gap-1">
          Date range
        </button>

        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="all">Status</option>
          <option value="Received">Received</option>
          <option value="Withdraw">Withdraw</option>
        </select>

        <button className="border px-3 py-1 rounded">
          P. Method
        </button>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search by amount , payment method..."
        className="border px-3 py-1 rounded text-sm w-[320px]"
      />
    </div>
  );
}