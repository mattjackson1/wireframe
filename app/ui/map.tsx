'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { MapProps } from '@/app/lib/definitions';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Red_MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" width="200px" height="200px" viewBox="0 0 384 512">
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
    </svg>
    `)}`;
const Blue_MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="blue" width="200px" height="200px" viewBox="0 0 384 512">
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
    </svg>
    `)}`;
const Home_MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="rgb(0 112 243)" height="200px" width="200px" viewBox="0 0 576 512">
        <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"></path>
    </svg>
    `)}`;

const DefaultIcon = L.icon({
    iconUrl: Red_MARKER,
    iconSize: [40, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
});

const HomeIcon = L.icon({
    iconUrl: Home_MARKER,
    iconSize: [16, 16],
});

export default function Map({ latitude, longitude, zoom = 13 }: MapProps) {
    const [center, setCenter] = useState([latitude, longitude]);
    const [home, setHome] = useState<number[]>([]);
    const { resolvedTheme } = useTheme();

    const interactiveMap = zoom !== 13;

    function CenterOnCurrentLocationButton({ setCenter }: any) {
        const map = useMap();

        const handleCenterOnCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCenter([latitude, longitude]);
                    setHome([latitude, longitude]);
                    map.setView([latitude, longitude], map.getZoom());
                },
                (error) => {
                    console.error('Your browser encountered an error fetching a geolocation: ', error);
                },
            );
        };

        return (
            <button
                onClick={handleCenterOnCurrentLocation}
                className="absolute bottom-0 left-0 z-[400] m-3 rounded bg-blue-500 p-2 text-white dark:bg-gray-500"
            >
                Centre on my Current Location
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
                className="w-100 col-span-3 mx-4 h-[555px] md:col-auto md:mx-0"
                center={[center[0], center[1]]}
                zoom={zoom}
                scrollWheelZoom={false}
                touchZoom={true}
                dragging={interactiveMap}
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

                {home.length === 2 && (
                    <Marker position={[home[0], home[1]]} icon={HomeIcon}>
                        <Popup>Your current location</Popup>
                    </Marker>
                )}
            </LeafletMap>
        </>
    );
}
