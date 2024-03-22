import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';

const menu = [
    { name: 'Home', url: '\\' },
    { name: 'Help', url: '\help' },
];

export default function Navbar() {
    return (
        <nav className="flex flex-row">
            <ul className="flex gap-5 justify-center">
                {menu.map((item, index) => (
                    <a
                        href={item.url}
                        key={index}
                        className="flex items-center hover:underline underline-offset-4"
                    >
                        {item.name}
                    </a>
                ))}
            </ul>
        </nav>
    )
}