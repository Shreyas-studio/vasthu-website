import React from 'react';
import { LOCATION_POINTS } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Left column – text */}
          <div>
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
              Connected
            </p>
            <h2 className="serif text-4xl md:text-5xl green-text font-light mb-6 leading-tight">
              Seamlessly Connected. Gently Secluded.
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
              Located in Bilekahalli, your home is wrapped in nature&apos;s quiet yet linked to the city&apos;s finest destinations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LOCATION_POINTS.map((loc, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-wide text-gray-800">
                    {loc.title}
                  </span>
                  <span className="text-gray-500 text-sm">{loc.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – map */}
          <div className="relative rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[360px] lg:min-h-[420px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1446336940394!2d77.60885127507518!3d12.89841988741023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1592b778acf3%3A0x5f98020b620a8632!2sSNN%20Raj%20Bay%20Vista!5e0!3m2!1sen!2sin!4v1769777413756!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SNN Raj Bay Vista location"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
