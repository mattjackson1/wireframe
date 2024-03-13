import Header from '@/app/ui/header';
import { lusitana } from '@/app/ui/fonts';
import Channels from './channels';

import { redirect } from "next/navigation";

export default function Page() {
  return (

    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex grow flex-col gap-4 lg:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 lg:w-2/5 lg:px-20">
            <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
            <p className={`${lusitana.className} text-xl text-gray-800 lg:text-3xl lg:leading-normal`}>
              <strong>Welcome to Acme.</strong> This is the NextJS prototype wireframe.
            </p>
          </div>
          <div className="flex items-center justify-center p-3">
            <Channels />
          </div>
        </div>
      </main>
    </>
  );
}
