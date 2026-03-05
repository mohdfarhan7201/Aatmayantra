export default function TopRightFilter({ rightFilter, setRightFilter }) {
  const options = ["All", "Payment Due", "Yoga Doctor"];

  return (
    <select
      className="border px-3 py-1 rounded-lg text-gray-600"
      value={rightFilter}
      onChange={(e) => setRightFilter(e.target.value)}
    >
      {options.map((o, i) => (
        <option key={i} value={o}>{o}</option>
      ))}
    </select>
  );
}
