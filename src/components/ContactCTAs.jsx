import React from 'react';

export default function ContactCTAs() {
  return (
    <section id="contact" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-center mb-4 text-dark">
          Let's Work Together
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="font-body text-lg text-body">
            Start the conversation. Email me: <a href="mailto:shae@hostechnology.com" className="font-bold text-brand-dark hover:text-brand-darker underline underline-offset-4 transition-colors">shae@hostechnology.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
