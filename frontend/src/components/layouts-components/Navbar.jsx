import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg shadow-lg bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="text-3xl font-bold text-indigo-600">
              Sportify
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-700 text-lg hover:text-indigo-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 text-lg hover:text-indigo-600 transition duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-700 text-lg hover:text-indigo-600 transition duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-700 text-lg hover:text-indigo-600 transition duration-300"
            >
              Contact
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-gray-700 text-lg hover:text-indigo-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 text-lg hover:text-indigo-600 transition duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="block text-gray-700 text-lg hover:text-indigo-600 transition duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-gray-700 text-lg hover:text-indigo-600 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
