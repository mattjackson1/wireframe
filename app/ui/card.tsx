export function Card({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="border shadow hover:shadow-lg p-2">
        {children}
      </div>
    );
  }