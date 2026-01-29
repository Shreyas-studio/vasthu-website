import React from 'react';
import { LOCATION_POINTS } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#F9FBFA]">
      <div className="container mx-auto px-6">
        <h2 className="serif text-4xl md:text-5xl green-text text-center mb-6 font-light">
          Location
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-sm">
          Connected to the best the city has to offer.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {LOCATION_POINTS.map((loc, i) => (
            <div key={i} className="bg-white px-6 py-4 rounded-sm border border-gray-100 min-w-[160px] text-center">
              <p className="serif text-lg green-text">{loc.title}</p>
              <p className="text-gray-500 text-sm">{loc.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
