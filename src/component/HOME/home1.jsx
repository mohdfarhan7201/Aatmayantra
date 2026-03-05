// import React from 'react';

// const Hero = () => {
//   return (
//     <div
//   className="bg-[url('./assets/home-bg.svg')] sm:bg-[url('./assets/home-bg.svg')] lg:bg-[url('./assets/home-bg.svg')] h-64 bg-cover bg-center w-full min-h-screen bg-no-repeat flex items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 animate-fadeIn"
// >
//       <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl gap-8 sm:gap-10 py-10">
//         {/* Left Text */}
//         <div className="md:w-1/2 text-black">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug sm:leading-snug md:leading-tight">
//             Experience the Power <br className="hidden md:block" /> of <span className="text-green-600">Stillness</span>
//           </h1>
//           <p className="text-xs sm:text-sm md:text-base text-gray-800 mb-6 max-w-md sm:max-w-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus dignissimos
//             quaerat aut non est quod for me. Reiciendis suscipit architecto excepturi explicabo a..
//           </p>
//           <button className="bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(55,218,188,1))] hover:bg-green-700 transition-all duration-300 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md text-sm sm:text-base">
//             Join us
//           </button>
//         </div>

//         {/* Right Badge */}
//         <div className="md:w-1/3 text-right self-start sm:self-center md:self-end mt-8 sm:mt-12 md:mt-32 lg:mt-60">
//           <h2 className="text-green-600 text-xl sm:text-2xl font-bold">
//             3600+ <span className="text-gray-800 font-medium">Employee</span>
//           </h2>
//           <p className="text-xs sm:text-sm text-gray-700 mt-2 max-w-[250px] ml-auto md:ml-40">
//             Our employees are very easy and have reliable and skilled solution for clients.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;





import React from 'react';

const Hero = () => {
  return (
    <div
      className="bg-[url('./assets/home-bg.svg')] bg-cover bg-center bg-no-repeat w-full min-h-screen flex items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 animate-fadeIn"
    >
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl gap-10 py-10">

        {/* Left Text */}
        <div className="w-full md:w-1/2 text-black">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug md:leading-tight">
            Experience the Power <br className="hidden md:block" /> of <span className="text-[#00735E]">Stillness</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-800 mb-6 max-w-md sm:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus dignissimos
            quaerat aut non est quod for me. Reiciendis suscipit architecto excepturi explicabo a..
          </p>
          <button className="bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(55,218,188,1))] hover:bg-green-700 transition-all duration-300 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md text-sm sm:text-base">
            Join us
          </button>
        </div>

        {/* Right Badge */}
        <div className="w-full md:w-1/3 text-left md:text-right mt-10 md:mt-32 lg:mt-68">
        {/* <div className="h-50 w-1 bg-orange-400 mx-auto mt-4 mb-6 rounded-full"></div> */}
          <h2 className="text-[#00735E] text-xl sm:text-2xl font-bold">
            3600+ <span className="text-gray-800 font-medium">Employee</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 mt-2 max-w-[250px] md:ml-auto">
            Our employees are very easy and have reliable and skilled solution for clients.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
