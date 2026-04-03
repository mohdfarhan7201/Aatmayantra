import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function EarningChart() {
  const [type, setType] = useState("monthly");

  const monthlyData = [
    { name: "Jan", value: 60 },
    { name: "Feb", value: 75 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 70 },
    { name: "May", value: 85 },
    { name: "Jun", value: 90 },
    { name: "Jul", value: 78 },
    { name: "Aug", value: 88 },
    { name: "Sep", value: 92 },
    { name: "Oct", value: 85 },
    { name: "Nov", value: 95 },
    { name: "Dec", value: 98 },
  ];

  const yearlyData = [
    { name: "2020", value: 60 },
    { name: "2021", value: 75 },
    { name: "2022", value: 85 },
    { name: "2023", value: 90 },
    { name: "2024", value: 95 },
  ];

  const data = type === "monthly" ? monthlyData : yearlyData;

  return (
    <div className="bg-white rounded-xl border border-gray-300 p-4 shadow-sm w-[95%] justify-center ml-7 mt-5">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[24px] font-semibold text-gray-700">
          {type === "monthly" ? "Monthly Earning" : "Yearly Earning"}
        </h2>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="text-xs border rounded px-2 py-1 outline-none"
        >
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="flex">

        {/* LEFT ROTATED TEXT */}
        <div className="flex items-center justify-center w-10">
          <span className="-rotate-90 text-xs text-gray-500">
            Avg 90%
          </span>
        </div>

        {/* CHART */}
        <div className="flex-1 h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ left: 10, right: 10 }}>

              {/* ✅ FIX 1: Y AXIS VISIBLE WITH % */}
              <YAxis
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tickFormatter={(val) => `${val}%`}
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />

              {/* ✅ FIX 2: JAN CUT NA HO */}
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 10, right: 10 }}
              />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#16a34a"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BOTTOM LABEL */}
      <div className="text-center text-sm text-gray-900 mt-2">
        {type === "monthly" ? "Months" : "Years"}
      </div>

    </div>
  );
}