import React from 'react';

export default function Examples() {
  const examples = [
    {
      title: "The Email Overload",
      description: "A community organization was managing program inquiries, volunteer coordination, and partner communications across three people's inboxes. We set up a custom email parsing system using AI that automatically categorizes and routes messages into their existing workflow.",
      result: "Cut coordination time by 60%"
    },
    {
      title: "The Manual Data Entry",
      description: "A nonprofit was manually copying intake data from forms into multiple tracking spreadsheets for reporting. One person spending hours every week on copy-paste work.",
      result: "One script. Five minutes to run instead of five hours."
    },
    {
      title: "The 'We Don't Know What We Don't Know'",
      description: "A community group knew they were inefficient but couldn't articulate where. I sat with them for two weeks, mapped their workflows, and trained them on free tools they didn't know existed.",
      result: "No custom development needed."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          What This Looks Like
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16">Real examples, real results</p>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {examples.map((example, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 border-l-8 border-red-600 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {example.title}
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {example.description}
              </p>
              <p className="text-xl font-bold text-red-600">
                {example.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
