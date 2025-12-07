import React from 'react';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Problem statements - punchy, direct */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-800">
            <p className="font-bold text-2xl">
              You're doing the work of five people.
            </p>
            
            <p>
              You're managing programs, tracking data in spreadsheets, responding to emails, 
              coordinating volunteers, writing reports. You know there's a better way—you 
              just don't have time to figure it out.
            </p>
            
            <p>
              Meanwhile, large corporations are using AI to 10x their capabilities. 
              They're investing billions, automating everything they can touch.
            </p>
            
            <p className="font-bold text-2xl">
              The gap is widening.
            </p>
            
            <p>
              Digitally mature organizations are four times more likely to achieve their mission goals. 
              And if that's true for nonprofits with actual budgets and infrastructure, imagine what's 
              happening to smaller community groups doing the real work on the ground.
            </p>
            
            <p className="text-3xl font-bold text-red-600">
              You shouldn't be left behind because nobody's bringing these tools to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
