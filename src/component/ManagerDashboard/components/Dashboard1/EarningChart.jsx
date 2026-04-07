import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";

const earningsData = [
  { month: "Jan", amount: 20 },
  { month: "Feb", amount: 45 },
  { month: "Mar", amount: 10 },
  { month: "Apr", amount: 80 },
  { month: "May", amount: 30 },
  { month: "Jun", amount: 90 },
  { month: "Jul", amount: 55 },
  { month: "Aug", amount: 85 },
  { month: "Sep", amount: 60 },
  { month: "Oct", amount: 50 },
  { month: "Nov", amount: 30 },
  { month: "Dec", amount: 10 },
];

export default function EarningsOverview() {
  const { darkMode } = useTheme();

  const axisLabelStyle = {
    fontWeight: 600,
    fontSize: 13,
    fill: darkMode ? "#ffffff" : "#333333",
  };

  const axisTickStyle = {
    fill: darkMode ? "#ffffff" : "#333333",
  };

  const axisLineColor = darkMode ? "#555" : "#999";

  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm mb-8 w-2/3 -mt-2
      ${darkMode ? "bg-[#1e1e1e] border-gray-700 text-white" : "bg-white border-gray-300 "}`}
   
    >
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        Earnings Overview
      </h2>

      <div className="w-full" style={{ height: "260px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={earningsData}>
            
            {/* X Axis */}
            <XAxis
              dataKey="month"
              tick={axisTickStyle}
              axisLine={{ stroke: axisLineColor }}
              tickLine={{ stroke: axisLineColor }}
            />

            {/* Y Axis */}
            <YAxis
              tick={axisTickStyle}
              axisLine={{ stroke: axisLineColor }}
              tickLine={{ stroke: axisLineColor }}
              label={{
                value: "Amount",
                angle: -90,
                position: "insideLeft",
                style: axisLabelStyle,
              }}
            />

            {/* Tooltip */}
            <Tooltip
              wrapperStyle={{
                borderRadius: 10,
                border: "1px solid #ccc",
              }}
              contentStyle={{
                backgroundColor: darkMode ? "#2d2d2d" : "#ffffff",
                color: darkMode ? "#fff" : "#000",
              }}
            />

            {/* Main teal line (smooth curve) */}
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#2ec4b6"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom label */}
      <p className={`text-center mt-2  ${darkMode ? " text-white" : "text-black "}`}>
        Months
      </p>
    </div>
  );
}
