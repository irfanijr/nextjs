"use client";
import { updateMovie } from "../app/actions/movies";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type Movie = {
  id: number;
  title: string;
  rating: number;
  duration?: number; 
  description: string | null;
};

export default function EditMovieForm({ movie }: { movie: Movie }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleAction(id: number, formData: FormData) {
    setPending(true);
    const res = await updateMovie(id, formData);
    setPending(false);
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
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl border border-slate-100 mt-6">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Edit Movie</h1>
      <form
        action={handleAction.bind(null, movie.id)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-600">
            Judul Film
          </label>
          <input
            name="title"
            type="text"
            defaultValue={movie?.title}
            placeholder="Masukkan Judul Film..."
            required
            disabled={pending}
            className="px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled:bg-slate-50"
          />
        </div>
  <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-600">
              Durasi (Menit)
            </label>
            <input
              name="duration"
              type="number"
              min="1"
              defaultValue={movie?.duration}
              placeholder="Contoh: 60"
              disabled={pending}
              className="px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled:bg-slate-50"
            />
          </div>

           <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-600">
              Rating
            </label>
            <input
              name="rating"
              type="number"
              step="0.1"
              min="0"
              max="10"
              defaultValue={movie?.rating}
              placeholder="Contoh: 9.0"
              disabled={pending}
              className="px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled:bg-slate-50"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-600">
            Deskripsi
          </label>
          <textarea
            name="description"
            rows={4}
            defaultValue={movie.description ?? ""}
            placeholder="Cerita singkat film..."
            disabled={pending}
            className="px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled:bg-slate-50"
          />
        </div>
        <div className="flex gap-3 mt-2">
          <button
            type="button"
            onClick={() => router.push("/movies")}
            disabled={pending}
            className="flex-1 border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium py-2.5 rounded-xl"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={pending}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-xl flex items-center justify-center"
          >
            {pending ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </form>
    </div>
  );
}
