"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export default function Map({ marker }: { marker: string[] }) {
  return (
    <MapContainer style={{width:'100%',height: '500px'}} center={marker} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={marker}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
