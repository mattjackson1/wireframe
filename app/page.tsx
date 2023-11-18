import Header from '@/app/ui/header';
import { lusitana } from '@/app/ui/fonts';
import Channels from './channels';
import Link from "next/link";

import { redirect } from "next/navigation";

export default async function Page() {
  return (

    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
            <p
              className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
            >
              <strong>Welcome to Acme.</strong> This is the NextJS prototype wireframe.
            </p>

          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">

            <Channels />

          </div>
        </div>
      </main>
    </>
  );
}
