import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const role = request.cookies.get("role");

  // Obtener y decodificar el token de Google
  const tokenGoogle = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (tokenGoogle) {
    try {
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

  // Redirigir a la página del dashboard si ya está autenticado y accede a una ruta pública
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    if (token || tokenGoogle) {
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

  // Verificar el rol del usuario y restringir el acceso a rutas específicas
  if (token || tokenGoogle) {
    if (role?.value === "admin") {
      // Rutas que el admin no puede acceder
      const userRestrictedRoutes = [
        "/dashboard/plots",
        "/dashboard/myprofile",
        "/dashboard/plots/:id",
        "/dashboard/mysubscriptions",
        "/dashboard/stock",
      ];

      if (
        userRestrictedRoutes.some((route) =>
          request.nextUrl.pathname.startsWith(route)
        )
      ) {
        return NextResponse.redirect(
          new URL("/dashboard/admin-dashboard", request.url)
        );
      }
    } else if (role?.value === "user") {
      // Rutas que el usuario no puede acceder
      if (request.nextUrl.pathname.startsWith("/dashboard/admin-dashboard")) {
        return NextResponse.redirect(new URL("/dashboard/plots", request.url));
      }
    }
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
    "/auth/:path*",
    "/subscriptions/:path*",
  ],
};
