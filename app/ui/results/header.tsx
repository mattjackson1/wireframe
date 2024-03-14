import Image from 'next/image';
import Link from "next/link";
import logo from "@/app/ui/infolink-logo.svg";
import Search from './search';

export default function Header() {
    return (
        <header className="flex h-20 shrink-0 items-end bg-gradient-to-r from-blue-100 to-transparent p-4 mb-3">
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
    )
}