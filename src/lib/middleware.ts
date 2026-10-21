// utils/supabase/middleware.ts
import { createServerClient } from '@supabase/ssr';
import { log } from 'console';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value)
                    );
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const pathname = request.nextUrl.pathname;
    

    const protectedRoutes = ['/profile', '/settings', '/movies'];
    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    const adminRoutes = ['/admin'];
    const isAdminRoute = adminRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (!user && (isProtectedRoute || isAdminRoute)) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    if (user && isAdminRoute) {
        const userRole = user.user_metadata?.role;

        if (userRole !== 'admin') {
            const url = request.nextUrl.clone();
            url.pathname = '/movies';
            return NextResponse.redirect(url);
        }
    }

    const isAuthPage =
        pathname.startsWith('/login') || pathname.startsWith('/register');
    if (user && isAuthPage) {
        const url = request.nextUrl.clone();
        url.pathname = '/movies';
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}