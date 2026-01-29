import React from 'react';
import { SPECIFICATIONS } from '../constants';

const Specification: React.FC = () => {
  return (
    <section id="specification" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="serif text-4xl md:text-5xl green-text text-center mb-6 font-light">
          Specifications
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-sm">
          Premium finishes and quality construction.
        </p>
        <div className="max-w-3xl mx-auto space-y-6">
          {SPECIFICATIONS.map((spec, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-4 py-4 border-b border-gray-100 last:border-0">
              <span className="serif text-lg green-text font-medium min-w-[140px]">{spec.category}</span>
              <p className="text-gray-600 text-sm">{spec.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specification;
