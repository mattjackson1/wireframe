'use client';

import { SetStateAction, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function Search({ placeholder }: { placeholder: string }) {
    function SearchInput() {
        const searchParams = useSearchParams();
        const [query, setquery] = useState<string | null>(searchParams.get('query'));
        const handleChange = (e: { target: { value: SetStateAction<string | null> } }) => {
            setquery(e.target.value);
        };
        return (
            <input
                name="query"
                id="search"
                value={query || ''}
                onChange={handleChange}
                className="peer block w-full border-0 border-b border-blue-600 bg-white py-[9px] pl-10 text-sm text-blue-600 outline-2 transition-all placeholder:text-blue-600 hover:text-gray-900 hover:placeholder:text-gray-500 focus:text-gray-900 focus:placeholder:text-gray-500 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:text-gray-200 dark:focus:text-gray-200"
                placeholder={placeholder}
            />
        );
    }

    return (
        <form action="/results?query={query}" className="my-3 flex flex-1 flex-shrink-0 justify-center">
            <div className="relative flex min-w-[50%]">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <Suspense fallback={<>Loading inputs... </>}>
                    <SearchInput />
                </Suspense>
                <FaMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-hover:text-gray-900 peer-focus:text-gray-900" />
            </div>
        </form>
    );
}
