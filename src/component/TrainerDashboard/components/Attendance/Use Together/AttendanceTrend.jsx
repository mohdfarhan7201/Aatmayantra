import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function AttendanceTrend() {
  const [filter, setFilter] = useState("Monthly");

  // 🔹 Monthly Data
  const monthlyData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 60 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 40 },
    { name: "May", value: 45 },
    { name: "Jun", value: 90 },
    { name: "Jul", value: 85 },
    { name: "Aug", value: 60 },
    { name: "Sep", value: 50 },
    { name: "Oct", value: 55 },
    { name: "Nov", value: 50 },
    { name: "Dec", value: 20 },
  ];

  // 🔹 Weekly Data
  const weeklyData = [
    { name: "Mon", value: 60 },
    { name: "Tue", value: 70 },
    { name: "Wed", value: 65 },
    { name: "Thu", value: 80 },
    { name: "Fri", value: 75 },
    { name: "Sat", value: 50 },
    { name: "Sun", value: 40 },
  ];

  // 🔹 Daily Data
  const dailyData = [
    { name: "1", value: 50 },
    { name: "2", value: 60 },
    { name: "3", value: 55 },
    { name: "4", value: 70 },
    { name: "5", value: 65 },
    { name: "6", value: 80 },
    { name: "7", value: 75 },
  ];

  // 🔹 Data Selector (IMPORTANT FIX)
  const getData = () => {
    if (filter === "Weekly") return weeklyData;
    if (filter === "Daily") return dailyData;
    return monthlyData;
  };

  return (
    <div className="bg-white border border-gray-400 rounded-xl p-4 w-[65%] shadow-sm">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[22px] font-semibold text-[#15705F]">
          Attendance Trend
        </h2>

        {/* FILTER */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-[12px] border rounded-md px-2 py-[2px] text-gray-600 outline-none"
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={getData()}   // ✅ FIXED HERE
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            label={{
              value: "Avg",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: 15, fill: "#000" },
            }}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* X AXIS LABEL (✅ DYNAMIC FIX) */}
      <p className="text-[15px] text-center text-black mt-1">
        {filter === "Daily"
          ? "Days"
          : filter === "Weekly"
          ? "Week"
          : "Months"}
      </p>
    </div>
  );
}