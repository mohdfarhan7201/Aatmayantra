import React from "react";

export default function CoursePerformance() {
  const data = [
    { name: "Course name", completion: 90, attendance: 70 },
    { name: "Course name", completion: 85, attendance: 65 },
    { name: "Course name", completion: 88, attendance: 68 },
  ];

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm w-full">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">
        Course-wise Performance
      </h3>

      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i}>
            <p className="text-xs text-gray-600 mb-1">
              {item.name}
            </p>

            {/* Completion */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-1">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{ width: `${item.completion}%` }}
              />
            </div>

            {/* Attendance */}
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${item.attendance}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Legend + Button */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Completion %
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Attendance %
          </div>
        </div>

        <button className="text-xs px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">
          View More
        </button>
      </div>
    </div>
  );
}