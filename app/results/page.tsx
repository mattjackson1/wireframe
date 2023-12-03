'use client'
import Header from '@/app/ui/header';
import { getData } from '@/app/lib/data';
import { Card } from '@/app/ui/card';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';

export default async function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const data = await getData(`https://api.openobjects.com/v2/infolink/records?key=6037874de4b0d1e39971ca2e&count=10&query=${query}`);

  return (

    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">

        <div className="grid gap-4 grid-cols-3">
          {data.records.map((record: { externalId: any; title: string | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; public_address_map_postcode: string | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
            <Card key={index}>
              <Link
                className="block"
                href={`service/${record.externalId}`}
              >
                {record.title}<br/>
                {record.public_address_map_postcode}
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}
