import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import FloorPlans from './components/FloorPlans';
import Specification from './components/Specification';
import Location from './components/Location';
import ContactForm from './components/ContactForm';
import PopupForm from './components/PopupForm';
import { FOOTER_LOGO_URL } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative bg-white selection:bg-[#1A3C34] selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      
      {/* Quick Summary Section */}
      <section className="py-20 bg-[#F9FBFA] border-y border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-center">
          <div className="group">
            <h3 className="quick-summary-stat text-5xl green-text mb-3 font-light group-hover:scale-105 transition-transform duration-500 whitespace-nowrap">2026</h3>
            <div className="w-8 h-px bg-[#1A3C34]/20 mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] font-bold">Estimated Handover</p>
          </div>
          <div className="md:border-x border-gray-100 group">
            <h3 className="quick-summary-stat text-5xl green-text mb-3 font-light group-hover:scale-105 transition-transform duration-500 whitespace-nowrap">G+20 Floors</h3>
            <div className="w-8 h-px bg-[#1A3C34]/20 mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] font-bold whitespace-nowrap">Iconic Vertical Living</p>
          </div>
          <div className="md:border-r border-gray-100 group">
            <h3 className="quick-summary-stat text-5xl green-text mb-3 font-light group-hover:scale-105 transition-transform duration-500 whitespace-nowrap">3, 4, 5 BHK</h3>
            <div className="w-8 h-px bg-[#1A3C34]/20 mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] font-bold whitespace-nowrap">Spacious Luxury Residences</p>
          </div>
          <div className="group">
            <h3 className="quick-summary-stat text-5xl green-text mb-3 font-light group-hover:scale-105 transition-transform duration-500 whitespace-nowrap">270°</h3>
            <div className="w-8 h-px bg-[#1A3C34]/20 mx-auto mb-4"></div>
            <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] font-bold whitespace-nowrap">Breathtaking Vistas</p>
          </div>
        </div>
      </section>

      <Features />
      <Amenities />
      <Gallery />
      <FloorPlans />
      <Specification />
      <Location />
      <ContactForm />

      <footer className="py-16 bg-[#1A2E2A] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-10 mb-12 max-w-4xl">
            <div className="shrink-0">
              <img
                src={FOOTER_LOGO_URL}
                alt="SNN Raj Corp"
                className="h-10 w-auto object-contain object-left logo-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = (e.target as HTMLImageElement).nextElementSibling;
                  if (fallback) (fallback as HTMLElement).classList.remove('hidden');
                }}
              />
              <span className="serif text-2xl font-semibold text-white hidden logo-fallback">SNN RAJ CORP</span>
            </div>
            <div>
              <p className="text-white text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
                Book Your Site Visit Before Availability Fills Up
              </p>
              <h3 className="serif text-xl md:text-2xl text-white font-light mb-4">
                A Legacy of Perfection.
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
                SNN Raj Corp brings a heritage of delivering 40 projects and 12 million sq. ft. of perfection. With a team dedicated to elevating lives, we invite you to a place where dreams take shape and memories are made.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center space-y-2">
            <p className="text-white/60 text-xs uppercase tracking-widest">
              All Right Reserved By SNN RAJ CORP © 2025
            </p>
            <p className="text-white/40 text-[10px] uppercase tracking-wider">
              RERA NO. - PRM/KA/RERA/1251/308/PR/140622/004983
            </p>
          </div>
        </div>
      </footer>

      <PopupForm />
    </div>
  );
};

export default App;
