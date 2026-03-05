import React from 'react';
import yogaImage from '../../assets/contact1.svg'; // Update the path as needed

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-white min-h-screen md:h-screen">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center pt-10 md:pt-20 space-y-6 md:space-y-10">
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold text-gray-800 leading-snug text-center md:text-left md:mt-20 sm:mt-10 mt-10">
          Breathe deeply, live mindfully,<br />
          Begin your journey to inner peace.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left lg:mb-50 md:mb-30">
          Embrace the art of mindful living through daily yoga,
          meditation, and breathwork. Let every posture guide
          you toward clarity, balance, and inner peace
          as you reconnect with your true self on and off the mat.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:items-end mt-10 md:mt-10 lg:mt-40">
        <img
          src={yogaImage}
          alt="Yoga Pose"
          className="w-65 sm:w-72 md:w-80 lg:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Contact;




