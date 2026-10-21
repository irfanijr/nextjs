import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function ShowsPage() {
  const shows = await prisma.shows.findMany();
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold  mb-6 text-slate-800">
        Daftar TV Shows
      </h1>
      <div className="grid gap-4 md:grid-cols-2">
        {shows.map((show) => (
          <div
            key={show.id}
            className="p-3 flex flex-col gap-3 border border-slate-100 rounded-2xl bg-white"
          >
            <div className="w-full aspect-[1/1.3] relative rounded-2xl overflow-hidden bg-red-300">
              {show.posterUrl && show.posterUrl !== "" && (
                <Image
                  src={show.posterUrl}
                  alt="movie poster"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold text-slate-900">
                {show.title}
              </h2>
              <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                {show.genre}
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-4">{show.description}</p>
            <div className="flex justify-between text-xs font-medium text-slate-500 border-t pt-3">
              <p>Season: {show.totalSeasons}</p>
              <p>Rilis: {show.releaseYear}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
