import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const tokenGoogle = request.cookies.get("next-auth.session-token");

  const publicRoutes = [
    "/login",
    "/register",
    "/",
    "/home",
    "/about",
    "/contact",
  ];

  if (
    token ||
    (tokenGoogle && publicRoutes.includes(request.nextUrl.pathname))
  ) {
    return NextResponse.redirect(new URL("/dashboard/plots", request.url));
  }

  const protectedRoutes = [
    "/dashboard/plots",
    "/dashboard/myprofile",
    "/dashboard/plots/:id",
    "/dashboard/mysubscriptions",
    "/dashboard/stock",
  ];

  if (
    !token &&
    !tokenGoogle &&
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/register",
    "/login",
    "/home",
    "/about",
    "/contact",
    "/",
    "/dashboard/:path*",
  ],
};
