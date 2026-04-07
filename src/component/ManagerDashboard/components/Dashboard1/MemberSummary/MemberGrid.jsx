export default function MemberGrid({ data, onView }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-107 overflow-y-auto pr-2">
      {data.map((m) => (
        <div
          key={m.id}
          className="border border-gray-400 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition"
        >
          <div className="flex items-center gap-3 mb-3">
            <img src={m.photo} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm text-gray-500">{m.membership}</p>
            </div>
          </div>
<div className="ml-15">
          <p><b>Sessions:</b> {m.sessions}</p>
          <p><b>Feedback:</b> {m.feedback}</p>
</div>

          <button
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => onView(m)}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}
