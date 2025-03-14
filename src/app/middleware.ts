/**import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Solo redirige si estamos en la ruta raíz '/'
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/users", request.url));
  }
}

export const config = {
  matcher: "/",
};*/
