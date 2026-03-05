import React from "react";
import { FaCircle } from "react-icons/fa";
import Life1 from '../../assets/life1.svg';
import Life2 from '../../assets/life2.svg';

const testimonials = [
  {
    name: "Elizabeth Thomas",
    role: "Working at Aatmayanta makes me feel peaceful and purposeful every single day.",
    image: Life1
  },
  {
    name: "Chris William",
    role: "I love being of such a positive and caring community.",
    image: Life2
  }
];

const LifeAtAatmayantra = () => {
  return (
    <section className="bg-[#f1fdf7] py-12 px-4 sm:px-8 md:px-16 lg:px-28 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-[#111827]">
        Life at <span className="text-[#0B8F74]">Aatmayantra</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-10">
        Experience growth, calmness and connection every day
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md relative"
          >
            {/* <div className="w-60 h-60 rounded-full border border-gray-300 relative mb-6"> */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-75 h-75  rounded-full"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#0B8F74] rounded-b-full"></div> */}
            {/* </div> */}
            <h3 className="text-lg font-semibold text-[#111827]">
              {testimonial.name}
            </h3>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">
              {testimonial.role}
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        <FaCircle className="text-[#0B8F74] text-xs" />
        <FaCircle className="text-gray-300 text-xs" />
        <FaCircle className="text-gray-300 text-xs" />
      </div>
    </section>
  );
};

export default LifeAtAatmayantra;
