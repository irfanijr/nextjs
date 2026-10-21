'use client';
import { updateMovie } from "@/app/actions/movies";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Movie = {
  id: number;
  title: string;
  rating: number;
  description: string | null;
};

export default function EditMovieForm({ movie }: { movie: Movie }) {
  const router = useRouter();

  async function handleAction(id: number, formData: FormData) {
    const res = await updateMovie(id, formData);
    if (res?.success) {
      toast.success(res.message, { position: "top-right" });
      router.push("/movies");
    } else {
      toast.error(res?.message || "Terjadi kesalahan.", {
        position: "top-right",
      });
    }
  }

  return (
    <form action={handleAction.bind(null, movie.id)} className="space-y-4">
      <input
        name="title"
        defaultValue={movie?.title}
        placeholder="Judul"
        required
      />
      <input
        name="rating"
        type="number"
        step="0.1"
        min="0"
        max="10"
        defaultValue={movie?.rating}
      />
      <input name="description" defaultValue={movie.description ?? ""} />

      <button type="submit">Simpan Perubahan</button>
    </form>
  );
}
