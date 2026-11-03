import DeleteButton from "@/components/DeleteButton";
import { EmptyState } from "@/components/EmptyState";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

async function Page() {
  const movies = await prisma.movie.findMany();

  if (movies.length === 0) {
    return (
      <EmptyState
        title="Belum Ada Film Disini"
        desc="Mulai dengan menambahkan Film baru. Cobak Tambahin"
        actionLabel="+ Tambah Data"
        actionHref="/movies/create"
      />
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
        <h1 className="text-4xl  font-semibold text-slate-900">List Movie</h1>

        <Link
          href="/movies/create"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5"
        >
          <span>+</span> Tambah Movie
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col justify-between border border-slate-100 rounded-2xl p-2 bg-white"
          >
            <Link
              href={`/movies/${movie.id}/edit`}
              className="px-4 py-5 flex flex-col gap-4 rounded-2xl overflow-hidden"
              key={movie.id}
            >
              <div className="w-full aspect-[1/1.3] relative rounded-2xl overflow-hidden bg-red-300">
                <Image
                  src={movie.posterUrl}
                  alt="movie poster"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-xl">{movie.title}</h3>
                <p className="text-sm mt-1">{movie.description}</p>
                <div className="flex items-center gap-1.5 text-sm text-slate-500 mt-2 ">
                  <p>Duration: {movie.duration}</p>
                  <p>Rating: {movie.rating}</p>
                </div>
              </div>
            </Link>
            <div className="px-2 pb-3">
              <DeleteButton id={movie.id} title={movie.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
