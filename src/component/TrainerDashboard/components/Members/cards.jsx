import React from "react";
import { Crown, Presentation, UserCheck } from "lucide-react";

export default function DashboardCards() {

  const cards = [
    {
      title1: "Total premium",
      title2:  "members",
      value: "4k",
      icon: <Crown size={48} />,
    },
    {
      title1: "Active",
      title2:  "Members",
      value: "25",
      icon: <Presentation size={48} />,
    },
    {
      title1: "Premium ",
      title2:  "Subscription",
      value: "89%",
      icon: <UserCheck size={48} />,
    },
  ];

  return (
    <div className="flex gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="
          w-[400px] h-[120px]
          rounded-xl
          shadow-md
          flex items-center
          px-5
          gap-8
          cursor-pointer
          bg-gradient-to-b from-[#BFE6B8] to-[#E7ECEF]
        "
        >
          
          {/* ICON */}
          <div className="text-blue-600">
            {card.icon}
          </div>

          {/* TEXT */}
          <div className="flex flex-col leading-tight">
            <p className="text-[20px] text-gray-700 font-medium">
              {card.title1}
            </p>
            <p className="text-[20px] text-gray-700 font-medium">
              {card.title2}
            </p>

            <p className="text-[26px] font-bold text-black mt-1">
              {card.value}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}