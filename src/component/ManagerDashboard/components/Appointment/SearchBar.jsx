import React from "react";
import { Search, LayoutGrid, Table } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-full">
        <Search size={16} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Instructor / Class / Tag"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      <button className="p-2 bg-gray-100 rounded-lg">
        <LayoutGrid size={18} />
      </button>

      <button className="p-2 bg-gray-100 rounded-lg">
        <Table size={18} />
      </button>

      <select className="bg-gray-100 px-3 py-2 rounded-lg text-sm">
        <option>Today</option>
      </select>
    </div>
  );
}