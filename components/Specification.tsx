import React from 'react';
import { SPECIFICATIONS } from '../constants';

const Specification: React.FC = () => {
  return (
    <section id="specification" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="serif text-4xl md:text-5xl green-text text-center mb-6 font-light">
          Specifications
        </h2>
        <h3 className="serif text-2xl md:text-3xl green-text text-center mb-4 font-light">
          Meticulous Attention to Detail.
        </h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {SPECIFICATIONS.map((spec, i) => (
            <div key={i} className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
              <span className="text-[#1A3C34] font-semibold shrink-0 mt-0.5">•</span>
              <div>
                <span className="font-semibold text-gray-800">{spec.category}:</span>
                <span className="text-gray-600 text-sm md:text-base ml-1">{spec.details}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specification;
