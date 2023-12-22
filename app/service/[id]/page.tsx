import { Suspense } from "react";
import { getData } from "@/app/lib/data";
import Image from "next/image";
import Header from "@/app/ui/header";
import Map from '@/app/ui/map';

export default async function Page({ params }: { params: { id: string } }) {
  const record = await getData(
    `https://api.openobjects.com/v2/infolink/records/${params.id}?key=6037874de4b0d1e39971ca2e`
  );  

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="grid gap-4 grid-cols-3">
          <div className="bg-gray-50 p-3 col-span-2">
            <div className="flex mb-2">
              <h1 className="grow">{record.title}</h1>
              
              {!!record.logo && (
                <Suspense fallback={<h2>Loading...</h2>}>
                  <Image
                    src={record.logo.filename}
                    className="rounded-full"
                    alt={record.logo.description}
                    width={100}
                    height={100}
                  />
                </Suspense>
              )}
            </div>
            {record.contact_telephone && `Tel: ${record.contact_telephone}`}
            {record.public_address_postcode && `Postcode: ${record.public_address_postcode}`}
            <div
              dangerouslySetInnerHTML={{ __html: record.description }}
              className="mb-1"
            ></div>
          </div>

          <Suspense fallback={<h2>Loading the map...</h2>}>
            <Map latitude={record.location_postcode?.latitude} longitude={record.location_postcode?.longitude} />
          </Suspense>
        </div>
      </main>
    </>
  );
}
