import Link from 'next/link';
import Image from 'next/image';
import puppy from '@/app/ui/images/404-puppy.png';

export default function NotFound() {
    return (
        <>
            <main className="flex flex-col">
                <div className="grid grid-cols-1 justify-center gap-3 bg-blue-100 p-4 text-center">
                    <h1 className="font-bold">Error 404 - Page not found</h1>
                    <p className="font-semibold">Nothing to see here... please move along.</p>
                    <p className="font-semibold">
                        <Link className="underline" href="/">
                            Why not return to the home page?
                        </Link>
                    </p>
                    <Image className="mx-auto" src={puppy} alt="A puppy sitting amongst a torn up cushion it has shredded" />
                </div>
            </main>
        </>
    );
}
