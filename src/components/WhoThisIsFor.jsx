import React from 'react';

export default function WhoThisIsFor() {
  const audiences = [
    {
      title: "Grassroots Organizations",
      description: "Scrappy teams doing big work with limited resources. We know how to build lean."
    },
    {
      title: "Mid-Size Nonprofits",
      description: "Growing orgs hitting process bottlenecks. We help you scale without losing mission focus."
    },
    {
      title: "Large Nonprofits & Foundations",
      description: "Established organizations trying to reach and empower their local partners and chapters."
    }
  ];

  return (
    <section className="py-20 bg-dark text-white">
      <div className="container mx-auto px-6">
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-center mb-16">
          Who We Serve
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center">
              <h3 className="font-headline font-bold text-2xl mb-4 text-brand-light">
                {audience.title}
              </h3>
              <p className="font-body text-lg text-gray-300 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="max-w-3xl mx-auto text-center border-t border-b border-gray-700 py-8">
          <p className="font-body text-xl md:text-2xl text-gray-300 leading-relaxed italic">
            We bring 15+ years of engineering experience and deep roots in nonprofit and community organizing work. <strong className="text-brand-light not-italic">We've been on both sides of this.</strong> That combination is genuinely rare in technology consulting — and it's what makes us useful.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
