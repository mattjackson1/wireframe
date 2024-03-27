import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
//import { lusitana } from '@/app/ui/fonts';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Channels from './channels';
//import { redirect } from "next/navigation";
import MyModal from '@/app/ui/myModal';
import NHSWidget from '@/app/ui/nhs-widget';

export default function Page() {
  return (

    <>
      <Header />
      <main className="flex flex-col">

        <MyModal/>

        <div className="bg-blue-100 p-4">
          <h2 className="text-2xl font-semibold mb-2">Welcome to Suffolk InfoLink, your community directory</h2>
          <p className="text-lg">Explore thousands of activities, services and events across Suffolk</p>
          
          <div className="p-3 bg-yellow-300">
            Worried about the cost of living? Need some support? Find out more here
          </div>
          
          <div className="p-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex justify-between content-center border border-gray-300 rounded-lg px-3 py-5 mb-3 bg-gray-50 shadow hover:bg-gray-300 hover:shadow-lg hover:-translate-y-0.5 transition-all ease-in-out duration-200">
                <div>
                  <h2 className="font-semibold">Is your Organisation Listed?</h2>
                  <p>Add and update your record today.</p>
                </div>
                <ArrowRightCircleIcon className="shrink-0 h-10 text-primary"/>
              </div>
              <div className="flex justify-between content-center border border-gray-300 rounded-lg px-3 py-5 mb-3 bg-gray-50 shadow hover:bg-gray-300 hover:shadow-lg hover:-translate-y-0.5 transition-all ease-in-out duration-200">
                <h2 className="font-semibold">Do you need help to get online?</h2>
                <ArrowRightCircleIcon className="shrink-0 h-10 text-primary"/>
              </div>
            </div>

            <Channels />

            <div className="grid gap-4 sm:grid-cols-2">
              <section className="mt-4 p-3 bg-white rounded">
                <h2 className="mb-3">Latest News</h2>
              </section>

              <NHSWidget uid="db37cf30-d9fa-11e9-b821-6d2c470f88f4" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
