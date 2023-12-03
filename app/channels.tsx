import { getData } from '@/app/lib/data';
import { Card } from '@/app/ui/card';
import Link from "next/link";

export default async function Channels() {
    const data = await getData(`https://api.openobjects.com/v2/infolink/typelists?key=6037874de4b0d1e39971ca2e`);

    return (        
        <div className="grid gap-4 grid-cols-3">
            <h2 className="col-span-3 font-bold">Choose a channel</h2>
            {data.typeLists.map((typeList: any) => (
                typeList.types.map((type: any) => (
                    <Card key={type.name}>
                        <Link href="/results?qt={type.name}">
                            <h2 className="font-bold">{type.displayName}</h2>

                            <div dangerouslySetInnerHTML={{ __html: type.description }}></div>
                            
                            
                        </Link>
                    </Card>
                ))
            ))}
        </div>
    );
}