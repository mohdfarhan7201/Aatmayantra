import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FaVideo } from "react-icons/fa";

export default function StatsCards() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Total Sessions",
      value: "12",
      icon: <FaVideo size={38} />,
      bg: "from-blue-100 to-blue-200",
      blob: "bg-blue-300",
      path: "/sessions",
    },
    {
      title: "Active Users",
      value: "112",
      icon: <FaUsers size={38} />,
      bg: "from-green-100 to-green-200",
      blob: "bg-green-300",
      path: "/active-users",
    },
    {
      title: "Attendance Rate",
      value: "95%",
      icon: <MdEventAvailable size={38} />,
      bg: "from-purple-100 to-purple-200",
      blob: "bg-purple-300",
      path: "/attendance",
    },
    {
      title: "Revenue",
      value: "₹ 10,204.00",
      icon: <GiMoneyStack size={38} />,
      bg: "from-red-100 to-red-200",
      blob: "bg-red-300",
      path: "/revenue",
    },
  ];

  return (
    <div className="flex gap-6 mt-6">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(card.path)}
          className={`relative w-64 h-36 p-4 rounded-xl cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition bg-gradient-to-br ${card.bg}`}
        >
          {/* TEXT */}
          <p className="text-lg font-semibold text-gray-700">
            {card.title}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-1 px-2">
            {card.value}
          </h2>

          <button className="mt-4 text-xs bg-white px-3 py-1 rounded-full shadow">
            View details
          </button>

          {/* 🔥 ELLIPSE BACKGROUND */}
          <div
            className={`absolute -bottom-6 -right-6 w-26 h-26 ${card.blob} opacity-40 rounded-full`}
          ></div>

          {/* ICON */}
          <div className="absolute bottom-4 right-4 text-gray-800">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}