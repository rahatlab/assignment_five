import { useState } from "react";
import logo from '../assets/logo-text.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile: Hamburger */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile: Logo (center) */}
          <div className="md:hidden flex items-center gap-2">
            {/* <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DS</span>
            </div> */}
            <span className="">
              <img src={logo} className="w-28" alt="logo for dev stack" />
            </span>
          </div>

          {/* Mobile: Sign In + Sign Up */}
          <div className="md:hidden flex items-center gap-2">
            <a href="#" className="text-gray-600 text-sm font-medium px-2">Sign In</a>
            <button className="gradient-brand text-white px-4 py-1.5 rounded-full text-sm font-medium">
              Sign Up
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-sm">DS</span> */}
              </div>
              <span className="text-xl font-bold">
                <img src={logo} alt="logo for dev stack" />
              </span>
            </div>

            {/* Center: Nav Links */}
            <div className="flex items-center gap-8">
              <a href="#" className="text-pink-500 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition font-medium">Technologies</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition font-medium">Projects</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition font-medium">Contact</a>
            </div>

            {/* Right: Auth Buttons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition font-medium">Sign In</a>
              <button className="gradient-brand text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-3">
            <a href="#" className="block text-pink-500 font-medium">Home</a>
            <a href="#" className="block text-gray-700 hover:text-pink-500">Technologies</a>
            <a href="#" className="block text-gray-700 hover:text-pink-500">Projects</a>
            <a href="#" className="block text-gray-700 hover:text-pink-500">About</a>
            <a href="#" className="block text-gray-700 hover:text-pink-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
