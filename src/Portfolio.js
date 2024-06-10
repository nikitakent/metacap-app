import React from 'react';

function Portfolio() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio h-screen py-16 bg-branding-marine-navy text-white font-sailors flex flex-col justify-center relative">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-branding-purple">Selected Investments:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Add your logos and links here */}
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="portfolio-item">
          <img src="/portfolio-logos/alto.png" alt="Alto" className="h-20 mb-4" />
          <p className="text-center">Alto</p>
        </a>
        <a href="/portfolio-logos/doorvest.png" target="_blank" rel="noopener noreferrer" className="portfolio-item">
          <img src="/portfolio-logos/doorvest.png" alt="Doorvest" className="h-20 mb-4" />
          <p className="text-center">Doorvest</p>
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="portfolio-item">
          <img src="/portfolio-logos/kneron.png" alt="Kneron" className="h-20 mb-4" />
          <p className="text-center">Kneron</p>
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="portfolio-item">
          <img src="/portfolio-logos/sote.png" alt="Logo 4" className="h-20 mb-4" />
          <p className="text-center">Sote</p>
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="portfolio-item">
          <img src="/portfolio-logos/emtech.png" alt="Emtech" className="h-20 mb-4" />
          <p className="text-center">Emtech</p>
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="portfolio-item">
          <img src="/portfolio-logos/boilerplate.png" alt="Coming Soon" className="h-20 mb-4" />
          <p className="text-center">coming soon</p>
        </a>
      </div>

      <button
        onClick={scrollToContact}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white bg-branding-purple hover:bg-branding-tennis-green p-3 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

export default Portfolio;
