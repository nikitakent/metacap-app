import React from 'react';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './index.css';

function App() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="relative items-center justify-center flex h-screen w-full">
        <img src={`${process.env.PUBLIC_URL}/metacap-cover.png`} alt="Cover" className="absolute inset-0 w-full h-full object-cover z-0" />
        <img 
          src={`${process.env.PUBLIC_URL}/metacap-cover-logo1563.png`} 
          alt="MetaCap Logo" 
          className="logo absolute z-10"
        />
        <button
          onClick={scrollToPortfolio}
          className="absolute bottom-5 z-20; left-1/2 transform -translate-x-1/2 text-white bg-branding-purple hover:bg-branding-marine-navy p-3 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
