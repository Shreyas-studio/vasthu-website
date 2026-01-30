import React, { useState, useEffect, useRef } from 'react';
import { SITE_LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y <= 10) {
        setShowHeader(true);
      } else if (y > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ease-out pointer-events-none"
      style={{
        transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
        opacity: showHeader ? 0.5 : 0,
        pointerEvents: showHeader ? 'auto' : 'none',
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 pointer-events-auto">
          <img src={SITE_LOGO_URL} alt="Logo" className="h-10 w-auto object-contain logo-img" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden'); }} />
          <span className="serif text-xl font-semibold text-white hidden logo-fallback drop-shadow-sm">AURELIA</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
