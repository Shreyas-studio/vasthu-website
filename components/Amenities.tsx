import React from 'react';
import { AMENITIES_LIST } from '../constants';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header: label + title + underline */}
        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 text-center mb-3">
          Exclusivity
        </p>
        <h2 className="serif text-4xl md:text-5xl green-text text-center font-light mb-4">
          Curated Amenities
        </h2>
        <div className="w-12 h-px bg-[#1A3C34] mx-auto mb-4" />
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-sm">
          Your Private Residents&apos; Retreat. Club Oasis is a sanctuary curated for leisure, wellness, and quiet indulgence.
        </p>

        {/* Grid: icon circle, title, description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
          {AMENITIES_LIST.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-2xl md:text-3xl"
                aria-hidden
              >
                {item.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#1A3C34] mb-3">
                {item.category}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
