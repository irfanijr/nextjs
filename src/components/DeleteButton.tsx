"use client";

import { useState, useTransition } from "react";
import { deleteMovie } from "@/app/actions/movies";

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
      <button onClick={() => setOpen(true)} className="text-red-600">
        Hapus
      </button>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center text-red-500 bg-black/50">
          <div className="w-80 rounded-lg bg-white p-6">
            <p>
              Hapus Film <b>{title}</b>?Tindakan ini bisa dibatalkan
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setOpen(false)} disabled={pending}>
                Batal
              </button>
              <button
                onClick={handleDelete}  
                disabled={pending}
                className="rounded bg-red-600 px-3 py-1 text-white"
              >
                {pending ? "Menghapus..." : "Ya, hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
