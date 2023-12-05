import AcmeLogo from "@/app/ui/acme-logo";
import { Search, ResultsSearch } from '@/app/ui/search';

export default function Header() {
    return (
        <header className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 m-3">
            <AcmeLogo />
            <Search placeholder="Search Suffolk's API..." />
        </header>
    )
}