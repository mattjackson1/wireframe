'use client';

import Search from '@/app/ui/clientsearch';
import Results from '@/app/results/results';
import { ResultsSkeleton } from '@/app/ui/skeletons';
import { Suspense, useMemo } from 'react';
import dynamic from 'next/dynamic';

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
        <main className="mb-3 flex flex-col p-6">
            <div className="mb-3 bg-blue-100 p-4">
                <Suspense fallback={<>Loading the search... </>}>
                    <Search placeholder="Search Suffolk's API..." />
                </Suspense>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-1">
                    <Suspense key={query + startIndex} fallback={<ResultsSkeleton />}>
                        <Results query={query} startIndex={startIndex} />
                    </Suspense>

                    {/* <Pagination totalPages={totalPages} /> */}
                </div>

                <div className="col-span-3 md:col-span-2">
                    <Suspense fallback={<div>Loading map... </div>}>
                        <Map latitude={52.2} longitude={0.75} zoom={10} />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
