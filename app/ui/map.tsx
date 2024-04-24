'use client';

import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

interface MapProps {
    latitude: number;
    longitude: number;
    zoom?: number; // Make the 'zoom' prop optional
}

export default function Map({ latitude, longitude, zoom = 13 }: MapProps) {
    return (
        <LeafletMap className="w-100 col-span-3 h-[600px] md:col-auto" center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {zoom === 13 && (
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        lat: {latitude}, lng: {longitude}
                    </Popup>
                </Marker>
            )}
        </LeafletMap>
    );
}
