import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, ClipboardList, BookOpen } from "lucide-react";

export default function DashboardCards() {
  const navigate = useNavigate();

  const cards = [
    {
      title1: "View",
      title2: "Calendar",
      icon: <Calendar size={40} />,
      path: "/calendar",
      value: null,
    },
    {
      title1: "Daily",
      title2: "Attendance",
      icon: <ClipboardList size={40} />,
      path: "/attendance",
      value: "125",
    },
    {
      title1: "Class",
      title2: "Covered",
      icon: <BookOpen size={40} />,
      path: "/classes",
      value: "50",
    },
  ];

  return (
    <div className="flex gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(card.path)}
          className="w-[400px] h-[120px] cursor-pointer 
          rounded-lg border border-gray-200 shadow-sm
          bg-gradient-to-b from-[#E0FFD6] to-[#F0FBFA]
          px-7 py-2 flex flex-col justify-between"
        >
          {/* TOP SECTION */}
          <div className="flex items-start gap-2">
            
            {/* ICON */}
            <div className=" p-[6px] rounded-md text-[#0501ff]">
              {card.icon}
            </div>

            {/* TEXT */}
            <div className="leading-[25px] ml-17 mt-4 ">
              <p className="text-[22px] text-gray-700 font-semibold">
                {card.title1}
              </p>
              <p className="text-[22px] text-gray-700 font-semibold">
                {card.title2}
              </p>

              {/* VALUE */}
              {card.value && (
                <p className="text-[26px] font-bold text-black mt-[5px]">
                  {card.value}
                </p>
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(card.path);
            }}
            className="w-[60px] text-[15px] px-3 py-[2px] -mt-5
            bg-[#035BA8] text-white rounded
            shadow-sm hover:bg-[#185a91]"
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}