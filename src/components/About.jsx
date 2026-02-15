import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-6 font-body text-lg text-body leading-relaxed">
          <p>
            <strong className="font-headline font-bold text-2xl text-dark">I'm Shae.</strong> I've been a software engineer
            for 15 years across industries from games to hospitality to nonprofit spaces.
            I'm part of the LGBTQ community. I know what it's like to do mission-driven work
            with zero resources.
          </p>

          <p>
            Right now I'm a Creative Services Engineer at Epic Games, where I build automation
            for creative teams. I learned something critical there: real solutions come from
            sitting with people doing the work. Not being handed specs. Not building what I think
            they need. Actually being there.
          </p>

          <p className="text-xl font-bold text-dark">
            This is my mission: bringing the tools that corporations use to scale their work
            to the people who are actually trying to make an impact.
          </p>

          <p>
            I'm not interested in building products that sit on shelves. I'm interested in
            sitting with you and making your work sustainable. AI doesn't have to be the doomsday
            story — it can make one person feel like five. For under-resourced teams, that's transformative.
          </p>

          <p className="font-bold text-dark">
            But someone has to bring it to them. I'm done waiting for you to come to me.
            Time to go to you.
          </p>
        </div>
      </div>
    </section>
  );
}
