import React, { useState } from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="serif text-4xl md:text-5xl green-text text-center mb-6 font-light">
          Gallery
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-sm">
          Glimpses of the Aurelia lifestyle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((img) => (
            <button
              key={img.id}
              type="button"
              className="relative aspect-[4/3] overflow-hidden rounded-sm group"
              onClick={() => setActive(active === img.id ? null : img.id)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=' + encodeURIComponent(img.title); }}
              />
              <div className="absolute inset-0 bg-[#1A3C34]/0 group-hover:bg-[#1A3C34]/20 transition-colors flex items-end">
                <span className="text-white text-sm font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.title} — {img.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
