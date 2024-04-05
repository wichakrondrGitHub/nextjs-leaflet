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
  if (pathname.includes("admin")) {
    return authenticated(request);
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
  if (pathname === "/home" || pathname === "/en/home") {
    // Redirect /home and /en/home to /
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/fr/home") {
    // Redirect /fr/home to /fr
    return NextResponse.redirect(new URL("/fr", request.url));
  }

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
  // Do not run the middleware on the following paths
  // prettier-ignore
  matcher:
    ['/((?!api|static|track|data|css|scripts|.*\\..*|_next).*|robots.txt|sitemap.xml)', '/admin'],
};
