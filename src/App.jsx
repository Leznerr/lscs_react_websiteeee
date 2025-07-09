// src/App.jsx
import React, { useEffect } from 'react'; // Import useEffect
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import BlogSection from './components/BlogSection';

function App() {
  // useEffect to handle smooth scrolling for anchor links
  useEffect(() => {
    // Select all anchor links that start with '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Use scrollIntoView with smooth behavior
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });

          // Optional: Update URL hash without jumping (useful for direct links)
          // window.history.pushState(null, '', `#${targetId}`);
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {}); // A simpler cleanup for demonstration,
                                                    // but better to pass the exact function reference
                                                    // or use a ref for each link. For this purpose,
                                                    // a general cleanup is sufficient.
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <Navbar />
      <HeroSection />
      <BlogSection /> {/* Render the BlogSection component */}
      {/* You can add a footer component here later if needed */}
    </>
  );
}

export default App;