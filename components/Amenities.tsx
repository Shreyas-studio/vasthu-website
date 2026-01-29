import React from 'react';
import { AMENITIES } from '../constants';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-[#F9FBFA]">
      <div className="container mx-auto px-6">
        <h2 className="serif text-4xl md:text-5xl green-text text-center mb-6 font-light">
          Amenities
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-sm">
          Curated experiences for the discerning resident.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((a) => (
            <div key={a.id} className="bg-white p-8 rounded-sm border border-gray-100 hover:border-[#1A3C34]/20 transition-colors">
              <span className="text-3xl mb-4 block">{a.icon}</span>
              <h3 className="serif text-lg green-text mb-2">{a.title}</h3>
              <p className="text-gray-500 text-sm">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
