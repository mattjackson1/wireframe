import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import { lusitana } from '@/app/ui/fonts';
import Channels from './channels';

import { redirect } from "next/navigation";

export default function Page() {
  return (

    <>
      <Header />
      <main className="flex flex-col">
        <div className="bg-blue-100 p-4">
          <h2 className="text-2xl font-semibold mb-2">Welcome to Suffolk InfoLink, your community directory</h2>
          <p className="text-lg">Explore thousands of activities, services and events across Suffolk</p>
          <div className="flex items-center justify-center p-3">
            <Channels />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
