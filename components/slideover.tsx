'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Button } from '@/app/ui/button';

export default function SlideOver({ children, btnText, title }: { children: React.ReactNode; btnText: string | React.ReactNode; title: string }) {
    let [isOpen, setIsOpen] = useState<boolean>(false);

    function closeSlideOver() {
        setIsOpen(false);
    }

    function openSlideOver() {
        setIsOpen(true);
    }

    return (
        <>
            <Button onClick={openSlideOver}>{btnText}</Button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative" onClose={closeSlideOver}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 z-[1040] bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-y-0 right-0 z-[1050] w-4/5 overflow-y-auto md:w-3/5 lg:w-2/5 xl:w-1/5">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-x-10"
                            enterTo="opacity-100 translate-x-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-x-0"
                            leaveTo="opacity-0 translate-x-10"
                        >
                            <Dialog.Panel className="flex h-screen w-full transform flex-col overflow-y-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h2" className="mb-3 flex justify-between text-lg leading-6 text-gray-900">
                                    {title}
                                    <button
                                        type="button"
                                        className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeSlideOver}
                                    >
                                        <svg
                                            className="h-6 w-6 text-gray-700"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </Dialog.Title>

                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
