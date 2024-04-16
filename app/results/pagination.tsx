import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { FaAnglesRight } from 'react-icons/fa6';

export default function Pagination() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const startIndexMore = 10 + Number(searchParams?.get('startIndex'));

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
                className="flex items-center justify-center rounded border p-1"
                onClick={() => {
                    router.push(pathname + '?' + createQueryString('startIndex', startIndexMore.toString()));
                }}
            >
                <span className="mr-2">Next page</span> <FaAnglesRight />
            </button>
        </>
    );
}
