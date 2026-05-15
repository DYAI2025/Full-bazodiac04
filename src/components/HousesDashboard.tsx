import React from 'react';

type House = {
  id: number;
  cusp: number;
  sign: string;
  meaning: string;
  meaning_deep: string;
  life_area: string;
  influence_text: string;
  angle_label?: string;
  isAngular: boolean;
};

// Mock data for visualization
const HOUSES: House[] = [
  { id: 1, cusp: 12, sign: 'Skorpion', meaning: 'Selbstbild & Auftreten', meaning_deep: 'Das Ich-Bewusstsein und der physische Körper.', life_area: 'Persönlichkeit', influence_text: 'Das Haus des Ich - prägt deine Ausstrahlung und deine unmittelbare Außenwirkung.', angle_label: 'Aszendent', isAngular: true },
  { id: 2, cusp: 14, sign: 'Schütze', meaning: 'Werte & Finanzen', meaning_deep: 'Die Bewertung von Materie und Talenten.', life_area: 'Besitz & Werte', influence_text: 'Dieses Haus steht für materielle Absicherung und die persönlichen Werte.', isAngular: false },
  { id: 3, cusp: 18, sign: 'Steinbock', meaning: 'Kommunikation & Lernprozesse', meaning_deep: 'Der Austausch und der lokale Bezug.', life_area: 'Kommunikation', influence_text: 'Hier zeigen sich deine Art zu lernen, zu denken und dich kurzzeitig auszudrücken.', isAngular: false },
  { id: 4, cusp: 22, sign: 'Wassermann', meaning: 'Herkunft & Zuhause', meaning_deep: 'Die psychologische Wurzel.', life_area: 'Heimat & Basis', influence_text: 'Das Haus der Wurzeln, der Familie und des privaten Rückzugsortes.', angle_label: 'Imum Coeli (IC)', isAngular: true },
  { id: 5, cusp: 25, sign: 'Fische', meaning: 'Kreativität & Freude', meaning_deep: 'Der freie Selbstausdruck.', life_area: 'Selbstausdruck', influence_text: 'Themen wie Kreativität, amouröse Abenteuer und kindliche Freude.', isAngular: false },
  { id: 6, cusp: 28, sign: 'Widder', meaning: 'Alltag & Routine', meaning_deep: 'Der Dienst am Leben.', life_area: 'Pflicht & Struktur', influence_text: 'Dein täglicher Rhythmus, Arbeitspflichten und die Gesundheit.', isAngular: false },
  { id: 7, cusp: 12, sign: 'Stier', meaning: 'Partnerschaft & Begegnung', meaning_deep: 'Die Spiegelung im Du.', life_area: 'Du & Beziehung', influence_text: 'Wie du auf andere Menschen zugehst und in Partnerschaften agierst.', angle_label: 'Deszendent', isAngular: true },
  { id: 8, cusp: 14, sign: 'Zwillinge', meaning: 'Transformation & Tiefe', meaning_deep: 'Die psychologische Alchemie.', life_area: 'Wandel & Bindung', influence_text: 'Alles, was über die Oberfläche hinausgeht: Tabus, Transformation und tiefe Bindungen.', isAngular: false },
  { id: 9, cusp: 18, sign: 'Krebs', meaning: 'Sinnsuche & Horizont', meaning_deep: 'Die geistige Weite.', life_area: 'Weitsicht', influence_text: 'Hier erweitert sich dein Horizont durch Reisen, Philosophie und Bildung.', isAngular: false },
  { id: 10, cusp: 22, sign: 'Löwe', meaning: 'Berufung & Sichtbarkeit', meaning_deep: 'Die gesellschaftliche Wirksamkeit.', life_area: 'Erfolg & Karriere', influence_text: 'Wie du dich in der Öffentlichkeit zeigst und dein Lebensziel verfolgst.', angle_label: 'Medium Coeli (MC)', isAngular: true },
  { id: 11, cusp: 25, sign: 'Jungfrau', meaning: 'Freundschaft & Gemeinschaft', meaning_deep: 'Die Einbettung ins Ganze.', life_area: 'Ideale', influence_text: 'Deine Einbindung in soziale Gruppen und dein Beitrag zur Gesellschaft.', isAngular: false },
  { id: 12, cusp: 28, sign: 'Waage', meaning: 'Rückzug & Inneres', meaning_deep: 'Die Auflösung des Ichs.', life_area: 'Spiritualität', influence_text: 'Das Haus des Unbewussten, des Rückzugs und der inneren Heilung.', isAngular: false },
];

export default function HousesDashboard({ isProvisional = false }: { isProvisional?: boolean }) {
  return (
    <section className="py-16">
      <h2 className="font-serif text-4xl mb-2 text-white font-medium text-center">Die 12 Häuser</h2>
      <p className="text-center text-[var(--color-ivory)]/60 mb-12">In welchen Lebensbereichen entfalten sich deine Themen?</p>
      
      {isProvisional && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg text-sm text-orange-200 text-center italic">
              Hinweis: Da die Geburtszeit unsicher ist, sind die Hauspositionen und der Aszendent als vorläufig (provisional) zu betrachten.
          </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {HOUSES.map((house) => (
          <div 
            key={house.id}
            className={`p-6 rounded-2xl border ${
              house.isAngular 
                ? 'bg-[var(--color-accent)]/10 border-[var(--color-accent)]/30' 
                : 'bg-white/[0.02] border-white/10'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`text-4xl font-serif ${house.isAngular ? 'text-white' : 'text-white/60'}`}>
                {house.id}.
              </span>
              <span className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-1 rounded">
                {house.cusp}° {house.sign}
              </span>
            </div>
            <h3 className="text-lg text-[var(--color-ivory)] font-medium mb-1">{house.meaning}</h3>
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] mb-3">{house.life_area}</p>
            <p className="text-sm opacity-70 leading-relaxed mb-2">{house.influence_text}</p>
            <p className="text-sm opacity-80 leading-relaxed italic">{house.meaning_deep}</p>
            
            {house.isAngular && <p className="mt-4 text-[10px] uppercase tracking-widest text-[var(--color-accent)]">{house.angle_label}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
