import React from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-0">
      <div className="bg-[#e1f7f53d] px-4 md:px-6 py-10 font-sans flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 md:gap-8">
          {/* Left */}
          <div className="flex-1 min-w-[280px]">
            {/* <h2 className="text-2xl md:text-3xl mb-2 font-semibold md:text-left text-centre">Contact Us</h2> */}
            <h2 className="text-2xl md:text-3xl mb-10 font-semibold text-center md:text-left">
       Contact Us
      </h2>
            <p className="text-[15px] md:text-[16px] text-gray-700 mb-5">
              We are committed to processing the information in order to contact you and talk about your project.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[15px] md:text-[16px]">
                <FaEnvelope className="text-[#08675a] text-[18px]" />
                example@teamwebflow.com
              </li>
              <li className="flex items-center gap-3 text-[15px] md:text-[16px]">
                <FaMapMarkerAlt className="text-[#08675a] text-[18px]" />
                4074 Ebert Summit Suite 375, Lake Leonardchester
              </li>
              <li className="flex items-center gap-3 text-[15px] md:text-[16px]">
                <FaPhoneAlt className="text-[#08675a] text-[18px]" />
                +44 123 654 7890
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="flex-1 min-w-[280px]">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-gray-300 rounded-md text-[15px]"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md text-[15px]"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="p-3 border border-gray-300 rounded-md text-[15px]"
              />
              <textarea
                placeholder="Message"
                className="p-3 border border-gray-300 rounded-md text-[15px] h-[120px] resize-none"
              />
              <button
                type="submit"
                className="bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] text-white py-3 rounded-md text-[26px] hover:bg-[#054a40] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
