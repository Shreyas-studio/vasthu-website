import React, { useState, useEffect } from 'react';

const PopupForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(close, 1500);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8 animate-in fade-in zoom-in duration-200">
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 id="popup-title" className="serif text-2xl green-text mb-2">Request a Callback</h2>
        <p className="text-gray-500 text-sm mb-6">Leave your details and we’ll get back to you.</p>
        {submitted ? (
          <p className="green-text serif text-lg py-4">Thank you. We’ll be in touch soon.</p>
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
              <input id="popup-phone" name="phone" type="tel" className="w-full px-4 py-2 border border-gray-200 focus:border-[#1A3C34] focus:outline-none text-sm rounded" placeholder="+1 234 567 8900" />
            </div>
            <div className="flex gap-3 pt-2">
              <button type="submit" className="flex-1 py-3 green-bg text-white font-semibold text-sm uppercase tracking-widest rounded hover:opacity-90 transition-opacity">
                Submit
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
