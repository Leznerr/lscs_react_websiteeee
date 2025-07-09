// src/components/HeroSection.jsx
import React from 'react';

function HeroSection() {
  return (
    <section
      id="home"
      // Add the linear gradient here, and ensure text is white
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden
                 bg-gradient-to-br from-indigo-500 to-purple-600" // <-- ADD THIS CLASS FOR THE BASE GRADIENT
    >
      {/* Background with animation - This will layer on top of the gradient */}
      <div
        className="absolute inset-0 bg-no-repeat z-0"
        style={{
          backgroundImage: 'my-react-blog/src/index.css my-react-blog/public/faded_gallery-OfdOEdGYiuk-unsplash copy.jpg',
          animation: 'moving 30s linear infinite',
          backgroundSize: '100000%',
          backgroundPosition: 'center', 
          margin: '100px' // This creates the "inset" effect of the background relative to the section
        }}
      ></div>

      {/* Hero Content (add z-10 here to ensure it's above the background) */}
      <div className="z-10 relative px-4 md:px-0"> {/* Removed max-w-4xl */}
        <div className="profile-image-container mb-6 animate-fadeInUp">
            <img src="/image.png" alt="Renzel Vince Eleydo" className="rounded-full w-48 h-48 mx-auto object-cover border-4 border-white shadow-lg" />
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fadeInUp">
          Hello, I'm Renzel Vince E. Eleydo
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-4 opacity-90 animate-fadeInUp delay-100">
          First Year Computer Science Student
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
          I develop things.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 animate-fadeInUp delay-300">
          <div className="info-card bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-15 hover:translate-y-[-5px] shadow-lg">
            <h3 className="text-base mb-2 opacity-80 font-normal">Location</h3>
            <p className="text-lg font-semibold">Taft Manila</p>
          </div>
          <div className="info-card bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-15 hover:translate-y-[-5px] shadow-lg">
            <h3 className="text-base mb-2 opacity-80 font-normal">Hobbies</h3>
            <p className="text-lg font-semibold">Reading, Gaming, Gym, Coding</p>
          </div>
          <div className="info-card bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-15 hover:translate-y-[-5px] shadow-lg">
            <h3 className="text-base mb-2 opacity-80 font-normal">About me</h3>
            <p className="text-lg font-semibold">Soon to be full stack developer</p>
          </div>
          <div className="info-card bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-15 hover:translate-y-[-5px] shadow-lg">
            <h3 className="text-base mb-2 opacity-80 font-normal">Education</h3>
            <p className="text-lg font-semibold">Computer Science Degree</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex justify-center gap-8 mb-8 animate-fadeInUp delay-400">
          <a
            href="https://www.linkedin.com/in/renzel-vince-6689582b5/"
            className="contact-link text-white text-lg px-6 py-3 border border-white border-opacity-30 rounded-full transition-all duration-300 backdrop-blur-md hover:bg-white hover:bg-opacity-20 hover:translate-y-[-2px] hover:shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Leznerr"
            className="contact-link text-white text-lg px-6 py-3 border border-white border-opacity-30 rounded-full transition-all duration-300 backdrop-blur-md hover:bg-white hover:bg-opacity-20 hover:translate-y-[-2px] hover:shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 GitHub
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#skills"
          className="cta-button inline-block px-8 py-4 bg-white bg-opacity-20 text-white rounded-full font-semibold transition-all duration-300 backdrop-blur-md border-2 border-white border-opacity-30 hover:bg-opacity-30 hover:translate-y-[-3px] hover:shadow-xl animate-fadeInUp delay-500"
        >
          View My Blogs
        </a>
      </div>
    </section>
  );
}

export default HeroSection;