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

    // Configure your EmailJS service ID, template ID, and public key
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
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Let's Work Together
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* CTA 1: Direct Contact */}
          <div className="bg-white p-8 border-4 border-gray-900">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              I Know I Need Help, Let's Talk
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  What's eating up all your time? What workflows feel broken?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about the manual work, the spreadsheets, the processes that take forever..."
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Preferred Contact (email or phone)
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold border-2 border-red-600 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Start the Conversation'}
              </button>
              
              {status === 'success' && (
                <p className="text-green-600 font-bold">Message sent! I'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 font-bold">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
          
          {/* CTA 2: Workflow Audit */}
          <div className="bg-white p-8 border-4 border-gray-900">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              I'm Not Sure What I Need Yet
            </h3>
            <p className="text-lg mb-6 text-gray-700">
              Let's spend 30 minutes looking at how you're working right now. 
              No commitment, no sales pitch. Just an honest conversation about where 
              automation might help.
            </p>
            <a
              href="#" // Replace with Calendly link
              className="block text-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold transition-colors"
            >
              Book a Free 30-Min Audit
            </a>
          </div>
          
          {/* CTA 3: Newsletter */}
          <div className="bg-white p-8 border-4 border-gray-900">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              I Want to Learn More First
            </h3>
            <p className="text-lg mb-6 text-gray-700">
              I write about AI, automation, and community work. Subscribe to follow along.
            </p>
            <a
              href="#" // Replace with Substack link
              className="block text-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold transition-colors"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
