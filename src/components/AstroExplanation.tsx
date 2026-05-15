import { PLANETS } from '../constants/astrology';

export default function AstroExplanation() {
  return (
    <div className="space-y-16 py-24 text-[var(--color-ivory)]">
      {/* Ascendant Explanation */}
      <section className="bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10 p-10">
        <h2 className="font-serif text-4xl mb-6 text-white font-medium">Der Aszendent: Deine Maske zur Welt</h2>
        <div className="text-lg leading-relaxed space-y-4 opacity-80">
          <p>
            Der Aszendent ist das Sternzeichen, das zum exakten Zeitpunkt deiner Geburt am östlichen Horizont aufging. 
            Er ist der Punkt, der das erste Haus deines Horoskops markiert. Während die Sonne dein inneres Kernwesen beschreibt, 
            ist der Aszendent die Art und Weise, wie du auf deine Umgebung wirkst und wie du den ersten Schritt in Begegnungen machst.
          </p>
          <p>
            Da der Aszendent als Beginn des ersten Hauses den Kontext für dein gesamtes Horoskop aufspannt, beeinflusst er maßgeblich, 
            welche Lebensbereiche (Häuser) welche Themen für dich bereithalten. Er prägt dein intuitives Auftreten, deine äußere Erscheinung 
            und deine persönliche Herangehensweise an neue Lebensphasen.
          </p>
        </div>
        <div className="mt-8 p-4 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-lg text-sm italic">
          Hinweis zur Genauigkeit: Da der Aszendent sich etwa alle zwei Stunden verschiebt, ist eine exakte Geburtszeit entscheidend. 
          Sollte deine Geburtszeit nur geschätzt oder unbekannt sein, führen wir die Berechnung auf Basis von Näherungswerten durch. 
          In solchen Fällen sind Aszendent und Häuser als vorläufig (provisional) zu betrachten.
        </div>
      </section>

      {/* Planets Explanation */}
      <section className="bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10 p-10">
        <h2 className="font-serif text-4xl mb-12 text-white font-medium text-center">Bedeutung der Planeten</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PLANETS.map((planet) => (
            <div key={planet.name} className="p-6 bg-white/[0.02] rounded-xl border border-white/5">
              <h3 className="text-2xl font-serif text-[var(--color-accent)] mb-2">{planet.name}</h3>
              <p className="text-lg opacity-80 leading-relaxed">{planet.meaning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
