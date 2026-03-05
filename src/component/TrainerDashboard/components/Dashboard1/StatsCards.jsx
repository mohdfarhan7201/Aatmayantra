import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaPlus } from "react-icons/fa";
import { PiLeafBold } from "react-icons/pi";

export default function StatsCards() {
  const { darkMode } = useTheme();

  return (
    <div className="grid grid-cols-3 gap-6 mb-10">

      {/* ============================
          1) Attendance Overview
      ============================= */}
      <div
        className={`p-6 rounded-xl border transition shadow-sm 
        ${darkMode ? "bg-[#1f1f1f] border-gray-700 text-white" : "bg-white border-gray-300"}`}
      >
        <h2 className="text-lg font-semibold text-green-700 mb-4">
          Attendance Overview
        </h2>

        <div className="flex items-center gap-5 mt-10">
          {/* Circular Progress */}
          <div className="relative w-20 h-20">
            <svg className="w-full h-full">
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="#e6e6e6"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="#3b82f6"
                strokeWidth="8"
                fill="none"
                strokeDasharray="220"
                strokeDashoffset="66"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
              70%
            </span>
          </div>

          <div>
            <p className="text-gray-600 text-sm">This Week Attendance</p>
            <p className="text-green-700 font-bold text-sm">
              70% Overall Participates
            </p>
          </div>
        </div>
      </div>

      {/* ============================
            2) Quick Action
      ============================= */}
      <div
        className={`p-6 rounded-xl border shadow-sm transition
        ${darkMode ? "bg-[#1f1f1f] border-gray-700 text-white" : "bg-white border-gray-300"}`}
      >
        <h2 className="text-lg font-semibold text-green-700 mb-4">
          Quick Action
        </h2>

        <div className="flex items-center justify-between gap-4 mt-10">
          {/* Add Session */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-md bg-green-500 flex items-center justify-center">
              <FaPlus className="text-white text-xl" />
            </div>
            <p className="text-sm text-center mt-2">Add New Session</p>
          </div>

          {/* Add Member */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-md bg-yellow-500 flex items-center justify-center">
              <FaPlus className="text-white text-xl" />
            </div>
            <p className="text-sm text-center mt-2">Add New Member</p>
          </div>

          {/* Send Reminder */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-md bg-red-500 flex items-center justify-center">
              <FaPlus className="text-white text-xl" />
            </div>
            <p className="text-sm text-center mt-2">Send Reminder</p>
          </div>
        </div>
      </div>

      {/* ============================
            3) Upcoming Events
      ============================= */}
      <div
        className={`p-6 rounded-xl border shadow-sm transition
        ${darkMode ? "bg-[#1f1f1f] border-gray-700 text-white" : "bg-white border-gray-300"}`}
      >
        <h2 className="text-lg font-semibold text-green-700 mb-4">
          Upcoming Events
        </h2>

        {/* Event 1 */}
        <div
          className={`flex items-start gap-3 p-3 rounded-md mb-3 border
          ${darkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <PiLeafBold className="text-green-500 text-xl mt-1" />
          <div>
            <h4 className="font-semibold text-green-700">Free Workshop . 15th Nov</h4>
            <p className="text-xs text-gray-500">Mindful morning flow</p>
          </div>
        </div>

        {/* Event 2 */}
        <div
          className={`flex items-start gap-3 p-3 rounded-md border
          ${darkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <PiLeafBold className="text-green-500 text-xl mt-1" />
          <div>
            <h4 className="font-semibold text-green-700">Free Workshop . 16th Nov</h4>
            <p className="text-xs text-gray-500">Mindful morning flow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
