'use client';

import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

export default function Map({ latitude, longitude, showMarker }: { latitude: number; longitude: number; showMarker: boolean }) {
  
  return (
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
      
      {showMarker}

      <Marker position={[latitude, longitude]}>
        <Popup>
          lat: {latitude}, lng: {longitude}
        </Popup>
      </Marker>

    </LeafletMap>
  );
}
