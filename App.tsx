
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
            <h3 className="text-5xl green-text serif mb-3 font-light group-hover:scale-105 transition-transform duration-500 whitespace-nowrap">3, 4, 5 BHK</h3>
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

      <footer className="py-20 bg-[#1A3C34] text-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                <div>
                  <div className="text-3xl font-bold tracking-[0.3em] text-white serif mb-6">AURELIA</div>
                  <p className="text-white/40 max-w-sm text-sm font-light leading-relaxed">
                    Setting the gold standard for high-end residential developments globally. Luxury defined by nature.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
                    <div className="flex flex-col gap-4">
                        <span className="text-white/20">Project</span>
                        <a href="#hero" className="hover:text-white/60 transition-colors">Home</a>
                        <a href="#features" className="hover:text-white/60 transition-colors">Features</a>
                        <a href="#amenities" className="hover:text-white/60 transition-colors">Amenities</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white/20">Details</span>
                        <a href="#floorplans" className="hover:text-white/60 transition-colors">Floorplans</a>
                        <a href="#specification" className="hover:text-white/60 transition-colors">Spec Sheet</a>
                        <a href="#location" className="hover:text-white/60 transition-colors">Location</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white/20">Social</span>
                        <a href="#" className="hover:text-white/60 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white/60 transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-white/30 text-[9px] uppercase tracking-[0.3em]">
                    &copy; 2024 Aurelia Residences. A masterpiece by Aurelia Group.
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl">🌲</div>
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl">🏛️</div>
                </div>
            </div>
            <div className="mt-16 text-center text-[9px] text-white/10 max-w-5xl mx-auto leading-relaxed uppercase tracking-[0.2em] italic">
                Artistic renderings shown are for conceptual representation. Final specifications are subject to development approvals and construction adjustments.
            </div>
        </div>
      </footer>

      <PopupForm />
    </div>
  );
};

export default App;
