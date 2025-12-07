import React from 'react';

export default function HowIWork() {
  const steps = [
    {
      title: "EMBED",
      description: "I sit with your team. Not to audit you or tell you what you're doing wrong—to understand what's actually happening in your workflows. I watch how you work, where the friction is, what's eating up your time."
    },
    {
      title: "DESIGN",
      description: "Together, we figure out where automation makes sense. Maybe it's email parsing. Maybe it's a script that transforms your data. Maybe it's training on AI tools you already have access to but didn't know how to use."
    },
    {
      title: "IMPLEMENT",
      description: "I build it with you. I install it. I show your team how to use it. Then I make sure it actually sticks. This isn't about handing off a product—it's about making your work sustainable."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          How I Work
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16">Not What I Sell</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 border-4 border-gray-900 transform hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-bold mb-4 text-red-600">
                {step.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-lg text-gray-600 max-w-3xl mx-auto">
          This isn't a six-month engagement with a massive contract. 
          This is flexible, human-scale collaboration.
        </p>
      </div>
    </section>
  );
}
