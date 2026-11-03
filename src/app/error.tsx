"use client";

import { useEffect } from "react";

export default function ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Terjadi Kesalahan!
        </h2>
        <p className="text-gray-700 mb-6">
          {error.message || "Gagal memproses permintaan Anda."}
        </p>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-red-600 px-6 py-2 text-sm font-semibold text-white hover:bg-red-500"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
