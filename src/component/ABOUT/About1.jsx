import React, { useEffect, useState } from "react";
import yoga1 from "../../assets/yoga1.svg";
import yoga2 from "../../assets/yoga2.svg";
import mobileYoga from "../../assets/mobile responsive.svg"; // mobile-only image

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative px-4 sm:px-6 lg:px-20 py-12 flex flex-col items-center gap-10 xl:m-5 "
      style={{ backgroundColor: "rgba(240, 253, 251, 0.24)" }}
    >
      {/* ===== Common Top Heading (Visible on All Screens) ===== */}
      <div className="w-full text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Find Calm In Every Breath
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Discover the peace within through guided yoga and mindful living
        </p>
      </div>

      {/* ===== Mobile Image Section ===== */}
      <div className="flex sm:hidden flex-col items-center text-center mb-10">
        <div className="mt-2 w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg transition-all duration-700 ease-out bg-white flex items-center justify-center mx-auto">
          <img
            src={mobileYoga}
            alt="Mobile Yoga"
            className={`w-full h-auto object-cover transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          />
        </div>
        <div
          className="mt-4 w-[200px] h-[6px] rounded-full"
          style={{ backgroundColor: "rgba(29, 116, 100, 0.57)" }}
        />
      </div>

      {/* ===== Tablet View Yoga1 & Yoga2 Images ===== */}
      <div className="hidden sm:block lg:hidden relative w-full min-h-[400px] mb-10">
        <div className="absolute left-[15%] top-0 w-[40%] max-w-[250px]">
          <img
            src={yoga1}
            alt="Yoga Pose 1"
            className="w-full h-auto object-cover rounded-[10px] shadow-lg"
          />
        </div>
        <div className="absolute right-[15%] top-[120px] w-[40%] max-w-[250px]">
          <img
            src={yoga2}
            alt="Yoga Pose 2"
            className="w-full h-auto object-cover rounded-[10px] shadow-lg"
          />
        </div>
      </div>

      {/* ===== Desktop Graphics + About Section in Flex Row (1024px+) ===== */}
      <div className="hidden lg:flex w-full justify-between items-start">
        {/* Left Graphics Section */}
        <div className="relative w-1/2 min-h-[700px]">
          <div
            className="absolute"
            style={{
              width: "40%",
              maxWidth: "300px",
              top: "10%",
              left: "5%",
            }}
          >
            <img
              src={yoga1}
              alt="Yoga Pose 1"
              className="w-full h-auto object-cover rounded-[10px] shadow-lg"
            />
          </div>

          <div
            className="absolute"
            style={{
              width: "40%",
              maxWidth: "300px",
              top: "40%",
              left: "55%",
            }}
          >
            <img
              src={yoga2}
              alt="Yoga Pose 2"
              className="w-full h-auto object-cover rounded-[10px] shadow-lg"
            />
          </div>

          <div
            className="absolute bg-white shadow-xl rounded-xl text-center p-3"
            style={{
              width: "50%",
              maxWidth: "200px",
              top: "0%",
              left: "49%",
            }}
          >
            <h4 className="font-bold text-xl lg:text-2xl">30,000+</h4>
            <p className="text-xs text-gray-500 mt-2">
              Sales in July 2021 with 5 star ratings and happy clients.
            </p>
            <p className="text-sm font-medium text-gray-700 mt-3">
              Trusted by top professionals
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-1">
              {["https://randomuser.me/api/portraits/men/1.jpg", "https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/3.jpg"].map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                />
              ))}
              {["FJ", "IU", "QV"].map((initials, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full text-white flex items-center justify-center text-xs font-semibold transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundColor:
                      index === 0 ? "#f97316" : index === 1 ? "#14b8a6" : "#6366f1",
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute bg-white shadow-md rounded-[10px] flex-col justify-center items-center px-4 py-4"
            style={{
              width: "50%",
              maxWidth: "178px",
              top: "49%",
              left: "10%",
            }}
          >
            <p className="text-sm font-medium text-gray-600">Best ratings</p>
            <div className="flex gap-1 text-xl mt-2">😃😍🔥👍😁</div>
          </div>
        </div>

        {/* About Section Text */}
        <div className="w-1/2 pl-6 pt-20">
          <p className="uppercase text-teal-600 tracking-widest text-sm font-semibold mb-2">
            A bit
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            About Us
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl mb-6 leading-relaxed sm:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatidf
            quaerat aut non est quod for me. Reicienhtfngh suscipit architecto.
          </p>
          <button className="bg-teal-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg">
            Explore More
          </button>
        </div>
      </div>

      {/* ===== About Text on Tablet and Mobile ===== */}
      <div className="block lg:hidden w-full text-center">
        <p className="uppercase text-teal-600 tracking-widest text-sm font-semibold mb-2">
          A bit
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          About Us
        </h2>
        <p className="text-gray-500 text-lg sm:text-xl mb-6 leading-relaxed sm:leading-8 xl:leading-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatidf
          quaerat aut non est quod for me. Reicienhtfngh suscipit architecto.
        </p>
        <button className="bg-teal-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;