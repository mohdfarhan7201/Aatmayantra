// src/components/MyWork.jsx
import React from "react";
import Col1 from '../../assets/col1.jpg';
import Col2 from '../../assets/col2.jpg';
import Col3 from '../../assets/col3.jpg';
import Col4 from '../../assets/col4.jpg';

const MyWork = () => {
  const workItems = [
    {
      id: 1,
      img: Col1,
      title: "Social Media App",
      desc: "Connects you to talented people around the world. Download it from play store.",
    },
    {
      id: 2,
      img: Col2,
      title: "Social Media App",
      desc: "Connects you to talented people around the world. Download it from play store.",
    },
    {
      id: 3,
      img: Col3,
      title: "Social Media App",
      desc: "Connects you to talented people around the world. Download it from play store.",
    },
    {
      id: 4,
      img: Col4,
      title: "Social Media App",
      desc: "Connects you to talented people around the world. Download it from play store.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Why Join Us?</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* ID 1 - Column 1 */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg col-span-1">
          <img
            src={workItems[0].img}
            alt={`work${workItems[0].id}`}
            className="w-full h-72 object-cover transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
            <h3 className="text-xl font-semibold mb-2">{workItems[0].title}</h3>
            <p className="text-sm">{workItems[0].desc}</p>
          </div>
        </div>

        {/* ID 3 - Column 3 */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg md:col-start-3 col-span-1">
          <img
            src={workItems[2].img}
            alt={`work${workItems[2].id}`}
            className="w-full h-72 object-cover transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
            <h3 className="text-xl font-semibold mb-2">{workItems[2].title}</h3>
            <p className="text-sm">{workItems[2].desc}</p>
          </div>
        </div>

     

        {/* ID 2 - Column 2  */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg md:col-start-2 col-span-1 mt-2">
          <img
            src={workItems[1].img}
            alt={`work${workItems[1].id}`}
            className="w-full h-72 object-cover transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
            <h3 className="text-xl font-semibold mb-2">{workItems[1].title}</h3>
            <p className="text-sm">{workItems[1].desc}</p>
          </div>
        </div>

        {/* ID 4 - Column 4  */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg md:col-start-4 col-span-1 mt-2">
          <img
            src={workItems[3].img}
            alt={`work${workItems[3].id}`}
            className="w-full h-72 object-cover transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
            <h3 className="text-xl font-semibold mb-2">{workItems[3].title}</h3>
            <p className="text-sm">{workItems[3].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
