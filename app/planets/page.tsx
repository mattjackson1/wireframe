async function getData() {
  const res = await fetch("https://swapi.dev/api/planets");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <ul>
      {data.results.map((planet) => (
        <li key={planet.id}>{planet.name}</li>
      ))}
    </ul>
  )
}
