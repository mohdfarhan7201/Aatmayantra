import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Only show full navbar on these routes
  const allowedPaths = ["/", "/about", "/service", "/carrier", "/contact"];

  useEffect(() => {
    setShowNavbar(allowedPaths.includes(location.pathname));
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const currentPath = location.pathname;

  const activeStyle =
    "bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] text-white px-4 py-1 rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out";

  const defaultStyle = "text-gray-800 hover:text-black-700";

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 
      ${showNavbar ? "bg-[#E1F7F5] shadow-md" : "bg-transparent shadow-none"}`}
    >
      {showNavbar ? (
        <>
          {/* Top row */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
              <span className="text-lg sm:text-xl font-Aboreto">AATMAYANTRA</span>
            </div>

            {/* Menu links */}
            <div className="hidden md:flex items-center text-base lg:text-lg xl:text-xl gap-4 lg:gap-6">
              <Link to="/" className={currentPath === "/" ? activeStyle : defaultStyle}>Home</Link>
              <Link to="/about" className={currentPath === "/about" ? activeStyle : defaultStyle}>About</Link>
              <Link to="/service" className={currentPath === "/service" ? activeStyle : defaultStyle}>Service</Link>
              <Link to="/carrier" className={currentPath === "/carrier" ? activeStyle : defaultStyle}>Carrier</Link>
              <Link to="/contact" className={currentPath === "/contact" ? activeStyle : defaultStyle}>Contact</Link>
            </div>

            {/* Login + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                to="/login"
                onClick={closeMenu}
                className="bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(55,218,188,1))] text-white px-3 sm:px-4 py-1 rounded-full hover:bg-green-800 transition text-sm sm:text-base"
              >
                Login
              </Link>
              <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dropdown (mobile) */}
          {isOpen && (
            <div className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col gap-2 text-sm sm:text-base">
              <Link to="/" onClick={closeMenu} className="text-black hover:text-green-700">Home</Link>
              <Link to="/about" onClick={closeMenu} className="text-black hover:text-green-700">About</Link>
              <Link to="/service" onClick={closeMenu} className="text-black hover:text-green-700">Service</Link>
              <Link to="/carrier" onClick={closeMenu} className="text-black hover:text-green-700">Carrier</Link>
              <Link to="/contact" onClick={closeMenu} className="text-black hover:text-green-700">Contact</Link>
            </div>
          )}
        </>
      ) : (
        // ✅ Back Button only on other pages
        <div className="flex items-center gap-2 px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-lg font-medium
                       bg-[rgba(0,0,0,0.6)] text-white px-4 py-2 rounded-full 
                       hover:bg-[rgba(0,0,0,0.8)] transition-all duration-300"
          >
            <FaArrowLeft />
            <span className="hidden md:inline lg:inline"> Back </span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;