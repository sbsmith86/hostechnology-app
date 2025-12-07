import React from 'react';

export default function FooterNew() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-red-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">HOSTECHNOLOGY</h3>
          <p className="text-lg text-gray-400 mb-8">
            Bringing AI and automation to the margins
          </p>
          
          {/* Social Links - Add your actual links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-red-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Substack
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Email
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Hostechnology. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
