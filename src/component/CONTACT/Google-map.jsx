import React from 'react';
// import Gmap from '../../assets/gmap.svg';

const MapSection = () => {
  return (
    <div className="w-full px-4 md:px-16 py-12 bg-[#f3f4f6]">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Location</h3>
      
      {/* Embedded Google Map */}
      <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg ">
        <iframe
          title="Google Map"
          src=""
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full "
        ></iframe>
      </div>

      {/* Button to open in Google Maps */}
      <div className="mt-6 text-center">
        <a
          href="https://www.google.com/maps/place/Gorakhpur+Railway+Station/@26.7596083,83.3792764,17z/data=!3m1!4b1!4m6!3m5!1s0x3991459ed68255cd:0x63c57c1fce02e62!8m2!3d26.7596035!4d83.3818513!16s%2Fg%2F11h22r_vpy?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(55,218,188,1))] hover:bg-[#16846f] text-white px-6 py-3 rounded-full transition duration-300"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapSection;
