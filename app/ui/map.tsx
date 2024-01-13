'use client';

import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { usePathname } from 'next/navigation';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

export default function Map({ latitude, longitude }: { latitude: number; longitude: number }) {

  const pathname = usePathname();

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


      {/* TEMPORARY - don't show pin on results page */}
      {pathname !== '/results' && (
            <Marker position={[latitude, longitude]}>
              <Popup>
                lat: {latitude}, lng: {longitude}
              </Popup>
            </Marker>
      )}

    </LeafletMap>
  );
}
