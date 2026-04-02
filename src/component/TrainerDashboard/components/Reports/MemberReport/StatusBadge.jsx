export default function StatusBadge({ status }) {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full ${
        status === "Active"
          ? "bg-green-100 text-green-600"
          : "bg-red-100 text-red-500"
      }`}
    >
      {status}
    </span>
  );
}