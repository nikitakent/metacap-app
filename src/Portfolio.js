import React from 'react';

function Portfolio() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio h-screen py-16 bg-branding-marine-navy text-white font-sailors flex flex-col justify-center relative">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-branding-purple">Selected Investments:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <a href="https://altoira.com/" target="_blank" rel="noopener noreferrer" className="portfolio-item group">
          <img src="/portfolio-logos/alto.png" alt="Alto" className="h-32 w-32 mb-4 rounded-lg" />
          <p className="text-center group-hover:hidden">Alto</p>
          <p className="text-center hidden group-hover:block">Alto is an IRA-enabled alternative investing platform.</p>
        </a>
        <a href="https://doorvest.com/" target="_blank" rel="noopener noreferrer" className="portfolio-item group">
          <img src="/portfolio-logos/doorvest.png" alt="Doorvest" className="h-32 w-32 mb-4 rounded-lg" />
          <p className="text-center group-hover:hidden">Doorvest</p>
          <p className="text-center hidden group-hover:block">Online platform for real estate sourcing, renovating, leasing and management.</p>
        </a>
        <a href="https://kneron.com/ja" target="_blank" rel="noopener noreferrer" className="portfolio-item group">
          <img src="/portfolio-logos/kneron.png" alt="Kneron" className="h-32 w-32 mb-4 rounded-lg" />
          <p className="text-center group-hover:hidden">Kneron</p>
          <p className="text-center hidden group-hover:block">Kneron is a leading provider of edge AI solutions.</p>
        </a>
        <a href="https://www.sote.com/" target="_blank" rel="noopener noreferrer" className="portfolio-item group">
          <img src="/portfolio-logos/sote.png" alt="Sote" className="h-32 w-32 mb-4 rounded-lg" />
          <p className="text-center group-hover:hidden">Sote</p>
          <p className="text-center hidden group-hover:block">Supply chain tools for international trade with Africa.</p>
        </a>
        <a href="https://emtech.com/" target="_blank" rel="noopener noreferrer" className="portfolio-item group">
          <img src="/portfolio-logos/emtech.png" alt="Emtech" className="h-32 w-32 mb-4 rounded-lg" />
          <p className="text-center group-hover:hidden">Emtech</p>
          <p className="text-center hidden group-hover:block">Modern central banking for the fintech era.</p>
        </a>
        <a href="https://metacapventures.com" target="_blank" rel="noopener noreferrer" className="portfolio-item group">
          <img src="/portfolio-logos/boilerplate.png" alt="Coming Soon" className="h-32 w-32 mb-4 rounded-lg" />
          <p className="text-center group-hover:hidden">Coming Soon</p>
          <p className="text-center hidden group-hover:block">Coming soon</p>
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
