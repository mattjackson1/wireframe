'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

export default function Map({ latitude, longitude }: { latitude: number; longitude: number }) {

  // Use state to track if it's safe to render
  const [safeToRender, setSafeToRender] = useState(false);

  // useEffect to check if it's safe to render on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSafeToRender(true);
    }
  }, []);

  return (
    // Render LeafletMap only if it's safe to render
    safeToRender && (
      <LeafletMap
        className="w-100 h-[500px]"
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[latitude, longitude]}>
          <Popup>
            lat: {latitude}, lng: {longitude}
          </Popup>
        </Marker>
      </LeafletMap>
    )
  );
};
