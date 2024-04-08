import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/ui/infolink-logo.svg';
import Search from './search';
import Navbar from '@/app/ui/navbar';

export default function Header({ typeListsArray }: { typeListsArray: [] }) {
    return (
        <>
            <header className="mb-3 flex shrink-0 flex-wrap items-end bg-gradient-to-r from-blue-100 to-transparent p-4 md:h-20">
                <Link href="/">
                    <Image
                        priority
                        src={logo}
                        alt="Suffolk InfoLink"
                        height={50}
                    />
                </Link>
                <Search placeholder="Search Suffolk's API..." />
            </header>
            <Navbar typeListsArray={typeListsArray} />
        </>
    );
}
