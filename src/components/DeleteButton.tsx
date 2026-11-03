"use client";

import { useState, useTransition } from "react";
import { deleteMovie } from "../app/actions/movies";

export default function DeleteButton({
  id,
  title,
}: {
  id: number;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      await deleteMovie(id);
      setOpen(false);
    });
  }
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-red-600 w-full text-center text-sm font-medium hover:text-red-700 bg-red-100 px-4 py-2 rounded-xl mt-2"
      >
        Hapus
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/60">
          <div className="w-full rounded-2xl bg-white p-6 max-w-sm border border-slate-100 flex flex-col gap-4">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 text-xl font-bold mb-2"></div>
              Peringatan!
              <h3 className="text-lg font-bold text-slate-900">
                Konfirmasi Hapus
              </h3>
              <p className="text-sm text-slate-500">
                Apakah Anda yakin inging menghapus Film{" "}
                <span className="font-semibold text-slate-800">"{title}"</span>
                ?Tindakan ini tidak dapat dibatalkan
              </p>
            </div>
            <div className="mt-2 flex gap-3">
              <button
                onClick={() => setOpen(false)}
                disabled={pending}
                className="flex-1 border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium py-2.5 rounded-xl"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                disabled={pending}
                className=" bg-red-600 px-3 py-2.5 text-white flex-1 hover:bg-red-700 text-sm font-medium rounded-xl flex items-center justify-center shadow-sm "
              >
                {pending ? (
                  <span className="flex items-center gap-1.5">
                    "Menghapus..."{" "}
                  </span>
                ) : (
                  "Ya, hapus"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
