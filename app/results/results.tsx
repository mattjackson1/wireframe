import { getData } from '@/actions';
import { Card } from '@/app/ui/card';
import Link from 'next/link';
import Pagination from './pagination';

interface Record {
    externalId: string;
    title: string;
    public_address_map_postcode: string;
}

interface ResultsProps {
    query: string;
    startIndex?: string;
}

export default async function Results({ query, startIndex = '1' }: ResultsProps) {
    const data = await getData(
        `https://api.openobjects.com/v2/infolink/records?key=6037874de4b0d1e39971ca2e&count=10&query=${query}&startIndex=${startIndex}`,
    );

    return (
        <div className="grid gap-4">
            <h1>
                {startIndex} to {9 + Number(startIndex)} of {data.totalRecords > 0 ? data.totalRecords : ' no matching'} services
            </h1>

            {data.records.map((record: Record, index: number) => (
                <Card key={index}>
                    <Link className="block" href={`service/${record.externalId}?query=${query}`}>
                        <h2>{record.title}</h2>
                        {record.public_address_map_postcode}
                    </Link>
                </Card>
            ))}

            <Pagination />
        </div>
    );
}
