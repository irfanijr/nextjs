"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/login";
import Link from "next/link";

export default function LoginFormClient() {
  const [errorMessage, formAction, isPending] = useActionState(login, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-xl bg-white p-6 flex flex-col gap-4 shadow-sm border border-slate-100"
      >
        <h1 className="text-xl font-bold text-gray-800 text-center">
          Masuk Akun Admin
        </h1>

        {errorMessage && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
            {errorMessage}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-600">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            disabled={isPending}
            className="w-full rounded-lg border p-2.5 text-sm focus:outline-indigo-500 disabled:bg-slate-50"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-slate-600">
            Kata Sandi
          </label>
          <input
            name="password"
            type="password"
            placeholder="Kata Sandi (min 6 karakter)"
            required
            minLength={6}
            disabled={isPending}
            className="w-full rounded-lg border p-2.5 text-sm focus:outline-indigo-500 disabled:bg-slate-50"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors mt-2"
        >
          {isPending ? "Memproses..." : "Masuk"}
        </button>

        <p className="text-center text-xs text-gray-500 mt-1">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Daftar
          </Link>
        </p>
      </form>
    </div>
  );
}
