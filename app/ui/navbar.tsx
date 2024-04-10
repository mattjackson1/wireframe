'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';

const menu = [
    { name: 'Home', url: '\\' },
    { name: 'Help', url: 'help' },
];

export default function Navbar({ typeListsArray }: { typeListsArray: [] }) {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);

    return (
        <>
            <button onClick={toggleMenu} className="m-2 border p-1 md:hidden" aria-label="Navigation menu">
                <Bars3Icon className="h-[32px] w-[32px]" />
            </button>
            <nav className="flex flex-row bg-blue-50">
                <div className={(!isOpen && 'hidden') + ' fixed inset-0 flex bg-gray-900/80'} onClick={toggleMenu}></div>
                <ul
                    className={
                        'bg-blue-50 ' +
                        (!isOpen ? '-left-3/4 w-3/4' : 'left-0 w-3/4') +
                        ' fixed inset-y-0 justify-center gap-5 transition-all duration-500 md:relative md:left-0 md:flex md:w-auto'
                    }
                >
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
                                        {type.displayName}
                                    </Menu.Button>

                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-90 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-90 opacity-0"
                                    >
                                        <Menu.Items className="ml-3 w-60 rounded-lg md:absolute md:z-10 md:ml-0 md:divide-y md:divide-gray-100 md:bg-white md:shadow dark:bg-gray-700">
                                            {type.types.map((type: any, subindex: number) => (
                                                <Menu.Item key={index + '-' + subindex}>
                                                    {({ active }) => (
                                                        <a
                                                            className={
                                                                (isOpen && 'w-100') +
                                                                ' flex items-center p-2 text-lg underline-offset-4 hover:underline md:text-base'
                                                            }
                                                            href="#"
                                                        >
                                                            {type.displayName}
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
            </nav>
        </>
    );
}
