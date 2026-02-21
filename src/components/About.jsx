import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-center mb-4 text-dark">
          Why HosTechnology
        </h2>
        <p className="text-center font-mono font-bold text-sm tracking-[2px] text-brand-dark uppercase mb-12">
          The Perspective Behind the Work
        </p>

        <div className="max-w-3xl mx-auto space-y-6 font-body text-lg text-body leading-relaxed">
          <p>
            Our founder has spent 15+ years as a full-stack engineer — building
            automation for creative teams at major studios, shipping products across
            games, healthcare, and food & beverage. That's the engineering depth.
          </p>

          <p>
            But the other half matters just as much: years of hands-on work in nonprofit
            and community organizing spaces. Volunteering, organizing, seeing firsthand
            what under-resourced teams actually deal with day to day. Not from a consulting
            distance — from inside the work.
          </p>

          <p className="text-xl font-bold text-dark">
            That combination — serious engineering experience and real nonprofit
            understanding — is what HosTechnology is built on. It's genuinely rare
            in technology consulting.
          </p>

          <p>
            It means we don't build enterprise solutions and hope they fit smaller teams.
            We build for your reality from the start — because we've lived it. We know
            what it's like to need a tool and not have the budget, the staff, or the
            time to figure it out.
          </p>

          <p className="font-bold text-dark">
            That's why HosTechnology exists. Not to sell you software — to sit with
            you and make your work sustainable.
          </p>
        </div>
      </div>
    </section>
  );
}
