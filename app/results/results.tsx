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
    let data: any = null;
    let error: string | null = null;

    try {
        data = await getData(
            `https://api.openobjects.com/v2/infolink/records?key=6037874de4b0d1e39971ca2e&count=10&query=${query}&startIndex=${startIndex}`,
        );
    } catch (err: unknown) {
        if (err instanceof Error) {
            error = err.message;
        } else {
            error = 'An unknown error occurred.';
        }
    }

    if (error) {
        return <div className="px-6 text-red-500">{error}</div>;
    }

    let title = 'no matching services';
    if (data.totalRecords > 0) {
        title = `${startIndex} to ${Math.min(9 + Number(startIndex), data.totalRecords)} of ${data.totalRecords} services`;
    }
    const hasNextPage = data.totalRecords > 9 + Number(startIndex);

    return (
        <div className="grid h-full gap-4 overflow-y-auto px-6">
            <h1>{title}</h1>

            {data.records.map((record: Record, index: number) => (
                <Card key={index}>
                    <Link className="block hover:underline" href={`service/${record.externalId}?query=${query}`}>
                        <h2>{record.title}</h2>
                    </Link>
                    <div className="flex flex-wrap">
                        {record.public_address_map_postcode}
                        <div className="ml-auto flex gap-3">
                            <Link className="text-blue-600" href={`tel:${record.contact_email}`}>
                                <FaSquarePhone size={18} title={`Telephone ${record.title}`} />
                            </Link>
                            <Link className="text-blue-600" href={`mailto:${record.contact_email}`}>
                                <FaSquareEnvelope size={18} title={`Email ${record.title}`} />
                            </Link>
                        </div>
                    </div>
                </Card>
            ))}

            {hasNextPage && <Pagination />}
        </div>
    );
}
