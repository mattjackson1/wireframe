import { lusitana } from '@/app/ui/fonts';
import Link from "next/link";

export default function AcmeLogo() {
  return (
    <Link href="/"
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      icon
      <p className="text-[44px] mr-3">Acme</p>
    </Link>
  );
}
