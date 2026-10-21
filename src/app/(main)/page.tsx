import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
        Welcome
      </h1>
      <p className="mt-4 text-lg text-gray-500 max-w-md mx-auto">
        Selamat datang di landing page utama
      </p>
    </div>
  );
}
