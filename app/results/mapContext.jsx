import { createContext, useContext, useState } from 'react';
import dynamic from 'next/dynamic';

const MapContext = createContext();

export function Map() {
    const [isOpen, setIsOpen] = useState();
  
    return (
      <MapContext.Provider value={{ isOpen }}>
        <Map />
      </MapContext.Provider>
    );
}

const Map = useMemo(
    () =>
        dynamic(() => import('@/app/ui/map'), {
            loading: () => (
                <button type="button" className="text-gray inline-flex items-center px-4 py-2 transition duration-150 ease-in-out">
                    <svg
                        className="text-gray -ml-1 mr-3 h-5 w-5 motion-safe:animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Rendering the map...
                </button>
            ),
            ssr: false,
        }),
    [],
);