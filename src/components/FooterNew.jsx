import React from 'react';

export default function FooterNew() {
  return (
    <footer className="bg-dark text-white py-12 border-t-2 border-brand-medium">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Diamond Mark */}
          <svg width="48" height="48" viewBox="36 16 48 50" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2">
            <defs>
              <linearGradient id="footerGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#aed581' }} />
                <stop offset="50%" style={{ stopColor: '#9ccc65' }} />
                <stop offset="100%" style={{ stopColor: '#8bc34a' }} />
              </linearGradient>
            </defs>
            <g transform="translate(60, 20)">
              <path d="M 0 0 L 20 15 L 0 35 L -20 15 Z" fill="url(#footerGreen)" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="miter"/>
              <path d="M 0 15 L 15 25 L 0 40 L -15 25 Z" fill="#9ccc65" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="miter"/>
              <path d="M 0 25 L 10 32 L 0 43 L -10 32 Z" fill="#aed581" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="miter"/>
            </g>
          </svg>

          <h3 className="font-headline font-bold text-3xl mb-2">HosTechnology</h3>
          <p className="font-mono font-bold text-xs tracking-[3px] text-brand-light uppercase mb-8">
            Automation for Community
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:shae@hostechnology.com" className="font-body text-gray-400 hover:text-brand-light transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/shaebryantsmith/" className="font-body text-gray-400 hover:text-brand-light transition-colors" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

          <p className="font-body text-sm text-gray-500">
            &copy; {new Date().getFullYear()} HosTechnology. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
