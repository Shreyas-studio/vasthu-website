import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="serif text-4xl md:text-5xl green-text text-center mb-6 font-light">
          Why Aurelia
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-sm">
          A sanctuary designed for those who appreciate the finest things in life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="serif text-xl green-text mb-2">Architectural Excellence</h3>
            <p className="text-gray-500 text-sm">World-renowned design meeting timeless elegance.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="serif text-xl green-text mb-2">Green Living</h3>
            <p className="text-gray-500 text-sm">Sustainable luxury with eco-conscious amenities.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="serif text-xl green-text mb-2">Privacy & Security</h3>
            <p className="text-gray-500 text-sm">24/7 concierge and state-of-the-art security.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
