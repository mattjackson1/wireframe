import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaSquareYoutube } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="flex flex-col bg-primary px-3 py-4 md:h-20 md:flex-row">
            <ul className="mr-6 flex items-center">
                <li className="my-2 mr-3 inline-block">
                    <a className="text-white no-underline hover:underline" href="about.page">
                        About Us
                    </a>
                </li>
                <li className="my-2 mr-3 inline-block">
                    <a className="text-white no-underline hover:underline" href="contact.page">
                        Contact Suffolk InfoLink
                    </a>
                </li>
                <li className="my-2 mr-3 inline-block">
                    <a className="text-white no-underline hover:underline" href="disclaimer.page">
                        Disclaimer
                    </a>
                </li>
                <li className="my-2 mr-3 inline-block">
                    <a className="text-white no-underline hover:underline" href="privacy_policy.page">
                        Privacy
                    </a>
                </li>
                <li className="my-2 inline">
                    <a className="text-white no-underline hover:underline" href="sign_in.page">
                        Update your page
                    </a>
                </li>
            </ul>
            <ul className="flex flex-1 items-center pb-4 text-center md:mr-4 md:pb-0 md:text-left">
                <li className="mr-3 inline-block">
                    <Link href="https://twitter.com/suffolkcc">
                        <FaXTwitter size={36} color="white" aria-label="Twitter" />
                    </Link>
                </li>
                <li className="mr-3 inline-block">
                    <Link href="https://en-gb.facebook.com/SuffolkCountyCouncil" target="_blank">
                        <FaFacebook size={36} color="white" aria-label="Facebook" />
                    </Link>
                </li>
                <li className="mr-3 inline-block">
                    <Link href="https://www.youtube.com/user/Suffolkcc" target="_blank">
                        <FaSquareYoutube size={36} color="white" aria-label="YouTube" />
                    </Link>
                </li>
            </ul>
            <Link href="https://www.suffolk.gov.uk" className="mx-auto md:mx-0 md:mb-0" target="_blank">
                <Image priority src="/images/suffolk-council-logo.png" width="220" height="67" alt="Suffolk County Council" />
            </Link>
        </footer>
    );
}
