import { getData } from '@/actions';
import { Card } from '@/app/ui/card';
import Link from 'next/link';
import Pagination from './pagination';
import { FaSquarePhone } from 'react-icons/fa6';
import { FaSquareEnvelope } from 'react-icons/fa6';

interface Record {
    externalId: string;
    title: string;
    public_address_map_postcode: string;
    contact_telephone: string;
    contact_email: string;
}

interface ResultsProps {
    query: string;
    startIndex?: string;
}

export default async function Results({ query, startIndex = '1' }: ResultsProps) {
    const data = await getData(
        `https://api.openobjects.com/v2/infolink/records?key=6037874de4b0d1e39971ca2e&count=10&query=${query}&startIndex=${startIndex}`,
    );

    let title = 'no matching services';
    if (data.totalRecords > 0) {
        title = `${startIndex} to ${9 + Number(startIndex)} of ${data.totalRecords} services`;
    }

    return (
        <div className="grid h-full gap-4 overflow-y-auto px-6">
            <h1>{title}</h1>

            {data.records.map((record: Record, index: number) => (
                <Card key={index}>
                    <Link className="block" href={`service/${record.externalId}?query=${query}`}>
                        <h2>{record.title}</h2>
                    </Link>
                    <div className="flex flex-wrap">
                        {record.public_address_map_postcode}
                        <div className="ml-auto flex gap-3">
                            <Link className="text-blue-600" href={`tel:${record.contact_email}`}>
                                <FaSquarePhone size={18} />
                            </Link>
                            <Link className="text-blue-600" href={`mailto:${record.contact_email}`}>
                                <FaSquareEnvelope size={18} />
                            </Link>
                        </div>
                    </div>
                </Card>
            ))}

            {data.totalRecords > 10 && <Pagination />}
        </div>
    );
}
