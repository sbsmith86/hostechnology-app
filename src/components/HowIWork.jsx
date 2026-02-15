import React from 'react';

export default function HowIWork() {
  const steps = [
    {
      title: "EMBED",
      description: "I sit with your team. Not to audit you or tell you what you're doing wrong — to understand what's actually happening in your workflows. I watch how you work, where the friction is, what's eating up your time."
    },
    {
      title: "DESIGN",
      description: "Together, we figure out where automation makes sense. Maybe it's the emails that pile up every Monday. Maybe it's the spreadsheet you copy-paste into three other places. Maybe it's the report that takes all day when it should take ten minutes."
    },
    {
      title: "IMPLEMENT",
      description: "Sometimes that means building something custom. Sometimes it means setting up a simple automation in tools you're already paying for. Either way, I stick around until your team owns it. This isn't a handoff — it's about making your work sustainable."
    }
  ];

  return (
    <section id="process" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-center mb-4 text-dark">
          How I Work
        </h2>
        <p className="text-center font-mono font-bold text-sm tracking-[2px] text-brand-dark uppercase mb-16">
          Not What I Sell
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border-2 border-brand-light hover:-translate-y-2 transition-transform">
              <h3 className="font-headline font-bold text-3xl mb-4 text-brand-dark">
                {step.title}
              </h3>
              <p className="font-body text-lg text-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 font-body text-lg text-body max-w-3xl mx-auto">
          This isn't a six-month engagement with a massive contract.
          This is flexible, human-scale collaboration.
        </p>
      </div>
    </section>
  );
}
