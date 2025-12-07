import React from 'react';

export default function WhoThisIsFor() {
  const goodFit = [
    "You're running a community organization, nonprofit, or small mission-driven team",
    "You have a tiny budget and can't hire five people",
    "You know you're doing things inefficiently but don't have time to fix it",
    "You want someone who understands both the tech AND the community work",
    "You're open to letting someone see how the sausage is made"
  ];

  const notGoodFit = [
    "You need a traditional consultant who stays at arm's length",
    "You want a fully-built platform you can just buy",
    "You're not ready to actually change how you work"
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Who This Is For
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Good Fit */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              This works best for you if:
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-400 text-2xl mr-3">✓</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Not Good Fit */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-400">
              This might not be for you if:
            </h3>
            <ul className="space-y-4">
              {notGoodFit.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-400 text-2xl mr-3">✗</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
