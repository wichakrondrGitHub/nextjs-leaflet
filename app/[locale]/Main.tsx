import { Metadata } from "next";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import AuthorLayout from "@/layouts/AuthorLayout";
import { coreContent } from "pliny/utils/contentlayer";
import { genPageMetadata } from "app/[locale]/seo";
import { createTranslation } from "./i18n/server";
import { LocaleTypes } from "./i18n/settings";
import siteMetadata from "@/data/siteMetadata";

type AboutProps = {
  params: { locale: LocaleTypes };
};

export async function generateMetadata({
  params: { locale },
}: AboutProps): Promise<Metadata> {
  const { t } = await createTranslation(locale, "about");
  return genPageMetadata({
    title: t("about"),
    params: { locale: locale },
  });
}

export default async function Home({ params: { locale } }: AboutProps) {
  const { t } = await createTranslation(locale, "about");

  return (
    <>
      <AuthorLayout
        params={{ locale: locale }}
        content={{
          name: "Dear kab",
          avatar: "/static/images/avatar.png",
          occupation: "Software engineer",
          language: "en",
        }}
        children={<>{t("desc")}</>}
      ></AuthorLayout>
    </>
  );
}
