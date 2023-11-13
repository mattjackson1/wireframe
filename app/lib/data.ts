export async function getData(endpoint: string) {
  const res = await fetch(endpoint, { cache: 'no-store' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data from API");
  }

  return res.json(); // parses JSON response into native JavaScript objects
}