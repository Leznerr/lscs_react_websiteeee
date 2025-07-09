// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <header
      className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white shadow-lg' // Styles when scrolled
          : 'bg-gray-200 bg-opacity-95 backdrop-blur-md' // Original styles (using approximate Tailwind for rgba(218, 215, 215, 0.95))
      }`}
    >
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-8 md:px-4">
        <div className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          My portfolio?
        </div>
        <ul className="flex list-none space-x-8"> {/* gap-2rem is equivalent to space-x-8 */}
          <li>
            <a
              href="#home"
              className="text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-600 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-600 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Blogs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;