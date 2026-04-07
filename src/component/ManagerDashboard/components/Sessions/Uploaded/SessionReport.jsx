import { useParams, useNavigate } from "react-router-dom";
import { sessions } from "./data";
import { FaArrowLeft, FaPlay, FaStar } from "react-icons/fa";
import { useState } from "react";

export default function SessionReport() {
  const { id } = useParams();
  const navigate = useNavigate();

  const session = sessions.find(
    (s) => s.id === Number(id)
  );

  /* Pagination */
  const ITEMS_PER_PAGE = 5;
  const [page, setPage] = useState(1);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedMembers = session.members.slice(start, end);
  const totalPages = Math.ceil(
    session.members.length / ITEMS_PER_PAGE
  );

  if (!session) {
    return <p className="p-6">Session not found</p>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Session Report
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 flex items-center justify-center rounded-full border"
        >
          <FaArrowLeft />
        </button>
      </div>

      {/* Title Row */}
      <div className="flex justify-between items-center border-b pb-3 mb-6">
        <h3 className="text-green-700 font-semibold text-lg">
          {session.title}
        </h3>

        <div className="flex items-center gap-3 text-sm">
          <span>
            {session.date}, {session.time}
          </span>
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-semibold">
            {session.status}
          </span>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video */}
          <div
            className="rounded-lg h-44 relative bg-cover bg-center flex items-end p-3"
            style={{
              backgroundImage: `url(${session.thumbnail})`,
            }}
          >
            <span className="absolute top-2 right-2 text-sm font-semibold text-green-700">
              {session.rating} ★
            </span>

            <span className="text-white text-sm absolute bottom-2 left-2">
              {session.duration}
            </span>

            <button
              onClick={() =>
                alert("Playing video...")
              }
              className="ml-auto flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded-md text-sm"
            >
              <FaPlay /> Play Again
            </button>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <Metric
              title="Total Views"
              value={session.totalViews}
            />
            <Metric
              title="Peak Attendance"
              value={session.peakAttendance}
            />
            <Metric
              title="Duration"
              value={session.duration}
            />
            <Metric
              title="Average Watch Time"
              value={session.avgWatchTime}
            />

            {/* Performance */}
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Performance Score
              </p>
              <div className="flex items-center gap-3">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600"
                    style={{
                      width: `${session.performance}%`,
                    }}
                  />
                </div>
                <span className="text-sm font-medium">
                  {session.performance}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-green-700">
            Attendance Summary
          </h4>
          <button className="text-sm border px-3 py-1 rounded">
            Filter
          </button>
        </div>

        <table className="w-full border-collapse text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="p-3 text-left">
                Member's Name
              </th>
              <th>Watch Time</th>
              <th>Viewing Level</th>
              <th>Attendance</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {paginatedMembers.map(
              (m, i) => (
                <tr
                  key={i}
                  className="border-b"
                >
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={m.avatar}
                      className="w-8 h-8 rounded-full"
                    />
                    {m.name}
                  </td>
                  <td>{m.time}</td>
                  <td>{m.level}</td>
                  <td>{m.attendance}</td>
                  <td className="text-yellow-400">
                    {"★".repeat(m.rating)}
                    {"☆".repeat(
                      5 - m.rating
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="w-8 h-8 border rounded-full"
          >
            ‹
          </button>

          {Array.from(
            { length: totalPages },
            (_, i) => (
              <button
                key={i}
                onClick={() =>
                  setPage(i + 1)
                }
                className={`w-8 h-8 rounded-full ${
                  page === i + 1
                    ? "bg-black text-white"
                    : "border"
                }`}
              >
                {i + 1}
              </button>
            )
          )}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="w-8 h-8 border rounded-full"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

/* Metric Component */
function Metric({ title, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {title}
      </p>
      <p className="text-xl font-semibold">
        {value}
      </p>
    </div>
  );
}
