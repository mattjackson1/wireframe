import Search from '@/app/ui/clientsearch';
import Results from '@/app/results/results';
import { ResultsSkeleton } from '@/app/ui/skeletons';
import { Suspense, useMemo } from 'react';
import HelpButton from './helpButton';
import Facets from './facets';
import dynamic from 'next/dynamic';
import { Button } from '@/app/ui/button';
import { BsPencil } from 'react-icons/bs';
import { FaRegMap, FaRegFloppyDisk } from 'react-icons/fa6';
import { TfiRulerAlt } from 'react-icons/tfi';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        startIndex?: string;
    };
}) {
    const query = searchParams?.query || '';
    const startIndex = searchParams?.startIndex || '1';

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

    return (
        <main className="flex flex-col">
            <div className="mb-3 bg-blue-100 p-4 dark:bg-gray-800">
                <Suspense fallback={<>Loading the search... </>}>
                    <Search placeholder="Search Suffolk's API..." />
                </Suspense>
            </div>

            <div className="grid grid-cols-3">
                <div className="col-span-3 mb-3 md:col-span-1 md:h-[600px]">
                    <Suspense key={query + startIndex} fallback={<ResultsSkeleton />}>
                        <Results query={query} startIndex={startIndex} />
                    </Suspense>
                </div>

                <div className="col-span-3 h-full md:col-span-2">
                    <div className="mx-6 mb-1 flex flex-wrap justify-end gap-3">
                        <Suspense fallback={<>Loading the search... </>}>
                            <Facets />
                        </Suspense>
                        <Button>
                            <BsPencil className="h-[18px] w-[18px] sm:mr-2" />
                            <span className="hidden sm:block">Draw search area</span>
                        </Button>
                        <Button>
                            <FaRegFloppyDisk className="mr-2 h-[18px] w-[18px]" />
                            Save search
                        </Button>
                        <HelpButton />
                    </div>

                    <Suspense fallback={<div>Loading map... </div>}>
                        <Map latitude={52.2} longitude={0.75} zoom={10} />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
