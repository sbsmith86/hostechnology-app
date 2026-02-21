import React from 'react';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 font-body text-lg md:text-xl leading-relaxed text-body">
            <p className="font-headline font-bold text-3xl text-dark">
              The automation gap is widening.
            </p>

            <p>
              Every day there are new tools that can save teams hours of manual work —
              but accessing them usually requires budgets, technical staff, or both.
              The organizations that could benefit the most are often the last to get them.
            </p>

            <p>
              Meanwhile, you're still managing programs, tracking data in spreadsheets,
              responding to emails, coordinating volunteers, writing reports. The teams
              doing the hardest, most important work are usually the ones with the fewest
              resources to fix it.
            </p>

            <p className="font-headline font-bold text-3xl text-dark">
              That gap doesn't have to keep growing.
            </p>

            <p>
              We know because we've been there — doing mission-driven work with limited
              resources, watching the same problems go unsolved because nobody was building
              with teams like yours in mind.
            </p>

            <p className="font-headline font-bold text-3xl text-brand-dark">
              HosTechnology exists to close that gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
