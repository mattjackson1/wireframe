'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams();
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      className="flex flex-1 flex-shrink-0 justify-center"
    >
      <div className="relative flex min-w-[50%]">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          className="peer block w-full transition-all border-0 border-b border-white py-[9px] pl-10 text-sm outline-2 text-white hover:text-gray-900 focus:text-gray-900 placeholder:text-white hover:placeholder:text-gray-500 focus:placeholder:text-gray-500 bg-transparent hover:bg-white focus:bg-white"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 text-white peer-hover:text-gray-900 peer-focus:text-gray-900" />
      </div>
    </div>
  );
}
