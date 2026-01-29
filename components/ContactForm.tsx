import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
              <input id="phone" name="phone" type="tel" className="w-full px-4 py-3 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm" placeholder="+1 234 567 8900" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm resize-none" placeholder="Your message" />
            </div>
            <button type="submit" className="w-full py-4 green-bg text-white font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
