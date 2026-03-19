import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Upcoming from "./Upcoming/upcomings";
import Upload from "./Uploaded/uploaded";
import AddSession from "./AddNew/AddSession";
import { useTheme } from "../../context/ThemeContext";
import ViewReport from "./Uploaded/SessionReport";
export default function AddManager() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      <Header />

      <Routes>
        {/* /session */}
        <Route index element={<Upcoming />} />

        {/* /session/upload */}
        <Route path="uploaded" element={<Upload />} />

        {/* /session/add */}
        <Route path="add" element={<AddSession />} />

        <Route path="view/:id" element={<ViewReport/>} />
      </Routes>
    </div>
  );
}
