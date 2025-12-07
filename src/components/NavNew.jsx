import React, { useState } from 'react';

export default function NavNew() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50 border-b-4 border-red-600">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <a href="#" className="text-2xl font-bold">
            HOSTECHNOLOGY
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#process" className="hover:text-red-400 transition-colors font-bold">
              How I Work
            </a>
            <a href="#contact" className="hover:text-red-400 transition-colors font-bold">
              Work Together
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-red-600 hover:bg-red-700 font-bold transition-colors"
            >
              Let's Talk
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
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
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a 
              href="#process" 
              className="block hover:text-red-400 transition-colors font-bold"
              onClick={() => setIsOpen(false)}
            >
              How I Work
            </a>
            <a 
              href="#contact" 
              className="block hover:text-red-400 transition-colors font-bold"
              onClick={() => setIsOpen(false)}
            >
              Work Together
            </a>
            <a 
              href="#contact" 
              className="block px-6 py-2 bg-red-600 hover:bg-red-700 font-bold transition-colors text-center"
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
