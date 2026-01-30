import React, { useState, useEffect } from 'react';
import { FLOOR_PLANS, UNIT_OPTIONS } from '../constants';
import { submitToSheet } from '../utils/submitToSheet';

const FLOORPLAN_UNLOCK_KEY = 'vasthu_floorplan_unlocked';

const FloorPlans: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(FLOORPLAN_UNLOCK_KEY) === '1') setUnlocked(true);
    } catch {
      // ignore
    }
  }, []);

  const selected = FLOOR_PLANS[selectedIndex];

  const openForm = () => setFormOpen(true);
  const closeForm = () => {
    setFormOpen(false);
    setSubmitted(false);
    setSubmitError(false);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(false);
    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value,
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value,
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement).value,
      units: (form.querySelector('[name="units"]') as HTMLSelectElement).value,
      source: 'brochure' as const,
    };
    const ok = await submitToSheet(data);
    setSubmitting(false);
    if (ok) {
      setSubmitted(true);
      setUnlocked(true);
      try {
        sessionStorage.setItem(FLOORPLAN_UNLOCK_KEY, '1');
      } catch {
        // ignore
      }
      setTimeout(closeForm, 1500);
    } else setSubmitError(true);
  };

  return (
    <section id="floorplans" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#6B8E7D] text-center mb-3">
          Precision
        </p>
        <h2 className="serif text-4xl md:text-5xl green-text text-center font-light mb-4">
          The Floorplans
        </h2>
        <div className="w-12 h-px bg-[#1A3C34] mx-auto mb-16" />

        {/* Two columns: left = list + investment, right = image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-6xl mx-auto bg-[#FAFBFA] rounded-lg overflow-hidden border border-gray-100">
          {/* Left column */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            {/* Property list */}
            <div className="space-y-1 mb-8">
              {FLOOR_PLANS.map((fp, i) => (
                <button
                  key={fp.id}
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  className={`w-full text-left py-3 px-4 rounded flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-l-2 transition-colors ${
                    i === selectedIndex
                      ? 'border-[#1A3C34] bg-white/80'
                      : 'border-transparent hover:bg-white/50'
                  }`}
                >
                  <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    {fp.type}
                  </span>
                  <span className="serif text-gray-500 text-sm italic">{fp.area}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right column – image with blur + lock */}
          <div className="relative min-h-[320px] lg:min-h-[480px] bg-gray-100">
            <img
              src={selected.image}
              alt={selected.type}
              className="w-full h-full min-h-[320px] lg:min-h-[480px] object-cover object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://via.placeholder.com/800x600?text=' + encodeURIComponent(selected.type);
              }}
            />
            {/* Blur overlay + lock (when locked) */}
            {!unlocked && (
              <button
                type="button"
                onClick={openForm}
                className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md transition-opacity hover:bg-black/25 focus:outline-none focus:ring-2 focus:ring-[#1A3C34]/50"
                aria-label="Request brochure to view floor plan"
              >
                <span className="w-16 h-16 rounded-full bg-white/95 border-2 border-[#1A3C34]/30 flex items-center justify-center text-2xl text-[#1A3C34] shadow-lg">
                  🔒
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Brochure request popup */}
      {formOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brochure-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeForm}
            aria-hidden
          />
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8">
            <button
              type="button"
              onClick={closeForm}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              aria-label="Close"
            >
              ✕
            </button>
            <h2 id="brochure-title" className="serif text-2xl green-text mb-2">
              Request Full Brochure
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Share your details and we&apos;ll send you the complete floor plan brochure.
            </p>
            {submitted ? (
              <p className="green-text serif text-lg py-4">
                Thank you. We&apos;ll send the brochure to your email shortly.
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="brochure-name" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Name
                  </label>
                  <input
                    id="brochure-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm rounded"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="brochure-email" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Email
                  </label>
                  <input
                    id="brochure-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm rounded"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="brochure-phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Phone
                  </label>
                  <input
                    id="brochure-phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm rounded"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="brochure-units" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Units
                  </label>
                  <select
                    id="brochure-units"
                    name="units"
                    required
                    className="w-full px-4 py-2 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm rounded bg-white"
                  >
                    <option value="">Select</option>
                    {UNIT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                {submitError && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                )}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-3 green-bg text-white font-semibold text-sm uppercase tracking-widest rounded hover:opacity-90 transition-opacity disabled:opacity-70"
                  >
                    {submitting ? 'Sending…' : 'Submit'}
                  </button>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="px-4 py-3 border border-gray-200 text-gray-600 font-semibold text-sm rounded hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;
