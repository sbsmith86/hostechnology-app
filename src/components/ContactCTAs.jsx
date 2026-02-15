import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactCTAs() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    message: '',
    contact: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', organization: '', message: '', contact: '' });
    })
    .catch(() => {
      setStatus('error');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-center mb-4 text-dark">
          Let's Work Together
        </h2>
        <p className="text-center font-mono font-bold text-sm tracking-[2px] text-brand-dark uppercase mb-16">
          Choose your entry point
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* CTA 1: Direct Contact */}
          <div className="bg-white p-8 rounded-2xl border-2 border-brand-light">
            <h3 className="font-headline font-bold text-2xl mb-4 text-dark">
              I Know I Need Help
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body text-sm font-bold mb-2 text-dark">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-medium focus:outline-none font-body"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-bold mb-2 text-dark">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-medium focus:outline-none font-body"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-bold mb-2 text-dark">
                  What workflows feel broken?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about the manual work, the spreadsheets, the processes that take forever..."
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-medium focus:outline-none font-body"
                ></textarea>
              </div>

              <div>
                <label className="block font-body text-sm font-bold mb-2 text-dark">
                  Preferred Contact (email or phone)
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-medium focus:outline-none font-body"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-brand-medium hover:bg-brand-dark text-white font-body font-bold rounded-lg transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Start the Conversation'}
              </button>

              {status === 'success' && (
                <p className="font-body font-bold text-brand-dark">Message sent! I'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="font-body font-bold text-red-600">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          {/* CTA 2: Workflow Audit */}
          <div className="bg-white p-8 rounded-2xl border-2 border-brand-light">
            <h3 className="font-headline font-bold text-2xl mb-4 text-dark">
              I'm Not Sure Yet
            </h3>
            <p className="font-body text-lg mb-6 text-body">
              Let's spend 30 minutes looking at how you're working right now.
              No commitment, no sales pitch. Just an honest conversation about where
              automation might help.
            </p>
            <a
              href="mailto:hello@hostechnology.com"
              className="block text-center px-6 py-3 bg-dark hover:bg-gray-800 text-white font-body font-bold rounded-lg transition-colors"
            >
              Book a Free 30-Min Audit
            </a>
          </div>

          {/* CTA 3: Just Learn */}
          <div className="bg-white p-8 rounded-2xl border-2 border-brand-light">
            <h3 className="font-headline font-bold text-2xl mb-4 text-dark">
              I Want to Learn More
            </h3>
            <p className="font-body text-lg mb-6 text-body">
              I write about AI, automation, and community work. Subscribe to follow along.
            </p>
            <a
              href="mailto:hello@hostechnology.com"
              className="block text-center px-6 py-3 bg-dark hover:bg-gray-800 text-white font-body font-bold rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
