import { getData } from '@/actions';
import Channel from './channel';

let data: any = null;
let error: string | null = null;

try {
    data = await getData(`https://api.openobjects.com/v2/infolink/typelists?key=${process.env.API_KEY}`);
} catch (err: unknown) {
    if (err instanceof Error) {
        error = err.message;
    } else {
        error = 'An unknown error occurred.';
    }
}

const typeListsArray = data.typeLists;

export default async function Channels() {
    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            <h2 className="sr-only">Choose a channel</h2>
            {typeListsArray.map((typeList: any) => (
                <Channel typeList={typeList} key={typeList.name} />
            ))}
        </div>
    );
}
