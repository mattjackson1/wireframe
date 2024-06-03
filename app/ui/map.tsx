'use client';

import { useState } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMap, useMapEvents, ZoomControl } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface MapProps {
    latitude: number;
    longitude: number;
    zoom?: number; // Make the 'zoom' prop optional
}

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
            <button onClick={handleCenterOnCurrentLocation} className="absolute bottom-0 left-0 z-[400] m-3 rounded bg-blue-500 p-2 text-white">
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
                <p>
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
                {navigator.geolocation && <CenterOnCurrentLocationButton setCenter={setCenter} />}

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {!interactiveMap && (
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
