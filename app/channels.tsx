import { getData } from '@/actions';
import Channel from './channel';

const data = await getData(
    `https://api.openobjects.com/v2/infolink/typelists?key=${process.env.API_KEY}`,
);
const typeListsArray2 = data.typeLists;

export default async function Channels() {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            <h2 className="sr-only">Choose a channel</h2>
            {typeListsArray2.map((typeList: any) => (
                <Channel typeList={typeList} key={typeList.name} />
            ))}
        </div>
    );
}
