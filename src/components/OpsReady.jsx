import React from 'react';

export default function OpsReady() {
  return (
    <section id="opsready" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Label */}
          <p className="text-center font-mono font-bold text-sm tracking-[2px] text-brand-dark uppercase mb-4">
            From Our Toolkit
          </p>
          <h2 className="font-headline font-bold text-4xl md:text-5xl text-center mb-6 text-dark">
            OpsReady
          </h2>
          <p className="text-center font-body text-xl text-body leading-relaxed mb-12 max-w-2xl mx-auto">
            One example of what we build — a Slack-based assistant that answers
            your team's questions using your own documents.
          </p>

          {/* The scenario — matches Examples.jsx tone */}
          <div className="bg-brand-bg p-8 md:p-10 rounded-xl border-l-4 border-brand-medium mb-8">
            <h3 className="font-headline font-bold text-2xl mb-4 text-dark">
              The "Where do I find that?" problem
            </h3>
            <p className="font-body text-lg text-body mb-4 leading-relaxed">
              Your org has policies, handbooks, onboarding guides, and process
              documents scattered across shared drives. New staff ask the same
              questions. Veteran staff answer them over and over. Nobody can find
              anything when they actually need it.
            </p>
            <p className="font-body text-xl font-bold text-brand-dark">
              We built a tool that lets your team ask questions in Slack and get
              answers pulled directly from your own files — with citations. When
              it doesn't know something, it says so and logs the gap so you know
              what to document next.
            </p>
          </div>

          {/* What makes it different — brief, consulting-framed */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-brand-bg p-6 rounded-xl">
              <h4 className="font-headline font-bold text-lg text-dark mb-2">
                No new tools
              </h4>
              <p className="font-body text-base text-body leading-relaxed">
                It works inside Slack — where your team already is. Nothing to install, no logins to manage.
              </p>
            </div>
            <div className="bg-brand-bg p-6 rounded-xl">
              <h4 className="font-headline font-bold text-lg text-dark mb-2">
                Honest by design
              </h4>
              <p className="font-body text-base text-body leading-relaxed">
                It only answers from what you've documented. It won't make things up or speculate.
              </p>
            </div>
            <div className="bg-brand-bg p-6 rounded-xl">
              <h4 className="font-headline font-bold text-lg text-dark mb-2">
                Gets smarter over time
              </h4>
              <p className="font-body text-base text-body leading-relaxed">
                Every unanswered question is tracked — so your org builds the documentation it actually needs.
              </p>
            </div>
          </div>

          {/* Consulting frame — this is the key reframe */}
          <div className="text-center">
            <p className="font-body text-lg text-body leading-relaxed max-w-2xl mx-auto mb-6">
              OpsReady is one tool in our catalog. Whether it's the right fit
              for your organization — or whether you need something different
              entirely — starts with a conversation.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-brand-medium hover:bg-brand-dark text-white font-body font-bold text-lg rounded-lg transition-all transform hover:scale-105"
            >
              Let's Talk About What You Need
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
