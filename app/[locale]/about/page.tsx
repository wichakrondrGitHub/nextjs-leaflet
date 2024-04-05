import { Metadata } from "next";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import AuthorLayout from "@/layouts/AuthorLayout";
import { coreContent } from "pliny/utils/contentlayer";
import { genPageMetadata } from "app/[locale]/seo";
import { createTranslation } from "../i18n/server";
import { LocaleTypes } from "../i18n/settings";

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

export default async function Page({ params: { locale } }: AboutProps) {
  return (
    <>
      <AuthorLayout
        params={{ locale: locale }}
        content={{
          name: "Dear kab",
          avatar: "/static/images/avatar.png",
          occupation: "Software engineer",
          company: "Stanford University",
          email: "address@yoursite.com",
          twitter: "https://twitter.com/Twitter",
          linkedin: "https://www.linkedin.com",
          github: "https://github.com",
          language: "en",
        }}
        children={
          <>
            Experienced software engineer with a strong background in React.js
            and Node.js
          </>
        }
      ></AuthorLayout>
    </>
  );
}
