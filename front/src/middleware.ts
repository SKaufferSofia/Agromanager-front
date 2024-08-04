import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // Obtener y decodificar el token de Google
  const tokenGoogle = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (tokenGoogle) {
    try {
      console.log("Token de Google decodificado:", tokenGoogle);

      const { user } = tokenGoogle;

      const loginData = JSON.stringify(user);

      const response = NextResponse.next();

      response.cookies.set("dataGoogle", loginData, {
        maxAge: 60 * 60 * 24 * 30,
      });

      return response;
    } catch (error) {
      console.error("Error al decodificar el token de Google:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Definir las rutas públicas
  const publicRoutes = [
    "/login",
    "/register",
    "/",
    "/home",
    "/about",
    "/contact",
  ];

  // Redirigir a la página del dashboard si ya está autenticado
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    if (token && tokenGoogle) {
      return NextResponse.redirect(new URL("/dashboard/plots", request.url));
    }
    return NextResponse.next();
  }

  // Definir las rutas protegidas
  const protectedRoutes = [
    "/dashboard/plots",
    "/dashboard/myprofile",
    "/dashboard/plots/:id",
    "/dashboard/mysubscriptions",
    "/dashboard/stock",
    "/dashboard/admin-dashboard",
    "/subscriptions",
    "/subscriptions/accept-subscription",
  ];

  // Redirigir a la página de login si no está autenticado y accede a una ruta protegida
  if (!token && !tokenGoogle) {
    if (
      protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
      )
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Si hay un token de Google, decodificarlo y desestructurarlo

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
    "/auth/:path*",
    "/subscriptions/:path*",
  ],
};
