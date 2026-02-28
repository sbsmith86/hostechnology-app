import React from 'react';

export default function OpsReady() {
  const features = [
    {
      label: "Ask in Slack",
      headline: "Your team asks questions where they already work.",
      body: "No new app to learn. No login to remember. Staff ask questions in Slack and get answers pulled directly from your organization's own documents."
    },
    {
      label: "Grounded Answers",
      headline: "It only answers from what you've documented.",
      body: "OpsReady doesn't make things up. If the answer is in your files, it gives it to you with a citation. If it's not, it says so — honestly."
    },
    {
      label: "Knowledge Gaps",
      headline: "It tracks what your team needs but doesn't have yet.",
      body: "Every time OpsReady can't answer a question, it logs it. Over time, you see exactly which policies, processes, and procedures your org still needs to write down."
    },
    {
      label: "Your Docs, Your Space",
      headline: "Each org gets their own private, isolated setup.",
      body: "Your documents stay yours. Nothing is shared between organizations. Upload your files through a simple, branded page — and your team can start asking questions right away."
    }
  ];

  return (
    <section id="opsready" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-mono font-bold text-sm tracking-[2px] text-brand-dark uppercase mb-4">
            Built by HosTechnology
          </p>
          <h2 className="font-headline font-bold text-4xl md:text-5xl text-dark mb-6">
            OpsReady
          </h2>
          <p className="font-body text-xl text-body leading-relaxed">
            A private AI assistant that lives in your Slack workspace and answers
            questions from your organization's own documents. No training required.
            No new tools to adopt. Just ask.
          </p>
        </div>

        {/* The Problem It Solves */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-brand-light">
            <h3 className="font-headline font-bold text-2xl text-dark mb-4">
              The problem it solves
            </h3>
            <p className="font-body text-lg text-body leading-relaxed mb-4">
              Your team has policies, handbooks, onboarding guides, and process
              documents — but nobody can find anything when they need it. New staff
              ask the same questions. Veteran staff answer them over and over. Institutional
              knowledge lives in people's heads instead of somewhere the whole team can access it.
            </p>
            <p className="font-body text-xl font-bold text-brand-dark">
              OpsReady turns your existing documents into a team resource that
              anyone can search by just asking a question in Slack.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-brand-light hover:-translate-y-2 transition-transform"
            >
              <p className="font-mono font-bold text-xs tracking-[2px] text-brand-dark uppercase mb-3">
                {feature.label}
              </p>
              <h3 className="font-headline font-bold text-xl mb-3 text-dark">
                {feature.headline}
              </h3>
              <p className="font-body text-base text-body leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works (plain language) */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="font-headline font-bold text-3xl text-center text-dark mb-10">
            How it works
          </h3>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Upload your documents",
                body: "Policies, handbooks, process guides, FAQs — anything your team needs to reference. We give you a simple upload page branded to your organization."
              },
              {
                step: "02",
                title: "Your team asks questions in Slack",
                body: "Mention @OpsReady in any channel or send it a direct message. \"What's our PTO policy?\" \"How do we submit a reimbursement?\" \"Who handles volunteer onboarding?\""
              },
              {
                step: "03",
                title: "OpsReady answers from your documents",
                body: "It finds the relevant section, gives a clear answer, and tells you exactly which document it came from. No guessing. No making things up."
              },
              {
                step: "04",
                title: "Gaps get tracked automatically",
                body: "When someone asks something that isn't documented yet, OpsReady logs it. You get a clear picture of what your team needs — and can fill those gaps over time."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <span className="font-mono font-bold text-2xl text-brand-medium shrink-0 w-10">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-headline font-bold text-xl text-dark mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-base text-body leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-body text-lg text-body mb-6">
            OpsReady is maintained and deployed by HosTechnology. We handle
            the setup. You just point your team to Slack.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-brand-medium hover:bg-brand-dark text-white font-body font-bold text-lg rounded-lg transition-all transform hover:scale-105"
          >
            Ask Us About OpsReady
          </a>
        </div>

      </div>
    </section>
  );
}
