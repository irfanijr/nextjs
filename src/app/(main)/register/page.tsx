'use client';

import { useActionState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();

  const submitForm = async (
    prevState: string | null,
    formData: FormData
  ): Promise<string | null> => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'admin',
        },
      },
    });

    if (error) {
      return error.message;
    }

    router.push('/login');
    return null;
  };

  const [errorMessage, formAction, isPending] = useActionState(submitForm, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form action={formAction} className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md space-y-4">
        <h1 className="text-xl font-bold text-gray-800">Daftar Akun</h1>

        {errorMessage && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
            {errorMessage}
          </div>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-lg border p-2.5 text-sm focus:outline-indigo-500"
        />

        <input
          name="password"
          type="password"
          placeholder="Kata Sandi (min. 6 karakter)"
          required
          minLength={6}
          className="w-full rounded-lg border p-2.5 text-sm focus:outline-indigo-500"
        />

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-50"
        >
          {isPending ? 'Mendaftarkan...' : 'Daftar'}
        </button>

        <p className="text-center text-xs text-gray-500">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-indigo-600 font-semibold">
            Masuk
          </Link>
        </p>
      </form>
    </div>
  );
}