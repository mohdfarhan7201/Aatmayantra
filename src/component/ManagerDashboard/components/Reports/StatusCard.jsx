import React from "react";
import { FaUser, FaUsers, FaTrophy, FaClipboardCheck } from "react-icons/fa";

export default function DashboardCards() {
  const cards = [
    {
      id: 1,
      title: "Total Students",
      value: 220,
      icon: <FaUser />,
      bg: "bg-gradient-to-r from-green-200 to-green-100",
    },
    {
      id: 2,
      title: "Active Students",
      value: 34,
      icon: <FaUsers />,
      bg: "bg-gray-100",
    },
    {
      id: 3,
      title: "Completed Sessions",
      value: 23,
      icon: <FaTrophy />,
      bg: "bg-gray-100",
    },
    {
      id: 4,
      title: "Average Attendance",
      value: "78%",
      icon: <FaClipboardCheck />,
      bg: "bg-gray-100",
    },
  ];

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.03] ${card.bg}`}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-2 shadow-sm">
              <div className="text-blue-500 text-xl">
                {card.icon}
              </div>
            </div>

            {/* Title */}
            <p className="text-sm text-gray-600 text-center">
              {card.title}
            </p>

            {/* Value */}
            <p className="text-lg font-semibold text-green-600">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}