import React from 'react';

export default function HowIWork() {
  const services = [
    {
      title: "WORKFLOW AUTOMATION",
      description: "We identify where manual processes are costing you time and energy, then build solutions that fit your team — not enterprise systems that require an IT department to maintain.",
      examples: [
        {
          name: "The Email Pile-Up",
          scenario: "Your team is managing program inquiries, volunteer coordination, and partner communications across three different inboxes. Messages get lost, things fall through the cracks.",
          result: "An automation that sorts, labels, and routes incoming messages so nothing gets missed — and nobody has to be the human filter."
        },
        {
          name: "The Copy-Paste Marathon",
          scenario: "Every week, someone on your team is copying intake data from forms into multiple spreadsheets for reporting. Hours of manual work that feels pointless but has to get done.",
          result: "A simple automation that pulls the data where it needs to go. Five minutes instead of five hours."
        }
      ]
    },
    {
      title: "AI INTEGRATION",
      description: "AI can save your team real time — but only if it's set up for how you actually work. We help you identify where AI fits, implement it practically, and make sure your team understands and owns it. No black boxes. No buzzwords.",
      examples: [
        {
          name: "The 'Where Do I Find That?'",
          scenario: "Your org has policies, handbooks, and process docs scattered across shared drives. New staff ask the same questions. Veteran staff answer them over and over.",
          result: "We built OpsReady — a tool that lets your team ask questions in Slack and get answers from your own documents, with citations."
        },
        {
          name: "The Report Nobody Reads",
          scenario: "Your team spends hours compiling a monthly impact report from spreadsheets, surveys, and emails. By the time it's done, it's outdated.",
          result: "An AI-powered pipeline that pulls data from existing tools, drafts a summary, and delivers it weekly — cutting prep time by 80%."
        }
      ]
    },
    {
      title: "SYSTEMS CONSULTING",
      description: "We help you see where your current tech stack is creating friction, and map a realistic path to better infrastructure — with honest guidance about what's worth building versus buying.",
      examples: [
        {
          name: "The 'We Don't Know What We Don't Know'",
          scenario: "You know things are inefficient but you can't pinpoint where. You don't need a product built — you need someone to map out what's happening and show you what's possible.",
          result: "Sometimes the biggest wins don't require any custom development at all."
        }
      ]
    },
    {
      title: "TRAINING & HANDOFF",
      description: "We don't build black boxes. Every solution comes with documentation and training so your team owns what we build and can maintain it independently.",
      examples: []
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

        <div className="max-w-5xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 md:p-10 rounded-2xl border-2 border-brand-light">
              <h3 className="font-headline font-bold text-2xl mb-3 text-brand-dark">
                {service.title}
              </h3>
              <p className="font-body text-lg text-body leading-relaxed mb-6">
                {service.description}
              </p>

              {service.examples.length > 0 && (
                <div className="space-y-4">
                  {service.examples.map((example, i) => (
                    <div key={i} className="bg-brand-bg p-6 rounded-xl border-l-4 border-brand-medium">
                      <h4 className="font-headline font-bold text-lg mb-2 text-dark">
                        {example.name}
                      </h4>
                      <p className="font-body text-base text-body mb-2 leading-relaxed">
                        {example.scenario}
                      </p>
                      <p className="font-body text-base font-bold text-brand-dark">
                        {example.result}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
