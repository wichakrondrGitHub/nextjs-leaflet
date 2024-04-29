// import "css/tailwind.css";
import "css/global.css";

import { Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import { maintitle, maindescription } from "@/data/localeMetadata";
import { AppProvider } from "./app-providers";
import { Metadata } from "next";
import { dir } from "i18next";
import { LocaleTypes, locales } from "./i18n/settings";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "material-icons/iconfont/material-icons.css";
import StyledComponentsRegistry from "@/lib/registry";
import MainContainer from "@/components/Home";
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}): Promise<Metadata> {
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
      default: maintitle[locale],
      template: `%s | ${maintitle[locale]}`,
    },
    description: maindescription[locale],
    openGraph: {
      title: maintitle[locale],
      description: maindescription[locale],
      url: "./",
      siteName: maintitle[locale],
      images: [siteMetadata.socialBanner],
      locale: locale,
      type: "website",
    },
    alternates: {
      canonical: "./",
      types: {
        "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: maintitle[locale],
      card: "summary_large_image",
      images: [siteMetadata.socialBanner],
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LocaleTypes };
}) {
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <body>
        <AppProvider>
          <StyledComponentsRegistry>
            <SectionContainer>
              <Header />
              <MainContainer>{children}</MainContainer>
              {/* <Footer /> */}
            </SectionContainer>
          </StyledComponentsRegistry>
        </AppProvider>
      </body>
    </html>
  );
}
