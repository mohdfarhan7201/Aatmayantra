import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function MemberDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const member = state;

  const chartData = [
    { name: "Dec", value: 4 },
    { name: "Jan", value: 6 },
    { name: "Feb", value: 7 },
    { name: "Mar", value: 6 },
    { name: "Apr", value: 8 },
    { name: "May", value: 7 },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      
      <div className="bg-white rounded-xl p-5 shadow-sm">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div>
              <h2 className="text-[20px] font-bold">{member?.name}</h2>
              <span className="text-[12px] bg-gray-200 px-2 py-[2px] rounded">
                Premium
              </span>
            </div>
          </div>

          <div className="text-right text-[12px]">
            <p>Attendance</p>
            <p className="text-[18px] font-bold">8%</p>
            <p className="mt-1">Last Active</p>
            <p>{member?.last}</p>
          </div>
        </div>

        {/* STATS */}
        <div className="flex gap-4 mb-4">
          {[
            { label: "Present", value: 25 },
            { label: "Missed", value: 8 },
            { label: "Late", value: 2 },
          ].map((item, i) => (
            <div key={i} className="bg-gray-100 px-5 py-3 rounded-lg text-center">
              <p className="text-[12px]">{item.label}</p>
              <p className="font-bold text-[18px]">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-6">
          
          {/* LEFT */}
          <div className="w-[65%]">
            
            {/* CHART */}
            <h3 className="text-[14px] font-semibold mb-2">
              Attendance Trend
            </h3>

            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Line
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>

            {/* TABLE */}
            <h3 className="text-[14px] font-semibold mt-4 mb-2">
              Recent Activity
            </h3>

            <table className="w-full text-[12px]">
              <thead className="border-b text-gray-500">
                <tr>
                  <th>Date</th>
                  <th>Session</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dec 3</td>
                  <td>Hatha Yoga</td>
                  <td className="text-green-600">Present</td>
                  <td>7:05 AM</td>
                  <td>55 mins</td>
                </tr>
                <tr>
                  <td>Dec 2</td>
                  <td>Vinyasa Flow</td>
                  <td className="text-red-500">Missed</td>
                  <td>-</td>
                  <td>Absent</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RIGHT */}
          <div className="w-[35%] text-[13px]">
            <h3 className="font-semibold mb-2">Basic Information</h3>

            <p>Email: member@email.com</p>
            <p>Phone: 123-456-7880</p>
            <p>Join Date: Jan 15, 2024</p>
            <p>Membership: Premium</p>
            <p>Trainer: Pat</p>

            <hr className="my-3" />

            <h3 className="font-semibold mb-1">Notes</h3>
            <p className="text-gray-600">
              Shows good consistency. improve morning flexibility routine.
            </p>

            <button className="mt-4 w-full border py-2 rounded-md">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}