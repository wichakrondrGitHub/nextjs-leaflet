import { Metadata } from "next";
import { genPageMetadata } from "app/[locale]/seo";
import { createTranslation } from "../i18n/server";
import { LocaleTypes } from "../i18n/settings";

type BlogPageProps = {
  params: { locale: LocaleTypes };
};

export async function generateMetadata({
  params: { locale },
}: BlogPageProps): Promise<Metadata> {
  return genPageMetadata({
    title: "Blog",
    params: { locale: locale },
  });
}

export default async function BlogPage({ params: { locale } }: BlogPageProps) {
  const { t } = await createTranslation(locale, "admin");

  return <> {t("desc")}</>;
}
