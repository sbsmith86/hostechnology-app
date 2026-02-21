import React, { useState } from 'react';

function DiamondMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="36 16 48 50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="navGreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#aed581' }} />
          <stop offset="50%" style={{ stopColor: '#9ccc65' }} />
          <stop offset="100%" style={{ stopColor: '#8bc34a' }} />
        </linearGradient>
      </defs>
      <g transform="translate(60, 20)">
        <path d="M 0 0 L 20 15 L 0 35 L -20 15 Z" fill="url(#navGreen)" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="miter"/>
        <path d="M 0 15 L 15 25 L 0 40 L -15 25 Z" fill="#9ccc65" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="miter"/>
        <path d="M 0 25 L 10 32 L 0 43 L -10 32 Z" fill="#aed581" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="miter"/>
      </g>
    </svg>
  );
}

export default function NavNew() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b-2 border-brand-medium shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-1 font-headline font-extrabold text-2xl text-dark">
            <DiamondMark size={32} />
            HosTechnology
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="font-body font-semibold text-dark hover:text-brand-dark transition-colors">
              What We Do
            </a>
            <a href="#about" className="font-body font-semibold text-dark hover:text-brand-dark transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-brand-medium hover:bg-brand-dark text-white font-body font-bold rounded-lg transition-colors"
            >
              Let's Talk
            </a>
          </div>

          <button
            className="md:hidden text-dark"
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
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a
              href="#services"
              className="block font-body font-semibold text-dark hover:text-brand-dark transition-colors"
              onClick={() => setIsOpen(false)}
            >
              What We Do
            </a>
            <a
              href="#about"
              className="block font-body font-semibold text-dark hover:text-brand-dark transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-6 py-2 bg-brand-medium hover:bg-brand-dark text-white font-body font-bold rounded-lg transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
