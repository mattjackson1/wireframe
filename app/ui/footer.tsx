import Image from 'next/image';
import Link from "next/link";
import logo from "@/app/ui/suffolk-council-logo.png";
export default function Footer() {
    return (
        <footer className="flex h-20 shrink-0 items-end bg-primary">
            xxxxx
            <Link href="https://www.suffolk.gov.uk">
                <Image
                    priority
                    src={logo}
                    alt="Suffolk County Council"
                />
            </Link>
        </footer>
    )
}