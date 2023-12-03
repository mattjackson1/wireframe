'use client'

import Header from '@/app/ui/results/header';
import Results from '@/app/results/results';
import { ResultsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default function Page() {

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <Suspense fallback={<ResultsSkeleton />}>
          <Results />
        </Suspense>
      </main>
    </>
  )
}
