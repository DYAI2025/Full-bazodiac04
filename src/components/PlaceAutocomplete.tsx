import { useEffect, useRef } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';

export default function PlaceAutocomplete({ onPlaceSelect }: { onPlaceSelect: (lat: number, lng: number) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const placesLib = useMapsLibrary('places');

  useEffect(() => {
    if (!placesLib || !inputRef.current) return;

    const autocomplete = new placesLib.Autocomplete(inputRef.current, {
        fields: ['geometry', 'name'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry?.location) {
        onPlaceSelect(place.geometry.location.lat(), place.geometry.location.lng());
      }
    });
  }, [placesLib, onPlaceSelect]);

  return <input ref={inputRef} placeholder="Ort eingeben" className="bg-white/10 p-2 rounded w-full" />;
}
