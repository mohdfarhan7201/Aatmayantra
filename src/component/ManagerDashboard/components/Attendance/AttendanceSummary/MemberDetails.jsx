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
import { ArrowLeft } from "lucide-react";

export default function MemberDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const member = state;

  const chartData = [
    { name: "Dec", value: 4 },
    { name: "Feb", value: 6 },
    { name: "Mar", value: 7 },
    { name: "Jun", value: 5 },
    { name: "Apr", value: 8 },
    { name: "May", value: 7 },
    { name: "May", value: 6 },
  ];

  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="bg-white rounded-xl p-5 shadow-sm relative">
        
        {/* 🔙 BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          <ArrowLeft size={16} />
        </button>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gray-300"></div>
            <div>
              <h2 className="text-[22px] font-bold text-black">
                {member?.name || "Member A"}
              </h2>
              <span className="text-[12px] bg-gray-200 px-2 py-[2px] rounded">
                Premium
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end gap-6 mt-10">
  <div className="text-right">
    <p className="text-[16px] text-gray-500">Attendance</p>
    <p className="text-[20px] font-bold">8%</p>
  </div>

  <div className="text-right">
    <p className="text-[16px] text-gray-500">Last Active</p>
    <p className="text-[13px]">{member?.last || "2 hours ago"}</p>
  </div>
</div>
        </div>

        {/* STATS */}
        <div className="flex gap-4 mb-4 ml-14">
          {[
            { label: "Present", value: 25 },
            { label: "Missed", value: 8 },
            { label: "Late", value: 2 },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#EEF2F1] px-6 py-3 rounded-lg text-center"
            >
              <p className="text-[18px] font-semibold text-gray-600">{item.label}</p>
              <p className="font-bold text-[20px] text-black">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-6">
          
          {/* LEFT SIDE */}
          <div className="w-[65%]">
            
            {/* CHART */}
            <h3 className="text-[18px] font-bold mb-2 text-black">
              Attendance Trend
            </h3>

            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={chartData}>
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
                  label={{
                    value: "Avg",
                    angle: -90,
                    position: "insideLeft",
                    style: { fontSize: 15  },
                  }}
                />

                <Line
                  dataKey="value"
                  stroke="#15705F"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>

            <p className="text-[15px] text-center text-black mt-1">
              Months
            </p>

            {/* TABLE */}
            <h3 className="text-[18px] font-bold mt-4 mb-2 text-black">
              Recent Activity
            </h3>

            {/* TABLE */}
<h3 className="text-[18px] font-bold mt-4 mb-2 text-black">
  Recent Activity
</h3>

<table className="w-full text-[14px] border-collapse">
  <thead className="border-b text-gray-500">
    <tr>
      <th className="text-left py-2 font-medium">Date</th>
      <th className="font-medium">Session</th>
      <th className="font-medium">Status</th>
      <th className="font-medium">Joined</th>
      <th className="font-medium">Duration</th>
    </tr>
  </thead>

  <tbody className="text-gray-700">
    {[
      {
        date: "Dec 3",
        session: "Hatha Yoga",
        status: "Present",
        joined: "7:05 AM",
        duration: "55 mins",
      },
      {
        date: "Dec 2",
        session: "Vinyasa Flow",
        status: "Missed",
        joined: "-",
        duration: "Absent",
      },
      {
        date: "Dec 1",
        session: "Power Yoga",
        status: "Late",
        joined: "7:22 AM",
        duration: "48 mins",
      },
      {
        date: "Nov 30",
        session: "Hatha Yoga",
        status: "Present",
        joined: "7:01 AM",
        duration: "58 mins",
      },
    ].map((item, index) => (
      <tr key={index} className="border-b last:border-none">
        
        <td className="py-3">{item.date}</td>

        <td className="text-center">{item.session}</td>

        <td
          className={`text-center font-medium ${
            item.status === "Present"
              ? "text-green-600"
              : item.status === "Missed"
              ? "text-red-500"
              : "text-blue-500"
          }`}
        >
          {item.status}
        </td>

        <td className="text-center">{item.joined}</td>

        <td className="text-center">{item.duration}</td>
      </tr>
    ))}
  </tbody>
</table>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[35%] border-l pl-4 text-[18px]">
            
            <h3 className="font-semibold mb-3 text-black">
              Basic Information
            </h3>

            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium mr-2">Email:</span> member@email.com</p>
              <p><span className="font-medium mr-2">Phone:</span> 123-456-7880</p>
              <p><span className="font-medium mr-2">Join Date:</span> Jan 15, 2024</p>
              <p><span className="font-medium mr-2">Membership:</span> Premium</p>
              <p><span className="font-medium mr-2">Trainer:</span> Pat</p>
            </div>

            <hr className="my-4" />

            <h3 className="font-semibold mb-2 text-black">Notes</h3>
            <p className="text-gray-600 text-[14px] leading-5">
              Shows good consistency. improve morning flexibility routine.
            </p>

            <div className="relative ">
  <button className="absolute -bottom-60 w-full border py-2 rounded-md text-[#15705F] hover:bg-gray-50">
    Download Report
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}