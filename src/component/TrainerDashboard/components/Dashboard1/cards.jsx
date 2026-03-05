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
      title: "Active Clients",
      icon: <FaUsers className="text-4xl text-blue-600" />,
      bg: "bg-green-50",
      path: "/active-clients",
    },
    {
      title: "Today's Session",
      icon: <MdEventAvailable className="text-4xl text-blue-600" />,
      bg: "bg-white",
      path: "/todays-session",
    },
    {
      title: "Earning",
      icon: <GiMoneyStack className="text-4xl text-blue-600" />,
      bg: "bg-white",
      path: "/earning",
    },
    {
      title: "Live Stream",
      icon: <FaVideo className="text-4xl text-blue-600" />,
      bg: "bg-white",
      path: "/live-stream",
    },
  ];

  return (
    <div className="flex items-center justify-between gap-6 mt-6 mb-5">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(card.path)}
          className={`w-56 h-28 cursor-pointer rounded-xl border border-gray-300 shadow-sm flex flex-col justify-center items-center transition hover:shadow-md ${card.bg}`}
        >
          {card.icon}
          <p className="mt-2 font-semibold text-gray-700">{card.title}</p>
        </div>
      ))}
    </div>
  );
}
