//import { lusitana } from '@/app/ui/fonts';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Channels from './channels';
//import { redirect } from "next/navigation";
import NHSWidget from '@/app/ui/nhs-widget';

export default function Page({ params }: { params: { typeListsArray: [] } }) {
    return (
        <>
            <main className="flex flex-col">
                <div className="bg-blue-100 p-4">
                    <h2 className="mb-2 text-2xl font-semibold">
                        Welcome to Suffolk InfoLink, your community directory
                    </h2>
                    <p className="text-lg">
                        Explore thousands of activities, services and events
                        across Suffolk
                    </p>

                    <div className="bg-yellow-300 p-3">
                        Worried about the cost of living? Need some support?
                        Find out more here
                    </div>

                    <div className="p-3">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="mb-3 flex content-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-3 py-5 shadow transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-gray-300 hover:shadow-lg">
                                <div>
                                    <h2 className="font-semibold">
                                        Is your Organisation Listed?
                                    </h2>
                                    <p>Add and update your record today.</p>
                                </div>
                                <ArrowRightCircleIcon className="h-10 shrink-0 text-primary" />
                            </div>
                            <div className="mb-3 flex content-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-3 py-5 shadow transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-gray-300 hover:shadow-lg">
                                <h2 className="font-semibold">
                                    Do you need help to get online?
                                </h2>
                                <ArrowRightCircleIcon className="h-10 shrink-0 text-primary" />
                            </div>
                        </div>

                        <Channels />

                        <div className="grid gap-4 sm:grid-cols-2">
                            <section className="mt-4 rounded bg-white p-3">
                                <h2 className="mb-3">Latest News</h2>
                            </section>

                            <NHSWidget uid="db37cf30-d9fa-11e9-b821-6d2c470f88f4" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
