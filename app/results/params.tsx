'use client';

import { useSearchParams } from 'next/navigation';

export default function Params() {
    const searchParams = useSearchParams();
    return searchParams.get('query');
}
