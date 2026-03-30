import { useState } from "react";
import { FiSearch } from "react-icons/fi";

// Filter Component
function TopRightFilter({ rightFilter, setRightFilter }) {
  const options = ["All", "Payment Due", "Yoga Doctor"];

  return (
    <select
      className="border px-3 py-1 rounded-lg text-gray-600"
      value={rightFilter}
      onChange={(e) => setRightFilter(e.target.value)}
    >
      {options.map((o, i) => (
        <option key={i} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}



// Main Component
export default function TopSection() {
  const [rightFilter, setRightFilter] = useState("All");

  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center justify-between mb-2">

      {/* Left side */}
      <div className="flex items-center gap-3">

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border pl-9 pr-3 py-1 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          {/* Search Icon */}
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
            <FiSearch size={14} />
          </span>
        </div>

        

      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <TopRightFilter
          rightFilter={rightFilter}
          setRightFilter={setRightFilter}
        />
      </div>

    </div>
  );
}