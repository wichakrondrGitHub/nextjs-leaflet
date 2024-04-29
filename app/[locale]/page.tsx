import { LocaleTypes } from "./i18n/settings";

type HomeProps = {
  params: { locale: LocaleTypes };
};

export default async function Page({ params: { locale } }: HomeProps) {
  return <>Home Page</>;
}
