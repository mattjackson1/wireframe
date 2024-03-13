import { getData } from '@/app/lib/data';
import { Card } from '@/app/ui/card';
import Link from "next/link";
import Channel from './channel';

export default async function Channels() {
    const data = await getData(`https://api.openobjects.com/v2/infolink/typelists?key=${process.env.API_KEY}`);

    return (        
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            <h2 className="sr-only">Choose a channel</h2>
            {data.typeLists.map((typeList: any) => (
                <Channel typeList={typeList} key={typeList.name}/>
            ))}
        </div>
    );
}