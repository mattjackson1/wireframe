async function getData() {
  const res = await fetch("https://swapi.dev/api/planets");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data from API");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <ul className="grid gap-4 grid-cols-3">
      {data.results.map((planet, index) => (
        <li className="border shadow hover:shadow-lg p-2" key={index}>{planet.name}</li>
      ))}
    </ul>
  )
}
