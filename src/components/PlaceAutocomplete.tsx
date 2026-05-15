import { useEffect, useRef } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';

export default function PlaceAutocomplete({ 
  onPlaceSelect 
}: { 
  onPlaceSelect: (lat: number, lng: number, tz: string) => void 
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const placesLib = useMapsLibrary('places');

  useEffect(() => {
    if (!placesLib || !inputRef.current) return;

    const autocomplete = new placesLib.Autocomplete(inputRef.current, {
        fields: ['geometry', 'name'],
    });

    autocomplete.addListener('place_changed', async () => {
      const place = autocomplete.getPlace();
      if (place.geometry?.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        
        // Fetch timezone using public API
        try {
            const response = await fetch(`https://timeapi.io/api/TimeZone/coordinate?latitude=${lat}&longitude=${lng}`);
            const data = await response.json();
            const timeZone = data.timeZone || 'UTC';
            onPlaceSelect(lat, lng, timeZone);
        } catch (e) {
            onPlaceSelect(lat, lng, 'UTC');
        }
      }
    });
  }, [placesLib, onPlaceSelect]);

  return <input ref={inputRef} placeholder="Geburtsort eingeben" className="bg-white/10 p-3 rounded-lg w-full text-white placeholder:text-gray-400" />;
}
