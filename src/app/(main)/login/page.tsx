// login/page.tsx
import LoginFormClient from "@/components/LoginFormClient";
import { createServerSupabase } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = await createServerSupabase();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const userRole =
      session.user?.user_metadata?.role || session.user?.app_metadata?.role;
    if (userRole === "admin") {
      redirect("/movies");
    }
  }

  return <LoginFormClient />;
}
