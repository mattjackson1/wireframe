'use client';

import { Button } from '@/app/ui/button';
import { FaSliders } from 'react-icons/fa6';
import SlideOver from '@/components/slideover';

export default async function Facets({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {
    return (
        <SlideOver
            btnText={
                <>
                    <FaSliders className="mr-2 h-[18px] w-[18px]" />
                    <span>Filters</span>
                </>
            }
            title="Filters"
        >
            <div className="grow overflow-y-auto">
                <div className="mb-3">
                    <h2 className="mb-2 text-sm font-semibold leading-6 text-gray-950">Applied filters</h2>
                    <a className="mb-2 mr-2 rounded-lg border px-2 py-1">Free</a>
                    <a className="mb-2 mr-2 rounded-lg border px-2 py-1">Funded places</a>
                    <a className="mb-2 mr-2 rounded-lg border px-2 py-1">Wheelchair</a>
                </div>
                <h2 className="mb-2 text-sm font-semibold leading-6 text-gray-950">Available filters</h2>
                <label className="flex items-center">
                    <input type="checkbox" name="myCheckbox" className="ml-1 mr-2 rounded" />
                    <span>Parking</span>
                </label>
            </div>
            <Button>Apply filters</Button>
        </SlideOver>
    );
}
