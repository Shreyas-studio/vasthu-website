import React from 'react';
import { WHY_SECTION_IMAGE_URL } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch max-w-6xl mx-auto">
          {/* Left column – image */}
          <div className="relative rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[320px] md:min-h-[480px]">
            <img
              src={WHY_SECTION_IMAGE_URL}
              alt="Lakefront living at SNN Raj Bay Vista"
              className="w-full h-full min-h-[320px] md:min-h-[480px] object-cover object-center"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.style.display = 'none';
                const fallback = t.nextElementSibling as HTMLElement;
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 bg-gradient-to-br from-[#1A3C34]/40 to-[#1A3C34]/20" aria-hidden />
          </div>

          {/* Right column – text */}
          <div className="flex flex-col justify-center py-4 md:py-8">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#6B8E7D] mb-4">
              Highlights
            </p>
            <h2 className="serif text-3xl md:text-4xl lg:text-[2.25rem] text-[#1A3C34] font-light leading-tight mb-6">
              Lakefront Living, Redefined.
            </h2>
            <p className="flex items-start gap-3 text-base md:text-lg text-gray-700 font-medium mb-6 leading-snug">
              <span className="text-gray-400 font-light shrink-0" aria-hidden>|</span>
              <span>Exclusive 3, 4, & 5 BHK Residences Overlooking a 108-Acre Lake.</span>
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Rising beside a tranquil lake in South Bengaluru’s most coveted neighborhood, SNN Raj Bay Vista offers the rare luxury of space, calm, and connection. Experience a refined way of living where nature and luxury exist in perfect harmony.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Gaze across the shimmering 108-acre lake from your elevated retreat. Here, petals kiss the water and birdsong lingers in the morning air as calm and beauty bloom everywhere. RAJ Bay Vista is your connection to the beauty of &quot;Old Bangalore&quot;—a sanctuary designed to be a cherished part of your everyday life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
