import React, { useState } from "react";
import { FaInstagram, FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  // Track open sections (for mobile accordion)
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <footer className="bg-[#e3f6f5] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-10">
          <img src={Logo} alt="logo" className="w-16 h-16 rounded-full mb-3" />
          <h1 className="text-2xl font-bold tracking-wider">AATMAYANTRA</h1>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-left">
          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-3 text-lg">AR-SHAKIR</h2>
            <p className="hover:text-gray-900 transition">arshakir123@gmail.com</p>
            <p className="mb-3 hover:text-gray-900 transition">+458 845 5849</p>
            <div className="flex gap-4 mt-2">
              <FaInstagram className="cursor-pointer text-xl hover:text-pink-500 transition" />
              <FaGoogle className="cursor-pointer text-xl hover:text-red-500 transition" />
              <FaFacebookF className="cursor-pointer text-xl hover:text-blue-600 transition" />
              <FaTwitter className="cursor-pointer text-xl hover:text-sky-500 transition" />
            </div>
          </div>

          {/* Blog */}
          <div>
            <h2 className="font-semibold mb-3 text-lg">Blog</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-900 cursor-pointer transition">Company</li>
              <li className="hover:text-gray-900 cursor-pointer transition">Career</li>
              <li className="hover:text-gray-900 cursor-pointer transition">Mobile</li>
              <li className="hover:text-gray-900 cursor-pointer transition">How it works</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h2 className="font-semibold mb-3 text-lg">About</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-900 cursor-pointer transition">Contacts</li>
              <li className="hover:text-gray-900 cursor-pointer transition">About us</li>
              <li className="hover:text-gray-900 cursor-pointer transition">FAQ</li>
              <li className="hover:text-gray-900 cursor-pointer transition">Our Team</li>
              <li className="hover:text-gray-900 cursor-pointer transition">Terms of Service</li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h2 className="font-semibold mb-3 text-lg">Product</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-900 cursor-pointer transition">Terms of use</li>
              <li className="hover:text-gray-900 cursor-pointer transition">Privacy policy</li>
              <li className="hover:text-gray-900 cursor-pointer transition">Log in</li>
            </ul>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="sm:hidden space-y-4 text-sm">
          {/* Contact */}
          <div>
            <button
              onClick={() => toggle("contact")}
              className="w-full flex justify-between items-center font-semibold text-lg mb-2"
            >
              AR-SHAKIR <IoIosArrowDown className={`transition ${open === "contact" ? "rotate-180" : ""}`} />
            </button>
            {open === "contact" && (
              <div className="pl-2">
                <p>arshakir123@gmail.com</p>
                <p className="mb-2">+458 845 5849</p>
                <div className="flex gap-4 mt-2 justify-center">
                  <FaInstagram className="cursor-pointer text-xl hover:text-pink-500" />
                  <FaGoogle className="cursor-pointer text-xl hover:text-red-500" />
                  <FaFacebookF className="cursor-pointer text-xl hover:text-blue-600" />
                  <FaTwitter className="cursor-pointer text-xl hover:text-sky-500" />
                </div>
              </div>
            )}
          </div>

          {/* Blog */}
          <div>
            <button
              onClick={() => toggle("blog")}
              className="w-full flex justify-between items-center font-semibold text-lg mb-2"
            >
              Blog <IoIosArrowDown className={`transition ${open === "blog" ? "rotate-180" : ""}`} />
            </button>
            {open === "blog" && (
              <ul className="space-y-2 pl-2">
                <li>Company</li>
                <li>Career</li>
                <li>Mobile</li>
                <li>How it works</li>
              </ul>
            )}
          </div>

          {/* About */}
          <div>
            <button
              onClick={() => toggle("about")}
              className="w-full flex justify-between items-center font-semibold text-lg mb-2"
            >
              About <IoIosArrowDown className={`transition ${open === "about" ? "rotate-180" : ""}`} />
            </button>
            {open === "about" && (
              <ul className="space-y-2 pl-2">
                <li>Contacts</li>
                <li>About us</li>
                <li>FAQ</li>
                <li>Our Team</li>
                <li>Terms of Service</li>
              </ul>
            )}
          </div>

          {/* Product */}
          <div>
            <button
              onClick={() => toggle("product")}
              className="w-full flex justify-between items-center font-semibold text-lg mb-2"
            >
              Product <IoIosArrowDown className={`transition ${open === "product" ? "rotate-180" : ""}`} />
            </button>
            {open === "product" && (
              <ul className="space-y-2 pl-2">
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Log in</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#d9f3f2] py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-md font-bold">
          <p>© {year} AATMAYANTRA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
