export default function MemberTable({ data, onView }) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-300">
      <table className="w-full text-left">
        <thead className="bg-gray-50">
          <tr className="text-gray-600 border-b border-gray-300">
            <th className="p-3 ">Member's Name</th>
            <th className="p-3 text-center">Membership Type</th>
            <th className="p-3 text-center">Session Attendent</th>
            <th className="p-3 text-center">Feedback</th>
            <th className="p-3 text-center">View Details</th>
          </tr>
        </thead>

        <tbody>
          {data.map((m) => (
            <tr key={m.id} className="border-b border-gray-300 hover:bg-gray-50">
              <td className="p-3 flex items-center gap-3">
                <img src={m.photo} className="w-10 h-10 rounded-full" />
                {m.name}
              </td>

              <td className="p-3 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    m.membership === "Payment Due"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {m.membership}
                </span>
              </td>

              <td className="p-3 text-center">{m.sessions}</td>
              <td className="p-3 text-center">{m.feedback}</td>

              <td className="p-3 text-center">
                <button
                  onClick={() => onView(m)}
                  className="px-4 py-1 bg-blue-600 text-white rounded-lg"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
