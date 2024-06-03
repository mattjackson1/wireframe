'use client';

import { useState } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { MapProps } from '@/app/lib/definitions';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Red_MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" width="200px" height="200px" viewBox="0 0 384 512">
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
    </svg>
    `)}`;

const DefaultIcon = L.icon({
    iconUrl: Red_MARKER,
    iconSize: [40, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
});

export default function Map({ latitude, longitude, zoom = 13 }: MapProps) {
    const [center, setCenter] = useState([latitude, longitude]);

    const interactiveMap = zoom !== 13;

    function CenterOnCurrentLocationButton({ setCenter }: any) {
        const map = useMap();

        const handleCenterOnCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCenter([latitude, longitude]);
                    map.setView([latitude, longitude], map.getZoom());
                },
                (error) => {
                    console.error('Browser encountered error fetching geolocation: ', error);
                },
            );
        };

        return (
            <button
                onClick={handleCenterOnCurrentLocation}
                className="absolute bottom-0 left-0 z-[400] m-3 rounded bg-blue-500 p-2 text-white dark:bg-gray-500"
            >
                Center on my Current Location
            </button>
        );
    }

    function MapEvents() {
        const map = useMapEvents({
            moveend: () => {
                const { lat, lng } = map.getCenter();
                setCenter([lat, lng]);
            },
        });
        return null;
    }

    return (
        <>
            {interactiveMap && (
                <p className="px-3 md:px-0">
                    Centre: ({center[0].toFixed(2)}, {center[1].toFixed(2)}) - now just need to update the API query...
                </p>
            )}

            <LeafletMap
                className="w-100 col-span-3 h-[555px] px-4 md:col-auto md:px-0"
                center={[center[0], center[1]]}
                zoom={zoom}
                scrollWheelZoom={false}
            >
                {interactiveMap && <MapEvents />}
                {interactiveMap && navigator.geolocation && <CenterOnCurrentLocationButton setCenter={setCenter} />}

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {!interactiveMap && (
                    <Marker position={[center[0], center[1]]} icon={DefaultIcon}>
                        <Popup>
                            latitude: {center[0]},<br />
                            longitude: {center[1]}
                        </Popup>
                    </Marker>
                )}
            </LeafletMap>
        </>
    );
}
