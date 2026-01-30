import React, { useState, useRef, useEffect } from 'react';
import { SITE_LOGO_URL } from '../constants';

const MENU_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#floorplans', label: 'Floor Plans' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <img src={SITE_LOGO_URL} alt="Logo" className="h-10 w-auto object-contain logo-img" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden'); }} />
          <span className="serif text-xl font-semibold text-white hidden logo-fallback drop-shadow-sm">AURELIA</span>
        </a>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            className="px-4 py-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-white hover:text-white/90 transition-colors border border-white/40 hover:border-white/60 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            Menu
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 py-2 bg-white/95 backdrop-blur border border-gray-100 rounded shadow-lg text-[11px] uppercase tracking-[0.25em] font-semibold">
              {MENU_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-gray-600 hover:green-text hover:bg-gray-50/80 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
