import { Suspense, Fragment } from "react";
import { getData } from "@/app/lib/data";
import Image from "next/image";
import Header from "@/app/ui/header";
import Map from '@/app/ui/map';
import { fields } from '@/app/lib/display-fields';

export default async function Page({ params }: { params: { id: string } }) {
  const record = await getData(
    `https://api.openobjects.com/v2/infolink/records/${params.id}?key=${process.env.API_KEY}`
  );  

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="grid gap-4 grid-cols-3">
          <div className="bg-gray-50 p-3 col-span-3 md:col-span-2">
            <div className="flex mb-2">
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
              dangerouslySetInnerHTML={{ __html: record.description }}
              className="mb-3"
            ></div>

            {/* Loop through and display each display field that has a value */}
            <dl className="grid grid-cols-2 gap-2">
              {fields.map((field, index) => (
                record[field.name] && (
                  <Fragment key={index}>
                    <dd className="bg-gray-200 p-2">{`${field.label}`}</dd>
                    <dt className="bg-gray-100 p-2">                      
                      
                      
                      {typeof record[field.name] === 'object'
                        ? record[field.name].displayName // Access the property of the object (adjust as needed)
                        : `${record[field.name]}` // Render as a string for non-object values
                      }  
                      
                      
                    </dt>
                  </Fragment>
                )
              ))}
            </dl>
            
          </div>

          <Suspense fallback={
          
            <button type="button" className="inline-flex items-center px-4 py-2 text-gray transition ease-in-out duration-150">
              <svg className="motion-safe:animate-spin -ml-1 mr-3 h-5 w-5 text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Rendering the map...
            </button>

          }>
            <Map latitude={record.location_postcode?.latitude} longitude={record.location_postcode?.longitude} />
          </Suspense>
        </div>
      </main>
    </>
  );
}
