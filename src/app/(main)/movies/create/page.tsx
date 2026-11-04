"use client";

import { SubmitForm } from "../../../actions/movies";
import { useActionState } from "react";

export default function CreateMoviePage() {
  const [state, action, pending] = useActionState(SubmitForm, null);

  const errors = state?.errors;
  const fields = state?.fields;

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm mt-10">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">
        Tambah Movie Baru
      </h1>

      <form action={action} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-600">
            Judul Film
          </label>
          <input
            name="title"
            type="text"
            placeholder="Masukkan judul film..."
            disabled={pending}
            defaultValue={fields?.title ?? ""}
            className="px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled: bg-slate-50 "
          />
          {errors && "title" in errors && errors.title && (
            <p className="text-xs text-red-500 font-medium mt-1">
              {errors.title[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-600">
            Deskripsi
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder="Cerita singkat film..."
            disabled={pending}
            defaultValue={fields?.description ?? ""}
            className="px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled: bg-slate-50 "
          />
          {errors && "description" in errors && errors.description && (
            <p className="text-xs text-red-500 font-medium mt-1">
              {errors.description[0]}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-600">
              Durasi(Menit)
            </label>
            <input
              name="duration"
              type="text"
              placeholder="Contoh: 60"
              disabled={pending}
              defaultValue={fields?.duration ?? ""}
              className="px-3.5 py-2  border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled:bg-slate-50"
            />
            {errors && "duration" in errors && errors.duration && (
              <p className="text-xs text-red-500 font-medium mt-1">
                {errors.duration[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-600">
              Rating
            </label>
            <input
              name="rating"
              type="number"
              step="0.1" 
              max="10"
              min="1"
              placeholder="Contoh: 9.6"
              disabled={pending}
              defaultValue={fields?.rating ?? ""}
              className="px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled:bg-slate-50"
            />
            {errors && "rating" in errors && errors.rating && (
              <p className="text-xs text-red-500 font-medium mt-1">
                {errors.rating[0]}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-600">
            Tahun Rilis
          </label>
          <input
            name="releaseYear"
            type="text"
            placeholder="Contoh: 2024"
            disabled={pending}
            defaultValue={fields?.releaseYear ?? ""}
            className="px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled:bg-slate-50"
          />
          {errors && "releaseYear" in errors && errors.releaseYear && (
            <p className="text-xs text-red-500 font-medium mt-1">
              {errors.releaseYear}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-600">
            URL Tautan Post
          </label>
          <input
            type="text"
            name="posterUrl"
            placeholder="https://example.com"
            disabled={pending}
            defaultValue={fields?.posterUrl ?? ""}
            className="px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-indigo-500 disabled:bg-slate-50"
          />
          {errors && "posterUrl" in errors && errors.posterUrl && (
            <p className="text-xs text-red-500 font-medium mt-1">
              {errors.posterUrl[0]}
            </p>
          )}
        </div>
        {errors && "server" in errors && errors.server && (
          <p className="text-sm text-red-500 font-semibold text-center mt-2">
            {errors.server[0]}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-2  bg-indigo-500 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
        >
          {pending ? "Mengirim..." : "Kirim"}
        </button>
      </form>
    </div>
  );
}
