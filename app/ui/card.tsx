export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-gradient-to-t from-indigo-100 to-indigo-200 p-2 shadow transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
      {children}
    </div>
  );
}
