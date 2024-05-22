// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm dark:bg-gray-900`}>
            <div className="rounded-xl bg-white px-4 py-2 dark:bg-black">
                <div className="mb-3 h-4 w-1/2 rounded-md bg-gray-100 dark:bg-gray-900" />
                <div className="h-4 rounded-md bg-gray-100 dark:bg-gray-900" />
            </div>
        </div>
    );
}

export function CardsSkeleton() {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    );
}

export function ResultsSkeleton() {
    return (
        <div className="grid gap-4 px-6">
            <h1>Finding services...</h1>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}
