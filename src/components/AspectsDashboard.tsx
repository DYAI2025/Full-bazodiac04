import React from 'react';

type Aspect = {
  planet1: string;
  planet2: string;
  type: string;
  angle: number;
};

// Mock-Daten für die visuelle Darstellung (sollten letztendlich aus der API kommen)
const ASPECTS: Aspect[] = [
  { planet1: 'Sonne', planet2: 'Mond', type: 'Trigon', angle: 120 },
  { planet1: 'Merkur', planet2: 'Venus', type: 'Konjunktion', angle: 0 },
  { planet1: 'Mars', planet2: 'Saturn', type: 'Quadrat', angle: 90 },
];

export default function AspectsDashboard({ aspects }: { aspects?: Aspect[] }) {
  const displayAspects = aspects || ASPECTS;
  return (
    <section className="py-16">
      <h2 className="font-serif text-3xl mb-8 text-white font-medium text-center">Planetenaspekte</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayAspects.map((aspect, index) => (
          <div key={index} className="bg-white/[0.02] border border-white/10 p-6 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-white font-serif text-lg">{aspect.planet1} - {aspect.planet2}</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-accent)]">{aspect.type}</p>
            </div>
            <div className="bg-white/10 px-3 py-1 rounded text-sm font-mono text-white">
              {aspect.angle}°
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
