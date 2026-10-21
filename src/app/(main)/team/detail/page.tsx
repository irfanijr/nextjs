export default function TeamDetailPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-950">
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((member) => (
          <div
            key={member}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
              Team{member}
            </div>
            <h3 className="font-semibold text-lg text-gray-900">Anggota Tim {member}</h3>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
          </div>
        ))}
      </div>
    </div>
  );
}
