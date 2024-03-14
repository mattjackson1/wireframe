import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <div className="bg-blue-100 p-4">
          <h2 className="text-2xl font-semibold mb-2">404 - Page not found</h2>
          <p className="text-lg mb-5">Sorry, we couldn't find requested resource...</p>

          <Link href="/">Return to the home page</Link>
        </div>        
      </main>
      <Footer />
    </>
  )
}