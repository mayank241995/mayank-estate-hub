import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Coordinates for the Google Maps location (approximate for Bangalore area)
  const coordinates: [number, number] = [77.5946, 12.9716]; // Bangalore coordinates

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken.trim();
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: coordinates,
        zoom: 15,
      });

      // Add marker for the location
      new mapboxgl.Marker({ color: '#d4af37' })
        .setLngLat(coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div class="p-2"><strong>Nanda Gokula Estates</strong><br/>Bangalore, Karnataka</div>')
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Invalid Mapbox token. Please check your token and try again.');
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    initializeMap();
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="bg-muted/50 rounded-xl p-8 h-96 flex flex-col items-center justify-center">
        <MapPin className="w-16 h-16 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-4">Interactive Map</h3>
        <p className="text-muted-foreground mb-6 text-center max-w-md">
          To display the interactive map, please enter your Mapbox public token. 
          You can get one free at{' '}
          <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            mapbox.com
          </a>
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-md space-y-4">
          <Input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full" disabled={!mapboxToken.trim()}>
            Load Map
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative">
      <div ref={mapContainer} className="h-96 w-full rounded-xl shadow-lg" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <p className="font-semibold text-sm">Nanda Gokula Estates</p>
            <p className="text-xs text-muted-foreground">Bangalore, Karnataka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;