import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <div className="bg-blue-100 text-center p-4">
            <h1 className="font-bold">404</h1>
            <h2 className="text-2xl font-semibold mb-2">uh oh! That page has not been found in this site</h2>
            <p className="text-lg mb-5">Sorry, we couldn&apos;t find requested resource...</p>

            <Link href="/">Why not return to the home page?</Link>
        </div>        
      </main>
      <Footer />
    </>
  )
}