export function Card({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="border bg-gradient-to-t from-indigo-100 to-indigo-200 shadow hover:shadow-lg p-2 hover:-translate-y-0.5 transition-all ease-in-out duration-200">
        {children}
      </div>
    );
  }