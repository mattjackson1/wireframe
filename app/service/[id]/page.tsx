import { Suspense } from "react";
import AcmeLogo from "@/app/ui/acme-logo";
import { getData } from "@/app/lib/data";
import { Card } from "@/app/ui/card";
import Image from "next/image";
import Header from "@/app/ui/header";
import { useSearchParams } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const record = await getData(
    `https://api.openobjects.com/v2/infolink/records/${params.id}?key=6037874de4b0d1e39971ca2e`
  );

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="grid gap-4 grid-cols-3">
          <Card>
            <div className="flex mb-2">
              <h2 className="grow">{record.title}</h2>
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
            {!!record.contact_telephone && `Tel: ${record.contact_telephone}`}
            {!!record.location_postcode &&
              `Postcode: ${record.location_postcode}`}
            <div
              dangerouslySetInnerHTML={{ __html: record.description }}
              className="mb-1"
            ></div>
          </Card>
        </div>
      </main>
    </>
  );
}
