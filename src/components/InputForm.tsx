import { useState } from 'react';
import { calculateChart } from '../services/apiClient';

export default function InputForm({ onResult }: { onResult: (data: any) => void }) {
  const [formData, setFormData] = useState({
    day: 1, month: 1, year: 2000, hour: 12, minute: 0,
    lat: 52.5, lon: 13.4, tz: 1 // Defaults for Berlin
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await calculateChart(formData);
      onResult(result);
    } catch (err) {
      console.error(err);
      alert('Fehler bei der Berechnung');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-4">
      <h3 className="font-serif text-xl border-b border-white/10 pb-2">Geburtsdaten</h3>
      <div className="grid grid-cols-3 gap-2">
        <input type="number" placeholder="Tag" className="bg-white/10 p-2 rounded" onChange={e => setFormData({...formData, day: Number(e.target.value)})} />
        <input type="number" placeholder="Monat" className="bg-white/10 p-2 rounded" onChange={e => setFormData({...formData, month: Number(e.target.value)})} />
        <input type="number" placeholder="Jahr" className="bg-white/10 p-2 rounded" onChange={e => setFormData({...formData, year: Number(e.target.value)})} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input type="number" placeholder="Stunde" className="bg-white/10 p-2 rounded" onChange={e => setFormData({...formData, hour: Number(e.target.value)})} />
        <input type="number" placeholder="Minute" className="bg-white/10 p-2 rounded" onChange={e => setFormData({...formData, minute: Number(e.target.value)})} />
      </div>
      <button type="submit" className="bg-[var(--color-accent)] w-full py-3 rounded-lg font-bold text-black hover:bg-orange-600 transition">Berechnen</button>
    </form>
  );
}
