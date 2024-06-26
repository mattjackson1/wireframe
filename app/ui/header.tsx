import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/ui/infolink-logo.svg';
import Navbar from '@/app/ui/navbar';
import ThemeSwitch from '@/components/themeSwitch';

export default function Header({ typeListsArray }: { typeListsArray: [] }) {
    return (
        <>
            <header className="mb-3 flex shrink-0 items-start justify-between bg-gradient-to-r from-blue-500/20 p-2 pr-12 md:h-20">
                <Link href="/" className="mr-3">
                    <Image priority src={logo} alt="Suffolk InfoLink" height={50} width={460} />
                </Link>
                <ThemeSwitch />
            </header>
            <Navbar typeListsArray={typeListsArray} />
        </>
    );
}
