import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function FilterBar({ setFilter }) {
  const [open, setOpen] = useState(false);

  const handleFilter = (value) => {
    setFilter(value);
    setOpen(false);
  };

  return (
    <div className="relative flex items-center gap-3 text-sm text-gray-500">
      
      {/* Label */}
      <span>Filter</span>

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
      >
        <FiMoreHorizontal size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-10 bg-white border rounded-lg shadow-md w-32 z-10">
          <button
            onClick={() => handleFilter("all")}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
          >
            All
          </button>

          <button
            onClick={() => handleFilter("Active")}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
          >
            Active
          </button>

          <button
            onClick={() => handleFilter("Inactive")}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
          >
            Inactive
          </button>
        </div>
      )}
    </div>
  );
}