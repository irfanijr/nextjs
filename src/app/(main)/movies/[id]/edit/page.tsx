import EditMovieForm from "@/components/EditMovieForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";


async function EditMoviePage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const movieId = Number(id);
  if (isNaN(id)) notFound();

  const movie = await prisma.movie.findUnique({ where: { id: movieId } });
  console.log(movie);

  if (!movie) notFound();

  return (
    <>
      <h1>Edit: {movie.title}</h1>
     <EditMovieForm movie={movie} />
    
    </>
  );
}

export default EditMoviePage;
