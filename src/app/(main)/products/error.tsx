"use client";

interface ErrorProps{
    error: Error & { digest?: string }
    retry: () => void;

}


function Error({ error, retry }: ErrorProps) {
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center gap-1.5">
      <h1 className="p-4 text-3xl font-extrabold">UpsTerjadi kesalahan</h1>
      <p className="p-4 text-slate-600 ">Error: {error.message}</p>
      <button onClick={() => retry()} className="bg-slate-100 text-slate-950 px-6 py-1.5 rounded-md mt-2">Coba lagi</button>
    </div>
  );
}

export default Error;
