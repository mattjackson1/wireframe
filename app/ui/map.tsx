'use client';

import { useState } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface MapProps {
    latitude: number;
    longitude: number;
    zoom?: number; // Make the 'zoom' prop optional
}

export default function Map({ latitude, longitude, zoom = 13 }: MapProps) {
    const [center, setCenter] = useState([latitude, longitude]);

    function MapEvents() {
        const map = useMapEvents({
            moveend: () => {
                const newCenter = map.getCenter();
                setCenter([newCenter.lat, newCenter.lng]);
            },
        });
        return null;
    }

    return (
        <>
            {zoom !== 13 && (
                <p className="px-4 md:px-0">
                    Centre: ({center[0].toFixed(2)}, {center[1].toFixed(2)}) - now just need to update the API query...
                </p>
            )}
            <LeafletMap
                className="w-100 col-span-3 h-[555px] px-4 md:col-auto md:px-0"
                center={[center[0], center[1]]}
                zoom={zoom}
                scrollWheelZoom={false}
            >
                <MapEvents />

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {zoom === 13 && (
                    <Marker position={[center[0], center[1]]}>
                        <Popup>
                            lat: {center[0]}, lng: {center[1]}
                        </Popup>
                    </Marker>
                )}
            </LeafletMap>
        </>
    );
}
