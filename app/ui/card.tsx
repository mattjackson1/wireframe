export function Card({ children, className }: { children: React.ReactNode; className?: String }) {
    return (
        <div
            className={
                'rounded border bg-gradient-to-t from-indigo-100 to-indigo-200 p-2 shadow transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg dark:from-gray-800 dark:to-black ' +
                className
            }
        >
            {children}
        </div>
    );
}
