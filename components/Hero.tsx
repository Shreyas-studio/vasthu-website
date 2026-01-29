import React from 'react';
import { BANNER_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={BANNER_IMAGE_URL}
          alt="Hero banner"
          className="w-full h-full object-cover hero-banner-img"
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.style.display = 'none';
            const fallback = t.nextElementSibling as HTMLElement;
            if (fallback) fallback.classList.remove('hidden');
          }}
        />
        <div className="hidden absolute inset-0 bg-gradient-to-b from-[#1A3C34]/80 to-[#1A3C34]/60 hero-banner-fallback" />
      </div>
      <div className="absolute inset-0 z-0 bg-[#1A3C34]/40" />
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="serif text-5xl md:text-7xl font-light mb-6 text-shadow-sm">
          Luxury Reimagined
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Where nature meets elegance. Discover Aurelia Residences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="px-8 py-3 bg-white text-[#1A3C34] font-semibold text-sm uppercase tracking-widest hover:bg-white/90 transition-colors">
            Enquire Now
          </a>
          <a href="#gallery" className="px-8 py-3 border border-white text-white font-semibold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
