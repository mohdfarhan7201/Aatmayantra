import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import DashboardCards from "./cards"; // 👈 cards import
import { useTheme } from "../../context/ThemeContext";

// Dummy Pages (baad me replace kar dena)
const CalendarPage = () => <h1 className="mt-6">Calendar Page</h1>;
const AttendancePage = () => <h1 className="mt-6">Attendance Page</h1>;
const ClassesPage = () => <h1 className="mt-6">Classes Page</h1>;

export default function AddManager() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      {/* HEADER */}
      <Header />

      {/* CARDS (Top Section) */}
      <div className="mt-6">
        <DashboardCards />
      </div>

      {/* ROUTES (Pages open here) */}
      {/* <div className="mt-6">
        <Routes>
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/classes" element={<ClassesPage />} />
        </Routes>
      </div> */}
    </div>
  );
}