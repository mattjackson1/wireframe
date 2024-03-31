import Image from "next/image";
import Link from "next/link";
import logo from "@/app/ui/images/suffolk-council-logo.png";
import x_logo from "@/app/ui/images/x.svg";
import facebook_logo from "@/app/ui/images/facebook.svg";
import youtube_logo from "@/app/ui/images/youtube.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between bg-primary px-3 pt-1 md:h-20 md:flex-row">
      <ul className="mr-4 pt-4">
        <li className="mr-3 inline-block">
          <a
            className="text-white no-underline hover:underline"
            href="about.page"
          >
            About Us
          </a>
        </li>
        <li className="mr-3 inline-block">
          <a
            className="text-white no-underline hover:underline"
            href="contact.page"
          >
            Contact Suffolk InfoLink
          </a>
        </li>
        <li className="mr-3 inline-block">
          <a
            className="text-white no-underline hover:underline"
            href="disclaimer.page"
          >
            Disclaimer
          </a>
        </li>
        <li className="mr-3 inline-block">
          <a
            className="text-white no-underline hover:underline"
            href="privacy_policy.page"
          >
            Privacy
          </a>
        </li>
        <li className="inline">
          <a
            className="text-white no-underline hover:underline"
            href="sign_in.page"
          >
            Update your page
          </a>
        </li>
      </ul>
      <ul className="flex-1 pb-4 pt-4 text-center md:mr-4 md:pb-0 md:text-left">
        <li className="mr-3 inline-block">
          <Link href="https://twitter.com/suffolkcc">
            <Image priority src={x_logo} alt="X" />
          </Link>
        </li>
        <li className="mr-3 inline-block">
          <Link
            href="https://en-gb.facebook.com/SuffolkCountyCouncil"
            target="_blank"
          >
            <Image priority src={facebook_logo} alt="Facebook" />
          </Link>
        </li>
        <li className="mr-3 inline-block">
          <Link href="https://www.youtube.com/user/Suffolkcc" target="_blank">
            <Image priority src={youtube_logo} alt="YouTube" />
          </Link>
        </li>
      </ul>
      <Link
        href="https://www.suffolk.gov.uk"
        className="mx-auto mb-2 md:mx-0 md:mb-0"
        target="_blank"
      >
        <Image priority src={logo} alt="Suffolk County Council" />
      </Link>
    </footer>
  );
}
