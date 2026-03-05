import React from "react";
import mainYogaImage from "../../assets/journey.svg";
import avatar1 from "../../assets/journey1.jpeg";
import avatar2 from "../../assets/journey2.jpeg";

const Journeyjourneyn = () => {
  return (
    <section
      className="relative font-sans py-10 px-4 sm:px-6 lg:px-20"
      style={{ backgroundColor: "rgba(240, 253, 251, 0.24)" }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
            Our Journey So Far
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-md">
            We’ve helped thousands embrace better living through yoga.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4 w-full max-w-md">
            <div>
              <h3 className="text-3xl font-bold text-green-700">10K+</h3>
              <p className="text-sm text-gray-600">Projects Done</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">30K+</h3>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">5K+</h3>
              <p className="text-sm text-gray-600">Cup of Coffee</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">1K+</h3>
              <p className="text-sm text-gray-600">Projects in Queue</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          {/* Background box */}
          <div className="absolute bottom-0 right-0 w-[90%] h-[90%] bg-teal-100 rounded-lg z-0 translate-x-6 translate-y-6  md:w-[60%] md:h-[-60%]  sm:w-[60%] sm:h-[-60%]"></div>

          {/* Main Image */}
          <img
            src={mainYogaImage}
            alt="Yoga Journey"
            className="relative z-10 w-[85%] sm:w-[50%] md:w-[50%] max-w-[500px] rounded-lg object-cover"
          />

          {/* Feedback boxes only visible on large screens */}
          <div className="hidden lg:block">
            {/* Top Right Feedback */}
            <div className="absolute top-[40%] right-[-5%] transform -translate-y-1/2 bg-white shadow-xl rounded-xl p-4 w-[300px] max-w-[260px] z-20">
              <div className="flex items-center gap-3">
                <img
                  src={avatar2}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs text-gray-700">
                    Very inspiring and relaxing sessions. Loved it!
                  </p>
                  <span className="text-[10px] text-gray-500 block mt-1">
                    Sarah, Yoga Enthusiast
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Left Feedback */}
            <div className="absolute top-[95%] left-[15%] transform -translate-y-1/2 bg-white shadow-xl rounded-xl p-4 w-[300px] max-w-[260px] z-20">
              <div className="flex items-center gap-3">
                <img
                  src={avatar1}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs text-gray-700">
                    Blessing welcomed ladyship she met humoured sir breeding her.
                  </p>
                  <span className="text-[10px] text-gray-500 block mt-1">
                    Linda, Project Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journeyjourneyn;
