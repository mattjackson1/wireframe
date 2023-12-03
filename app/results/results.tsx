import { useSearchParams } from "next/navigation";
import { Key } from "react";
import { getData } from "@/app/lib/data";
import { Card } from "@/app/ui/card";
import Link from "next/link";

export default async function Results() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const data = await getData(
    `https://api.openobjects.com/v2/infolink/records?key=6037874de4b0d1e39971ca2e&count=10&query=${query}`
  );
  return (
    <>
      <h1>{data.totalRecords > 0 ? data.totalRecords : 'Sorry, no'} results</h1>
      <div className="grid gap-4 grid-cols-3">
        {data.records.map(
          (
            record: {
              externalId: string;
              title: string;
              public_address_map_postcode: string;
            },
            index: Key | null | undefined
          ) => (
            <Card key={index}>
              <Link className="block" href={`service/${record.externalId}`}>
                <h2>{record.title}</h2>
                {record.public_address_map_postcode}
              </Link>
            </Card>
          )
        )}
      </div>
    </>
  );
}
