import Image from 'next/image';
import Link from "next/link";
import logo from "@/app/ui/suffolk-council-logo.png";
export default function Footer() {
    return (
        <footer className="flex h-20 shrink-0 justify-between px-3 pt-1 bg-primary">
            <ul className="pt-4 mr-4">
                <li className="inline mr-3"><a className="text-white no-underline hover:underline" href="about.page">About Us</a></li>
                <li className="inline mr-3"><a className="text-white no-underline hover:underline" href="contact.page">Contact Suffolk InfoLink</a></li>
                <li className="inline mr-3"><a className="text-white no-underline hover:underline" href="help.page">Help</a></li>
                <li className="inline mr-3"><a className="text-white no-underline hover:underline" href="disclaimer.page">Disclaimer</a></li>
                <li className="inline mr-3"><a className="text-white no-underline hover:underline" href="privacy_policy.page">Privacy</a></li>
                <li className="inline mr-3"><a className="text-white no-underline hover:underline" href="sign_in.page">Update your page</a></li>
            </ul>
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