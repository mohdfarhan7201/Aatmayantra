import React from "react";
import { Briefcase, Users, BarChart3, ShieldCheck } from "lucide-react";

const MyWork = () => {
  const items = [
    {
      icon: <Briefcase size={18} />,
      title: "Work-Life Balance",
      desc: "With over 10 years of experience, our team of experts has mastered the globe.",
    },
    {
      icon: <Users size={18} />,
      title: "Supportive Team",
      desc: "With over 10 years of experience, our team of experts has mastered the globe.",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Growth & Training",
      desc: "With over 10 years of experience, our team of experts has mastered the globe.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Impactful Work",
      desc: "With over 10 years of experience, our team of experts has mastered the globe.",
    },
  ];

  return (
    <div className="bg-gray-100 py-20 px-20">
      <h1 className="text-4xl font-semibold text-center mb-16">
        Why Join Us?
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-y-12 ml-20">
        
        {/* TOP ROW */}
        <div className="flex justify-start">
          <Card data={items[0]} />
        </div>

        <div className="flex justify-center -ml-90">
          <Card data={items[1]} />
        </div>

        {/* BOTTOM ROW (SHIFTED CENTER) */}
        <div className="flex justify-center translate-x-20 -mr-20">
          <Card data={items[2]} />
        </div>

        <div className="flex justify-end -translate-x-20 ">
          <Card data={items[3]} />
        </div>

      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="w-64 bg-white p-6 rounded-md border shadow-sm text-center">
      <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded mb-3 mx-auto">
        {data.icon}
      </div>
      <h3 className="font-medium text-sm mb-1">{data.title}</h3>
      <p className="text-xs text-gray-500">{data.desc}</p>
    </div>
  );
};

export default MyWork;