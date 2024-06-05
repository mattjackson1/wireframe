'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Menu, Transition } from '@headlessui/react';
import { FaX } from 'react-icons/fa6';

const menu = [
    { name: 'Home', url: '\\' },
    { name: 'Help', url: 'help' },
];

export default function Navbar({ typeListsArray }: { typeListsArray: [] }) {
    const [isOpen, setOpen] = useState(false);
    function toggleMenuOpen() {
        setOpen((isOpen) => !isOpen);
    }

    return (
        <>
            <button onClick={toggleMenuOpen} className="absolute right-0 top-2 mr-2 rounded border p-2 md:hidden" aria-label="Navigation menu">
                <FaBars className="h-[18px] w-[18px]" />
            </button>
            <nav className="flex flex-row bg-blue-50 dark:bg-black">
                <div
                    className={(!isOpen && 'hidden') + ' fixed inset-0 z-40 flex overflow-auto bg-gray-900/80 md:hidden'}
                    onClick={toggleMenuOpen}
                ></div>
                <div
                    className={
                        (!isOpen ? '-left-3/4 w-3/4 ' : 'left-0 w-3/4 ') +
                        'fixed inset-y-0 z-50 justify-center gap-5 bg-blue-50 px-2 transition-all duration-500 md:relative md:left-0  md:w-auto md:duration-0 dark:bg-black'
                    }
                >
                    <button
                        onClick={toggleMenuOpen}
                        className="absolute right-0 m-2 rounded border p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:hidden"
                        aria-label="Close navigation menu"
                    >
                        <FaX />
                    </button>
                    <ul className="pt-6 md:flex md:pt-0">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.url}
                                    className={(isOpen && 'w-100') + ' flex items-center p-2 text-lg underline-offset-4 hover:underline md:text-base'}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}

                        {typeListsArray.map((typeList: any) =>
                            typeList.types.map((type: any, index: number) => (
                                <li key={index}>
                                    <Menu>
                                        <Menu.Button
                                            className={
                                                (isOpen && 'w-100') + ' flex items-center p-2 text-lg underline-offset-4 hover:underline md:text-base'
                                            }
                                        >
                                            {type.displayName} &#9662;
                                        </Menu.Button>

                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-90 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-90 opacity-0"
                                        >
                                            <Menu.Items className="z-[1001] ml-3 w-60 rounded-lg md:absolute md:z-10 md:ml-0 md:divide-y md:divide-gray-100 md:bg-white md:shadow dark:md:divide-gray-500 dark:md:bg-gray-900">
                                                {type.types.map((subtype: any, subindex: number) => (
                                                    <Menu.Item key={index + '-' + subindex}>
                                                        {({ active }) => (
                                                            <a
                                                                className={
                                                                    (isOpen && 'w-100') +
                                                                    ' flex items-center p-2 text-lg underline-offset-4 hover:underline md:text-base'
                                                                }
                                                                href={`results?query=${typeList.name}:${subtype.name}`}
                                                            >
                                                                {subtype.displayName}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </li>
                            )),
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}
