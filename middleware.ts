import { NextResponse, NextRequest } from "next/server";
import { locales } from "app/[locale]/i18n/settings";
import { fallbackLng } from "app/[locale]/i18n/locales";

type Middleware = (request: NextRequest) => NextResponse;

const authenticated: Middleware = (request) => {
  const authSession = request.cookies.get("auth")?.value;
  const pathname = request.nextUrl.pathname;
  if (!authSession) {
    return NextResponse.redirect(new URL("/en/login", request.url));
  }
  return NextResponse.rewrite(new URL(`${pathname}`, request.url));
};
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const authSession = request.cookies.get("auth")?.value;
  if (!authSession && !pathname.includes("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // Check if the default locale is in the pathname

  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}` ||
    pathname.startsWith(`admin`)
  ) {
    // e.g. incoming request is /en/about
    // The new URL is now /about
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? "/" : ""
        ),
        request.url
      )
    );
  }
  // if (pathname === "/home" || pathname === "/en/home") {
  //   // Redirect /home and /en/home to /
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // if (pathname === "/th/home") {
  //   // Redirect /th/home to /th
  //   return NextResponse.redirect(new URL("/th", request.url));
  // }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /about
    // Tell Next.js it should pretend it's /en/about
    return NextResponse.rewrite(
      new URL(`/${fallbackLng}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
// '/admin', "/", "/login"
