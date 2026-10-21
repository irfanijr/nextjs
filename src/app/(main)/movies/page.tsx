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
    <div>
      <h1 className="text-4xl  font-semibold">Movie</h1>
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id}>
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
                <div className="flex items-center gap-1.5 text-sm ">
                  <p>Duration: {movie.duration}</p>
                  <p>Rating: {movie.rating}</p>
                </div>
              </div>
            </Link>
            <DeleteButton id={movie.id} title={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
