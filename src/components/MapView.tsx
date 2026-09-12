import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MapViewProps {
  originLat: number;
  originLng: number;
  originLabel: string;
  destLat: number;
  destLng: number;
  destLabel: string;
}

export function MapView({
  originLat,
  originLng,
  originLabel,
  destLat,
  destLng,
  destLabel,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [originLng, originLat],
      zoom: 11,
    });

    // Add origin marker
    const originMarker = document.createElement('div');
    originMarker.className = 'w-8 h-8 bg-blue-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center';
    originMarker.innerHTML = '<span class="text-white text-xs font-bold">홈</span>';

    new maplibregl.Marker({ element: originMarker }).setLngLat([originLng, originLat]).addTo(map.current);

    // Add destination marker
    const destMarker = document.createElement('div');
    destMarker.className = 'w-8 h-8 bg-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center';
    destMarker.innerHTML = '<span class="text-white text-xs font-bold">직장</span>';

    new maplibregl.Marker({ element: destMarker }).setLngLat([destLng, destLat]).addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [originLat, originLng, destLat, destLng]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div ref={mapContainer} className="w-full h-96" />
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="font-medium text-gray-900">{originLabel}</span>
            </div>
            <p className="text-sm text-gray-600">거주지</p>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <span className="font-medium text-gray-900">{destLabel}</span>
            </div>
            <p className="text-sm text-gray-600">근무지</p>
          </div>
        </div>
      </div>
    </div>
  );
}
