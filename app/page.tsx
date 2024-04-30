//import { lusitana } from '@/app/ui/fonts';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';
import Channels from './channels';
import Search from '@/app/ui/search';
import Carousel from '@/components/carousel';
import NHSWidget from '@/components/nhs-widget';

export default function Page() {
    const slides = [
        <div key="slide1">
            <h3 className="font-bold">Free Parent and Carer Wellbeing Workshops coming up in early 2024</h3>
            <p>
                The Norfolk and Suffolk NHS Foundation Trust&apos;s Psychology in Schools Team, which are a team of clinical psychologists and senior
                psychotherapists from specialist mental health services, have lots of free online parent and carer workshops coming up between January
                and May 2024! These free parent and carer workshops aim to provide families…
            </p>
        </div>,
        <div key="slide2">
            {' '}
            <h3 className="font-bold">Updated Emotional Wellbeing Hub Referral Form and Guidance for Professionals</h3>
            <p>
                Norfolk and Suffolk NHS Foundation Trust (NSFT) has launched an updated referral form and referral criteria guidance for professionals
                who need to refer a child or young person to Child and Adolescent Mental Health Services (CAMHS). The new referral criteria applies to
                GPs and professionals (including school staff) who are referring…
            </p>
        </div>,
        <div key="slide3">
            <h3 className="font-bold">Supporting young people with exam stress</h3>
            <p>
                We have gathered resources below to help you support your teenager with coping with exams. Young people can find useful advice and
                revision tips for preparing for exams on the following websites: TheSource - Planning for exams
            </p>
        </div>,
    ];

    return (
        <>
            <main className="flex flex-col">
                <div className="bg-blue-100 p-4 dark:bg-black">
                    <h2 className="mb-2 text-2xl font-semibold">Welcome to Suffolk InfoLink, your community directory</h2>
                    <p className="text-lg">Explore thousands of activities, services and events across Suffolk</p>

                    <Search placeholder="Search Suffolk's API..." />

                    <div className="bg-yellow-300 p-3 dark:bg-gray-700">Worried about the cost of living? Need some support? Find out more here</div>

                    <div className="py-3">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="mb-3 flex content-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-3 py-5 shadow transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-gray-300 hover:shadow-lg dark:bg-gray-900">
                                <div>
                                    <h2 className="font-semibold">Is your Organisation Listed?</h2>
                                    <p>Add and update your record today.</p>
                                </div>
                                <HiOutlineArrowRightCircle className="h-10 shrink-0 text-[32px] text-primary" />
                            </div>
                            <div className="mb-3 flex content-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-3 py-5 shadow transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-gray-300 hover:shadow-lg dark:bg-gray-900">
                                <h2 className="font-semibold">Do you need help to get online?</h2>
                                <HiOutlineArrowRightCircle className="h-10 shrink-0 text-[32px] text-primary" />
                            </div>
                        </div>

                        <Channels />

                        <div className="grid gap-4 sm:grid-cols-2">
                            <section className="mt-4 flex flex-col rounded bg-white p-3 dark:bg-gray-800">
                                <h2 className="mb-3 font-semibold">Latest News</h2>
                                <Carousel slides={slides} />
                            </section>

                            <NHSWidget uid="db37cf30-d9fa-11e9-b821-6d2c470f88f4" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
