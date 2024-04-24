'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/app/ui/button';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function Back() {
    const router = useRouter();

    return (
        <Button onClick={() => router.back()}>
            <FaArrowLeftLong className="mr-2" />
            Back
        </Button>
    );
}
