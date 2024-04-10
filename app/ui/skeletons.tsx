// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div className={`${shimmer} relative mb-2 overflow-hidden rounded-xl bg-gray-100 p-3 shadow-sm`}>
            <div className="rounded-xl bg-white px-4 py-3">
                <div className="mb-3 h-4 w-1/2 rounded-md bg-gray-100" />
                <div className="h-10 rounded-md bg-gray-100" />
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
        <div className="flex flex-col">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}
