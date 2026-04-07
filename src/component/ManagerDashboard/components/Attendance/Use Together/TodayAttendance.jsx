import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function TodayAttendance() {
  const data = [
    { name: "Present", value: 344 },
    { name: "Missed", value: 74 },
    { name: "Late", value: 5 },
  ];

  const COLORS = ["#2563eb", "#e5e7eb", "#93c5fd"];

  const total = data.reduce((acc, item) => acc + item.value, 0);
  const percentage = Math.round((data[0].value / total) * 100);

  return (
    <div className="bg-white border border-gray-400 rounded-xl p-4 w-[35%] shadow-sm">
      
      {/* TITLE */}
      <h2 className="text-[22px] font-semibold text-[#15705F] mb-6">
        Today Attendance Overview
      </h2>

      <div className="flex items-center justify-between">
        
        {/* DONUT */}
        <div className="relative flex items-center justify-center">
          <PieChart width={160} height={160}>
            <Pie
              data={data}
              innerRadius={45}     // ✅ better donut thickness
              outerRadius={60}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>

          {/* CENTER TEXT (PERFECT CENTER) */}
          <div className="absolute inset-0 flex items-center justify-center text-[20px] font-bold text-black">
            {percentage}%
          </div>
        </div>

        {/* STATS */}
        <div className="text-[18px] text-black space-y-2 ml-2">
          <div className="flex justify-between w-[120px]">
            <span className="font-semibold">Present</span>
            <span className="font-semibold text-black">344</span>
          </div>
          <div className="flex justify-between w-[120px]">
            <span className="font-semibold">Missed</span>
            <span className="font-semibold text-black">74</span>
          </div>
          <div className="flex justify-between w-[120px]">
            <span className="font-semibold">Late</span>
            <span className="font-semibold text-black">5</span>
          </div>
        </div>
      </div>
    </div>
  );
}