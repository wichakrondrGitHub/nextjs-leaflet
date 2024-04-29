import { createTranslation } from "../i18n/server";
import { LocaleTypes } from "../i18n/settings";

type BlogPageProps = {
  params: { locale: LocaleTypes };
};

export default async function BlogPage({ params: { locale } }: BlogPageProps) {
  const { t } = await createTranslation(locale, "admin");

  return <> {t("desc")}</>;
}
