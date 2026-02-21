import React from 'react';

export default function HowIWork() {
  const services = [
    {
      title: "WORKFLOW AUTOMATION",
      description: "We identify where manual processes are costing you time and energy, then build solutions that fit your team — not enterprise systems that require an IT department to maintain."
    },
    {
      title: "AI INTEGRATION",
      description: "We implement practical AI tools that enhance your team's capacity without requiring you to become a tech company. The right tool for the right problem, built to your constraints."
    },
    {
      title: "SYSTEMS CONSULTING",
      description: "We help you see where your current tech stack is creating friction, and map a realistic path to better infrastructure — with honest guidance about what's worth building versus buying."
    },
    {
      title: "TRAINING & HANDOFF",
      description: "We don't build black boxes. Every solution comes with documentation and training so your team owns what we build and can maintain it independently."
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-center mb-4 text-dark">
          What We Do
        </h2>
        <p className="text-center font-mono font-bold text-sm tracking-[2px] text-brand-dark uppercase mb-16">
          Practical Solutions, Not Enterprise Overhead
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border-2 border-brand-light hover:-translate-y-2 transition-transform">
              <h3 className="font-headline font-bold text-2xl mb-4 text-brand-dark">
                {service.title}
              </h3>
              <p className="font-body text-lg text-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
