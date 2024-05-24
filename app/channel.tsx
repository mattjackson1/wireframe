import { Card } from '@/app/ui/card';
import Link from 'next/link';

export default function Channel({ typeList }: { typeList: any }) {
    const name = typeList.name;

    return typeList.types.map((type: any) => (
        <Card key={name}>
            <Link href={`/results?query=${name}:0`} className="no-underline">
                <h2 className="font-bold">{type.displayName}</h2>
                <div dangerouslySetInnerHTML={{ __html: type.description }}></div>
            </Link>
        </Card>
    ));
}
