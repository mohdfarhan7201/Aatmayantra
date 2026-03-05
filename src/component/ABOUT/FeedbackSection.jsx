import React from "react";
import avatar1 from "../../assets/avtar1.jpeg";
import avatar2 from "../../assets/avtar2.jpeg";
import avatar3 from "../../assets/avtar3.jpeg";
import avatar4 from "../../assets/avtar4.jpeg";
import avatar5 from "../../assets/avtar5.jpeg";
import avatar6 from "../../assets/avtar6.jpeg";

const feedbacks = [
  {
    name: "Blmosaurus",
    role: "Graphic Designer",
    feedback:
      "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing.",
    stars: 5,
    avatar: avatar1,
  },
  {
    name: "Crystal Maiden",
    role: "UI/UX Designer",
    feedback:
      "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
    stars: 5,
    avatar: avatar2,
  },
  {
    name: "Dazzle Healer",
    role: "Front End Developer",
    feedback:
      "This kit exceeded my expectations! The components are versatile and make implementation much easier.",
    stars: 5,
    avatar: avatar3,
  },
  {
    name: "Roshan Pro Max",
    role: "UI/UX Designer",
    feedback:
      "Perfect for quick prototyping! The designs are professional and work seamlessly with my workflow.",
    stars: 5,
    avatar: avatar4,
  },
  {
    name: "Mirana Marci",
    role: "3D Designer",
    feedback:
      "I was blown away by how complete this UI kit is. It has everything I need, from assets to components.",
    stars: 5,
    avatar: avatar5,
  },
  {
    name: "Hearts of Taras",
    role: "Logo Designer",
    feedback:
      "Amazing work! The color schemes are vibrant, and the icons fit perfectly with all my projects.",
    stars: 5,
    avatar: avatar6,
  },
];

const FeedbackSection = () => {
  return (
    <section
      className="px-4 sm:px-6 lg:px-20 py-12 lg:py-20 font-sans"
      style={{ backgroundColor: "rgba(240, 253, 251, 0.24)" }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <p className="text-base sm:text-lg text-blue-600 font-semibold mb-3 tracking-wide">
            Client Feedback
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            What They Say After Joining
          </h2>
        </div>
        <a
          href="#"
          className="text-blue-600 text-sm sm:text-base font-medium hover:underline flex items-center gap-1"
        >
          View All <span>→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md min-h-[280px] transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.04] cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
            <div className="text-orange-400 mb-3 text-lg">
              {"★".repeat(item.stars)}
            </div>
            <p className="text-gray-700 text-base leading-relaxed font-medium">
              {item.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
