// src/components/settings/ActiveStatusChart.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const students = [
  { name: "Riya Sharma", sessions: "5/6 Sessions" },
  { name: "Ananya Gupta", sessions: "5/6 Sessions" },
  { name: "Arjun Meta", sessions: "5/6 Sessions" },
];

export default function ActiveStatusChart() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-xl shadow-md w-1/3 transition-all duration-300 border mb-8 -mt-2
        ${darkMode ? "bg-gray-900 text-white shadow-gray-600" : "bg-white text-gray-900 border-gray-300"}
      `}
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-green-700 mb-10">
        Most Active Students
      </h3>

      {/* Students List */}
      <div className="space-y-5">
        {students.map((student, index) => (
          <div
            key={index}
            className={`flex items-center justify-between pb-4 border-b
              ${darkMode ? "border-gray-700" : "border-gray-200"}
            `}
          >
            {/* Left - Avatar + Name */}
            <div className="flex items-center space-x-4">
              {/* Grey circular avatar */}
              <div
                className={`w-12 h-12 rounded-full 
                  ${darkMode ? "bg-gray-700" : "bg-gray-300"}
                `}
              ></div>

              {/* Student Name */}
              <span
                className={`font-medium 
                  ${darkMode ? "text-white" : "text-gray-800"}
                `}
              >
                {student.name}
              </span>
            </div>

            {/* Right - Sessions */}
            <span
              className={`text-sm font-medium
                ${darkMode ? "text-gray-300" : "text-gray-500"}
              `}
            >
              {student.sessions}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
