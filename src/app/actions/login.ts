"use server";

import { createServerSupabase } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function login(prevState: string | null, formData: FormData): Promise<string | null> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return "Email dan Password harus diisi!";
    }
    const supabase = await createServerSupabase();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return error.message;
    }
    const userRole = data.user?.user_metadata?.role || data.user?.app_metadata?.role;

    if (userRole !== "admin") {
        await supabase.auth.signOut();
        return "Akses ditolak! Akun Kamu terdaftar sebagai User. Hanya Admin yang bisa masuk.";
}


    revalidatePath("/movies");
    redirect("/movies");
}
export async function logout() {
    const supabase = await createServerSupabase();
    await supabase.auth.signOut();
    revalidatePath("/movies");
    redirect("/login");
}