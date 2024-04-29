import { LocaleTypes } from "app/[locale]/i18n/settings";
import Signin from "./_components/Signin";
import RightPanel from "./_components/RightPanel";
type PageProps = {
  params: { locale: LocaleTypes };
};
export default function Page({ params: { locale } }: PageProps) {
  return (
    <>
      <Signin
        params={{
          locale: locale,
        }}
      />
      <RightPanel
        params={{
          locale: locale,
        }}
      />
    </>
  );
}
