import React from 'react';
import { FLOOR_PLANS } from '../constants';

const FloorPlans: React.FC = () => {
  return (
    <section id="floorplans" className="py-24 bg-[#F9FBFA]">
      <div className="container mx-auto px-6">
        <h2 className="serif text-4xl md:text-5xl green-text text-center mb-6 font-light">
          Floor Plans
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-sm">
          Find your perfect layout.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLOOR_PLANS.map((fp) => (
            <div key={fp.id} className="bg-white rounded-sm overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src={fp.image}
                  alt={fp.type}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x450?text=' + encodeURIComponent(fp.type); }}
                />
              </div>
              <div className="p-6">
                <h3 className="serif text-xl green-text mb-2">{fp.type}</h3>
                <p className="text-gray-500 text-sm mb-1">{fp.area}</p>
                <p className="text-[#1A3C34] font-semibold text-sm">{fp.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
