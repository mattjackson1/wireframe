'use client'

import { getData } from '@/app/lib/data';
import { Card } from '@/app/ui/card';
import Link from "next/link";
import Search from '@/app/ui/search';
import { useSearchParams } from 'next/navigation';

export default async function Page() {
  const searchParams = useSearchParams(); 
  const query = searchParams.get('qt');
  const data = await getData(`https://api.openobjects.com/v2/infolink/records?key=6037874de4b0d1e39971ca2e&count=10&query=${query}`);

  return (
    <>
      
      <Search placeholder="Search Suffolk's API..." />

      <div className="grid gap-4 grid-cols-3">
        {data.records.map((record, index) => (
          <Card key={index}>
            <Link
              className="block"
              href={record.recordUri}
            >
              {record.title}
            </Link>
          </Card>
        ))}
      </div>
    </>
  )
}
