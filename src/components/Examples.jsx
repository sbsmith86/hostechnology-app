import React from 'react';

export default function Examples() {
  const examples = [
    {
      title: "The Email Pile-Up",
      description: "Your team is managing program inquiries, volunteer coordination, and partner communications across three different inboxes. Messages get lost, things fall through the cracks, and someone's always chasing a reply.",
      result: "An automation that sorts, labels, and routes incoming messages so nothing gets missed — and nobody has to be the human filter."
    },
    {
      title: "The Copy-Paste Marathon",
      description: "Every week, someone on your team is copying intake data from forms into multiple spreadsheets for reporting. Hours of manual work that feels pointless but has to get done.",
      result: "A simple automation that pulls the data where it needs to go. Five minutes instead of five hours."
    },
    {
      title: "The 'We Don't Know What We Don't Know'",
      description: "You know things are inefficient but you can't pinpoint where. You don't need a product built — you need someone to sit with your team, map out what's happening, and show you what's possible with the tools you already have.",
      result: "Sometimes the biggest wins don't require any custom development at all."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-center mb-4 text-dark">
          What This Could Look Like
        </h2>
        <p className="text-center font-mono font-bold text-sm tracking-[2px] text-brand-dark uppercase mb-16">
          Here's the kind of work we're built for
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-brand-bg p-8 rounded-xl border-l-4 border-brand-medium hover:bg-brand-bg-alt transition-colors"
            >
              <h3 className="font-headline font-bold text-2xl mb-4 text-dark">
                {example.title}
              </h3>
              <p className="font-body text-lg text-body mb-4 leading-relaxed">
                {example.description}
              </p>
              <p className="font-body text-xl font-bold text-brand-dark">
                {example.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
