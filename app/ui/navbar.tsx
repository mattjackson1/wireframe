'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';


const menu = [
    { name: 'Home', url: '\\' },
    { name: 'Help', url: '\help' },
];

export default function Navbar({typeListsArray}: {typeListsArray: []}) {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);

    return (
        <>
            <button
                onClick={toggleMenu}
                className="border p-1 m-2 md:hidden"
            >
                <Bars3Icon className="h-[32px] w-[32px]" />
            </button>            
            <nav className="flex flex-row">
                <div
                    className={(!isOpen && "hidden") + " fixed inset-0 flex bg-gray-900/80"}
                    onClick={toggleMenu}
                ></div>    
                <ul
                    className={(!isOpen ? "-left-3/4 w-3/4" : "left-0 w-3/4") + " md:left-0 md:w-auto inset-y-0 duration-500 transition-all fixed md:relative md:flex gap-5 bg-white justify-center"}
                >
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.url}                                
                                className={(isOpen && "w-100") + " p-2 flex items-center hover:underline underline-offset-4 text-lg md:text-base"}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}

                    {typeListsArray.map((typeList: any, index: number) => (                        
                        typeList.types.map((type: any, subindex: number) => (
                            <li key={index + '-' + subindex}>
                                <a
                                    className={(isOpen && "w-100") + " p-2 flex items-center hover:underline underline-offset-4 text-lg md:text-base"}
                                >
                                    {type.displayName}
                                </a>
                            </li>
                        ))
                    ))}
                </ul>
            </nav>
        </>
    )
}