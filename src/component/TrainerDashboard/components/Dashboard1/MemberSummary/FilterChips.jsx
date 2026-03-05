export default function FilterChips({ selected, setSelected }) {
  const filters = ["All", "Active", "Plan Expiring Soon", "Plan Expired", "Beginner", "Intermediate", "Senior"];

  return (
    <div className="flex gap-3 mb-4 flex-wrap">
      {filters.map((f, i) => (
        <button
          key={i}
          onClick={() => setSelected(f)}
          className={`px-4 py-1 rounded-full border ${
            selected === f ? "bg-[#3FB185] text-white" : "bg-gray-100 text-gray-600"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
