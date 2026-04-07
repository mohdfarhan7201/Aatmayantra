import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Upcoming from "./Upcoming/upcomings";
import Upload from "./Uploaded/uploaded";
import AddSession from "./AddNew/AddSession";
import ViewReport from "./Uploaded/SessionReport";
import Profile from "../Profile";
import { useTheme } from "../../context/ThemeContext";

export default function AddManager() {
  const { darkMode } = useTheme();
  const location = useLocation();

  // ✅ Check if current route is profile
  const isProfilePage = location.pathname.endsWith("/profile");

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      {/* ✅ Header hide on profile pages */}
      {!isProfilePage && <Header />}

      <Routes>
        {/* ✅ /trainer/session */}
        <Route index element={<Upcoming />} />
        <Route path="profile" element={<Profile />} />

        {/* ✅ /trainer/session/uploaded */}
        <Route path="uploaded">
          <Route index element={<Upload />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ✅ /trainer/session/add */}
        <Route path="add">
          <Route index element={<AddSession />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ✅ /trainer/session/view/:id */}
        <Route path="view/:id">
          <Route index element={<ViewReport />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}