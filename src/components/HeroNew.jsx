import React from 'react';

export default function HeroNew() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Texture overlay - add grunge texture here */}
      <div className="absolute inset-0 opacity-10 bg-noise"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            You shouldn't have to choose between impact and efficiency
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            I bring AI and automation to community organizations and nonprofits—not as a vendor, 
            but as someone who sits with your team and builds what actually works.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-none border-2 border-red-600 transition-all transform hover:scale-105"
            >
              Let's Talk About Your Workflow
            </a>
            <a 
              href="#process" 
              className="px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 text-white font-bold text-lg rounded-none border-2 border-white transition-all"
            >
              See How This Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
