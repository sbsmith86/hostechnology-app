import React from 'react';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 font-body text-lg md:text-xl leading-relaxed text-body">
            <p className="font-headline font-bold text-3xl text-dark">
              You're doing the work of five people.
            </p>

            <p>
              You're managing programs, tracking data in spreadsheets, responding to emails,
              coordinating volunteers, writing reports. You know there's a better way — you
              just don't have time to figure it out.
            </p>

            <p>
              Meanwhile, large corporations are using AI to 10x their capabilities.
              They're investing billions, automating everything they can touch.
            </p>

            <p className="font-headline font-bold text-3xl text-dark">
              The gap is widening.
            </p>

            <p>
              Every day, the distance grows between organizations that have access to modern tools
              and the ones still doing everything by hand. The irony is that the teams doing the
              hardest, most important work are usually the ones with the fewest resources to fix it.
            </p>

            <p className="font-headline font-bold text-3xl text-brand-dark">
              You shouldn't be left behind because nobody's bringing these tools to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
