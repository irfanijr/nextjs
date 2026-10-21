export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white border-b border-gray-200 top-0 z-50">
        <div className="max-w-7xl mx-auto"></div>
      </nav>
    </div>
  );
}
