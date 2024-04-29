import { createTranslation } from "../i18n/server";
import { LocaleTypes } from "../i18n/settings";

type DashboardProps = {
  params: { locale: LocaleTypes };
};

export default async function Dashboard({
  params: { locale },
}: DashboardProps) {
  return <> Dashboard page</>;
}
