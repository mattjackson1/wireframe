"use client";

import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

export default function Map({ latitude, longitude, marker }: { latitude: number; longitude: number; marker: boolean }) {
  const markerPosition: LatLngExpression = [latitude, longitude];

  return (
    <LeafletMap
      className="w-100 h-[500px]"
      center={markerPosition}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker !== false && 
        <Marker position={markerPosition}>
          <Popup>
            lat: {markerPosition[0]}, lng: {markerPosition[1]}
          </Popup>
        </Marker>
      }
    </LeafletMap>
  );
}
