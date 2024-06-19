// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type ShortRecord = {
    externalId: string;
    title: string;
    public_address_map_postcode: string;
    contact_telephone: string;
    contact_email: string;
};

export type Field = {
    name: string;
    label: string;
    link_type?: string;
};

export type ResultsProps = {
    query: string;
    startIndex?: string;
};

export type MapProps = {
    latitude: number;
    longitude: number;
    zoom?: number; // Make the 'zoom' prop optional
};
