import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function Pagination({ totalPages }: { totalPages: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    return (
        <>
            {/* using useRouter */}
            <button
                onClick={() => {
                    // <pathname>?sr=asc
                    router.push(pathname + '?' + createQueryString('sr', '10'));
                }}
            >
                more...
            </button>
        </>
    );
}
