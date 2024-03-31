import { Suspense, Fragment } from "react";
import { getData } from "@/app/lib/data";
import Image from "next/image";
import Map from "@/app/ui/map";
import { fields } from "@/app/lib/display-fields";

export default async function Page({ params }: { params: { id: string } }) {
  const record = await getData(
    `https://api.openobjects.com/v2/infolink/records/${params.id}?key=${process.env.API_KEY}`,
  );

  return (
    <main className="mb-3 flex flex-col p-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 bg-gray-50 p-3 md:col-span-2">
          <div className="mb-2 flex items-start">
            <h1 className="grow">{record.title}</h1>

            {!!record.logo && (
              <Suspense fallback={<h2>Loading...</h2>}>
                <Image
                  src={record.logo.filename}
                  alt={record.logo.description}
                  className="flex"
                  width={100}
                  height={100}
                />
              </Suspense>
            )}
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: record.content }}
            className="mb-3"
          ></div>
        </div>
      </div>
    </main>
  );
}
