import React from 'react';

export default function HeroNew() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-bg to-brand-bg-alt relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Mark */}
          <svg width="100" height="100" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
            <defs>
              <linearGradient id="heroGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#aed581' }} />
                <stop offset="50%" style={{ stopColor: '#9ccc65' }} />
                <stop offset="100%" style={{ stopColor: '#8bc34a' }} />
              </linearGradient>
            </defs>
            <g transform="translate(70, 35)">
              <path d="M 0 0 L 28 21 L 0 49 L -28 21 Z" fill="url(#heroGreen)" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="miter"/>
              <path d="M 0 21 L 21 35 L 0 56 L -21 35 Z" fill="#9ccc65" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="miter"/>
              <path d="M 0 35 L 14 45 L 0 60 L -14 45 Z" fill="#aed581" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="miter"/>
            </g>
          </svg>

          <p className="font-mono font-bold text-sm tracking-[3px] text-brand-dark uppercase mb-6">
            Automation for Community
          </p>

          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-dark mb-8 leading-tight">
            You shouldn't have to choose between impact and efficiency
          </h1>

          <p className="font-body text-xl md:text-2xl text-body mb-12 leading-relaxed max-w-3xl mx-auto">
            I embed with nonprofits and community organizations to build automation solutions that actually work — so small teams can do more with less.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-medium hover:bg-brand-dark text-white font-body font-bold text-lg rounded-lg transition-all transform hover:scale-105"
            >
              Let's Talk About Your Workflow
            </a>
            <a
              href="#process"
              className="px-8 py-4 bg-transparent hover:bg-white text-dark font-body font-bold text-lg rounded-lg border-2 border-brand-medium transition-all"
            >
              See How This Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
