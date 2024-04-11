import { Metadata } from "next";
import { genPageMetadata } from "app/[locale]/seo";
import { createTranslation } from "./i18n/server";
import { LocaleTypes } from "./i18n/settings";
import PageTitle from "@/components/PageTitle";

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
      <PageTitle>{t("title")}</PageTitle>
    </>
  );
}
