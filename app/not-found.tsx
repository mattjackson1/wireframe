import Link from 'next/link';
 
export default function NotFound() {
  return (
    <>
      <main className="flex flex-col">
        <div className="bg-blue-100 text-center p-4">
            <h1 className="font-bold">Page not found</h1>
            <h2 className="text-2xl font-semibold mb-2">Sorry, the page or document you&apos;re looking for is not available</h2>
            <p className="text-lg mb-5">You can try using the search bar or the menu to find what you&apos;re looking for.</p>

            <Link href="/">Why not return to the home page?</Link>
        </div>
      </main>
    </>
  );
}