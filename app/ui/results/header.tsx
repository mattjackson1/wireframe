import Image from 'next/image';
import Link from "next/link";
import logo from "@/app/ui/infolink-logo.svg";
import Search from './search';

export default function Header() {
    return (
        <header className="flex h-20 shrink-0 items-end rounded-lg bg-gradient-to-tl from-slate-200 to-indigo-600 p-4 m-3">
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