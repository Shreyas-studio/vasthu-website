import React, { useState } from 'react';
import { SITE_LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <img src={SITE_LOGO_URL} alt="Logo" className="h-10 w-auto object-contain logo-img" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden'); }} />
          <span className="serif text-xl font-semibold green-text hidden logo-fallback">AURELIA</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] font-semibold">
          <a href="#hero" className="green-text hover:opacity-80 transition-opacity">Home</a>
          <a href="#features" className="text-gray-500 hover:green-text transition-colors">Features</a>
          <a href="#amenities" className="text-gray-500 hover:green-text transition-colors">Amenities</a>
          <a href="#gallery" className="text-gray-500 hover:green-text transition-colors">Gallery</a>
          <a href="#floorplans" className="text-gray-500 hover:green-text transition-colors">Floor Plans</a>
          <a href="#location" className="text-gray-500 hover:green-text transition-colors">Location</a>
          <a href="#contact" className="text-gray-500 hover:green-text transition-colors">Contact</a>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 green-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-[11px] uppercase tracking-[0.25em] font-semibold">
          <a href="#hero" onClick={() => setMenuOpen(false)} className="green-text">Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-gray-600">Features</a>
          <a href="#amenities" onClick={() => setMenuOpen(false)} className="text-gray-600">Amenities</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="text-gray-600">Gallery</a>
          <a href="#floorplans" onClick={() => setMenuOpen(false)} className="text-gray-600">Floor Plans</a>
          <a href="#location" onClick={() => setMenuOpen(false)} className="text-gray-600">Location</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-600">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
