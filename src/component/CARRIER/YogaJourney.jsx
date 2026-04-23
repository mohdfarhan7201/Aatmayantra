import React from "react";

// Importing SVG images from assets folder
import img1 from '../../assets/img1.svg';
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";
import img6 from "../../assets/img6.svg";

// Image array
const images = [img1, img2, img3, img4, img5, img6];

const YogaSection = () => {
  return (
    <section className="bg-[#f1fdf7] py-10 px-4 text-center ">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
        Join Our Yoga Journey<span className="text-black"> !</span>
      </h2>

      {/* Subheading */}
      <p className="text-gray-700 mt-3 text-sm sm:text-base md:text-lg">
        Empower lives through wellness and mindfulness
      </p>

      {/* Orange underline */}
      <div className="h-1 w-50 bg-orange-400 mx-auto mt-4 mb-6 rounded-full"></div>

      {/* Responsive SVG Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto px-4">

        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Yoga ${index + 1}`}
            className="rounded-lg shadow-md w-full h-32 sm:h-40 md:h-44 object-contain"
          />
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(55,218,188,1))] text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 transition">
        View Open Positions
      </button>
    </section>
  );
};

export default YogaSection;
