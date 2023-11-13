import { getData } from '@/app/lib/data';
import { Card } from '@/app/ui/card';

export default async function Channels() {
    const data = await getData(`https://api.openobjects.com/v2/infolink/typelists?key=6037874de4b0d1e39971ca2e`);

    return (
        <div className="grid gap-4 grid-cols-3">
            {data.typeLists.map((typeList) => (
                typeList.types.map((type) => (
                    <Card>
                        {type.displayName}
                    </Card>
                ))
            ))}
        </div>
    );
}