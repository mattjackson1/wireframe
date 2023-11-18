export function Card({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="border shadow hover:shadow-lg p-2 hover:-translate-y-0.5 transition-all ease-in-out duration-200">
        {children}
      </div>
    );
  }