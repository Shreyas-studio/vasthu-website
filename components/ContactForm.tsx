import React, { useState } from 'react';
import { UNIT_OPTIONS } from '../constants';
import { submitToSheet } from '../utils/submitToSheet';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value,
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value,
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement).value,
      units: (form.querySelector('[name="units"]') as HTMLSelectElement).value,
      source: 'contact' as const,
    };
    const ok = await submitToSheet(data);
    setSubmitting(false);
    if (ok) setSubmitted(true);
    else setError(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="serif text-4xl md:text-5xl green-text text-center mb-6 font-light">
          Get in Touch
        </h2>
        <p className="text-gray-500 text-center mb-12 text-sm">
          Share your details and we will reach out.
        </p>
        {submitted ? (
          <div className="text-center py-12 green-text serif text-xl">
            Thank you. We will contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
              <input id="name" name="name" type="text" required className="w-full px-4 py-3 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
              <input id="email" name="email" type="email" required className="w-full px-4 py-3 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
              <input id="phone" name="phone" type="tel" className="w-full px-4 py-3 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label htmlFor="units" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Units</label>
              <select id="units" name="units" required className="w-full px-4 py-3 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm bg-white">
                <option value="">Select</option>
                {UNIT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            {error && (
              <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
            )}
            <button type="submit" disabled={submitting} className="w-full py-4 green-bg text-white font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-70">
              {submitting ? 'Sending…' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
