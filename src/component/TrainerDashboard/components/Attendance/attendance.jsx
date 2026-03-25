// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import DashboardCards from "./cards"; // 👈 cards import
// import Usetogether from "./Use Together/usetogether";
// import AttendanceSummary from "./AttendanceSummary/AttendanceSummary";
// import { useTheme } from "../../context/ThemeContext";
// export default function AddManager() {
//   const { darkMode } = useTheme();

//   return (
//     <div
//       className={`p-6 min-h-screen transition-colors duration-300 ${
//         darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
//       }`}
//     >
//       {/* HEADER */}
//       <Header />

//       {/* CARDS (Top Section) */}
//       <div className="mt-6">
//         <DashboardCards />
//         <Usetogether/>
//         <AttendanceSummary/>

//       </div>

      
//     </div>
//   );
// }




import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import DashboardCards from "./cards";
import Usetogether from "./Use Together/usetogether";
import AttendanceSummary from "./AttendanceSummary/AttendanceSummary";
import MemberDetails from "./AttendanceSummary/MemberDetails";
import { useTheme } from "../../context/ThemeContext";

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

      <Routes>
        {/* ✅ MAIN PAGE */}
        <Route
          path="/"
          element={
            <div className="mt-6">
              <DashboardCards />
              <Usetogether />
              <AttendanceSummary />
            </div>
          }
        />

        {/* ✅ FIXED PATH (IMPORTANT) */}
        <Route
          path="member/:id"
          element={<MemberDetails />}
        />
      </Routes>
    </div>
  );
}