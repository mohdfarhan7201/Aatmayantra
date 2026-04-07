import { FaTableList } from "react-icons/fa6";

export default function ViewSwitcher({ view, setView }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setView("table")}
        className={`px-4 py-1 rounded-lg border ${
          view === "table" ? "bg-black text-white" : "bg-gray-100"
        }`}
      >
        Table
      </button>

      <button
        onClick={() => setView("grid")}
        className={`px-4 py-1 rounded-lg border ${
          view === "grid" ? "bg-black text-white" : "bg-gray-100"
        }`}
      >
        Grid
      </button>
    </div>
  );
}
