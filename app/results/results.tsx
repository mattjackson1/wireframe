import { useSearchParams } from 'next/navigation';
import { Key } from 'react';
import { getData } from '@/actions';
import { Card } from '@/app/ui/card';
import Link from 'next/link';

export default async function Results() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    let data;

    try {
        data = await getData(`https://api.openobjects.com/v2/infolink/records?key=6037874de4b0d1e39971ca2e&count=10&query=${query}`);
    } catch (error) {
        throw error; // Throw the error to trigger Next.js error handling
    }

    return (
        <div className="grid gap-4">
            <h1>Found {data.totalRecords > 0 ? data.totalRecords : ' no matching'} services</h1>

            {data.records.map(
                (
                    record: {
                        externalId: string;
                        title: string;
                        public_address_map_postcode: string;
                    },
                    index: Key | null | undefined,
                ) => (
                    <Card key={index}>
                        <Link className="block" href={`service/${record.externalId}`}>
                            <h2>{record.title}</h2>
                            {record.public_address_map_postcode}
                        </Link>
                    </Card>
                ),
            )}
        </div>
    );
}
