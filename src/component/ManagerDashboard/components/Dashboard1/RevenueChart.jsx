import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function RevenueChart() {
  const [filter, setFilter] = useState("monthly");

  // 🔥 FULL DATA
  const dataMap = {
    weekly: [
      { name: "Mon", uv: 4000, pv: 2000 },
      { name: "Tue", uv: 3000, pv: 1500 },
      { name: "Wed", uv: 2000, pv: 1200 },
      { name: "Thu", uv: 5000, pv: 2500 },
      { name: "Fri", uv: 4500, pv: 2200 },
      { name: "Sat", uv: 3000, pv: 1800 },
      { name: "Sun", uv: 2000, pv: 1000 },
    ],

    // 🔥 MORE DATA FOR SCROLL
    monthly: [
      { name: "01-01", uv: 20000, pv: 11000 },
      { name: "02-01", uv: 10000, pv: 7000 },
      { name: "03-01", uv: 6000, pv: 4000 },
      { name: "04-01", uv: 18000, pv: 11000 },
      { name: "05-01", uv: 19000, pv: 7000 },
      { name: "06-01", uv: 19000, pv: 5000 },
      { name: "07-01", uv: 8000, pv: 4000 },
      { name: "08-01", uv: 17000, pv: 9000 },
      { name: "09-01", uv: 21000, pv: 12000 },
      { name: "10-01", uv: 15000, pv: 8000 },
      { name: "11-01", uv: 12000, pv: 6000 },
      { name: "12-01", uv: 22000, pv: 13000 },
    ],

    // 🔥 FULL YEAR
    yearly: [
      { name: "Jan", uv: 40000, pv: 20000 },
      { name: "Feb", uv: 30000, pv: 15000 },
      { name: "Mar", uv: 20000, pv: 12000 },
      { name: "Apr", uv: 50000, pv: 25000 },
      { name: "May", uv: 45000, pv: 22000 },
      { name: "Jun", uv: 30000, pv: 18000 },
      { name: "Jul", uv: 20000, pv: 10000 },
      { name: "Aug", uv: 35000, pv: 17000 },
      { name: "Sep", uv: 42000, pv: 21000 },
      { name: "Oct", uv: 38000, pv: 19000 },
      { name: "Nov", uv: 46000, pv: 23000 },
      { name: "Dec", uv: 52000, pv: 26000 },
    ],
  };

  const data = dataMap[filter];

  // 🔥 DYNAMIC WIDTH (important for scroll)
  const chartWidth = Math.max(data.length * 80, 500);

  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-300 w-full max-w-6xl mt-2">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-700 text-2xl">
          {filter === "monthly"
            ? "Monthly Revenue"
            : filter === "weekly"
            ? "Weekly Revenue"
            : "Yearly Revenue"}
        </h2>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-sm border rounded-md px-2 py-1 outline-none"
        >
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
          <option value="yearly">This Year</option>
        </select>
      </div>

      {/* 🔥 SCROLLABLE CHART */}
      <div className="w-full overflow-x-auto">
        <div style={{ width: chartWidth, height: 260 }}>
          <BarChart width={chartWidth} height={260} data={data}>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            {/* LIGHT BAR */}
            <Bar
              dataKey="uv"
              fill="#e9e5ff"
              radius={[6, 6, 0, 0]}
            />

            {/* DARK BAR */}
            <Bar
              dataKey="pv"
              fill="#6d28d9"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </div>
      </div>
    </div>
  );
}