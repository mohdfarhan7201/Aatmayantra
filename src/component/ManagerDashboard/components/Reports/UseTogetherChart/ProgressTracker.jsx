import React from "react";

export default function ProgressTracker() {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // dummy grid (7 rows × 30 cols approx)
  const rows = 10;
  const cols = 47;

  const getColor = () => {
    const rand = Math.random();
    if (rand > 0.6) return "bg-green-700";
    if (rand > 0.3) return "bg-green-500";
    return "bg-gray-200";
  };

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm w-full h-65">
      <h3 className="text-2xl font-bold text-gray-700 mb-3">
        Progress Tracker
      </h3>

      {/* Months */}
      <div className="flex justify-between text-xs text-gray-500 mb-2 px-1">
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* Grid */}
      <div className="flex gap-[3px] overflow-hidden">
        {[...Array(cols)].map((_, col) => (
          <div key={col} className="flex flex-col gap-[3px]">
            {[...Array(rows)].map((_, row) => (
              <div
                key={row}
                className={`w-3 h-3 rounded-sm ${getColor()}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}