import { getData } from '@/app/lib/data';
import { Card } from '@/app/ui/card';
import Link from "next/link";
import Results from './getResults';

export default async function Page() {
  const data = await getData("https://swapi.dev/api/planets");

  return (
    <>
      <Results />

      <div className="grid gap-4 grid-cols-3">
        {data.results.map((planet, index) => (
          <Card key={index}>
            <Link
              className="block"
              href={planet.url}
            >
              {planet.name}
            </Link>
          </Card>
        ))}
      </div>
    </>
  )
}
