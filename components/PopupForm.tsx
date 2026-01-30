import React, { useState, useEffect } from 'react';
import { UNIT_OPTIONS } from '../constants';
import { submitToSheet } from '../utils/submitToSheet';

const PopupForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const key = 'vasthu_popup_dismissed';
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem(key) && !dismissed) setOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const close = () => {
    setOpen(false);
    setDismissed(true);
    sessionStorage.setItem('vasthu_popup_dismissed', '1');
  };

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
      source: 'popup' as const,
    };
    const ok = await submitToSheet(data);
    setSubmitting(false);
    if (ok) {
      setSubmitted(true);
      setTimeout(close, 1500);
    } else setError(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8">
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 id="popup-title" className="serif text-2xl green-text mb-2">Request a Callback</h2>
        <p className="text-gray-500 text-sm mb-6">Leave your details and we&apos;ll get back to you.</p>
        {submitted ? (
          <p className="green-text serif text-lg py-4">Thank you. We&apos;ll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="popup-name" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Name</label>
              <input id="popup-name" name="name" type="text" required className="w-full px-4 py-2 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm rounded" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="popup-email" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Email</label>
              <input id="popup-email" name="email" type="email" required className="w-full px-4 py-2 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm rounded" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="popup-phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Phone</label>
              <input id="popup-phone" name="phone" type="tel" className="w-full px-4 py-2 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm rounded" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label htmlFor="popup-units" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Units</label>
              <select id="popup-units" name="units" required className="w-full px-4 py-2 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm rounded bg-white">
                <option value="">Select</option>
                {UNIT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            {error && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={submitting} className="flex-1 py-3 green-bg text-white font-semibold text-sm uppercase tracking-widest rounded hover:opacity-90 transition-opacity disabled:opacity-70">
                {submitting ? 'Sending…' : 'Submit'}
              </button>
              <button type="button" onClick={close} className="px-4 py-3 border border-gray-200 text-gray-600 font-semibold text-sm rounded hover:bg-gray-50 transition-colors">
                Later
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
