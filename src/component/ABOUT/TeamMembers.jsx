import React, { useState } from "react";

// 👇 Replace these imports with your own images if needed
import img1 from "../../assets/team1.jpeg";
import img2 from "../../assets/team2.jpeg";
import img3 from "../../assets/team3.jpeg";
import img4 from "../../assets/team4.jpeg";
import img5 from "../../assets/team5.jpg";
import img6 from "../../assets/team6.jpg";
import img7 from "../../assets/team7.jpg";
import img8 from "../../assets/team8.jpg";

const teamData = [
  { name: "Eloise Bridgerton", role: "Meditation Instructor", image: img1 },
  { name: "Jeremy Gilbert", role: "Meditation Instructor", image: img2 },
  { name: "Hayley Forbes", role: "Meditation Instructor", image: img3 },
  { name: "Stefan Salvatore", role: "Meditation Instructor", image: img4 },
  { name: "Anjali Sharma", role: "Meditation Instructor", image: img5 },
  { name: "Ravi Kumar", role: "Yoga Trainer", image: img6 },
  { name: "Sita Verma", role: "Wellness Coach", image: img7 },
  { name: "Kabir Mehra", role: "Spiritual Guide", image: img8 },
];

const TeamMembers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(teamData.length / cardsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const paginatedData = teamData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <section className="bg-white py-16 px-4 w-full flex justify-center">
      <div className="w-full max-w-[1440px]">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center">Meet The team...</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-center mb-12">
          Discover Your Best And Most Powerful Self With Our Exclusive Health And Wealth Services…..
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {paginatedData.map((member, index) => (
            <div
              key={index}
              className="w-[240px] h-[350px] bg-[#f7f6ff] rounded-[10px] shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center group"
            >
              <div className="overflow-hidden rounded-full w-24 h-24 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center mt-auto gap-4 text-xl text-blue-500">
                <i className="fab fa-facebook hover:text-blue-600"></i>
                <i className="fab fa-instagram hover:text-pink-500"></i>
                <i className="fab fa-twitter hover:text-sky-400"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-200 disabled:opacity-40"
          >
            &lt;
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 rounded-full text-sm font-semibold border ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-200 disabled:opacity-40"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
