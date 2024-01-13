'use client'

import Header from '@/app/ui/results/header';
import Results from '@/app/results/results';
import Map from '@/app/ui/map';
import { ResultsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default function Page() {

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="grid gap-4 grid-cols-3">
          <Suspense fallback={<ResultsSkeleton />}>
            <Results />
          </Suspense>

          <Suspense fallback={
            <button type="button" className="inline-flex items-center px-4 py-2 text-gray transition ease-in-out duration-150">
              <svg className="motion-safe:animate-spin -ml-1 mr-3 h-5 w-5 text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Rendering the map...
            </button>
          }>
            <div className="col-span-2">
              <Map latitude={52.5} longitude={1.7} marker={false}/>
            </div>
          </Suspense>
        </div>
      </main>
    </>
  )
}
