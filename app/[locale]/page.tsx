import PageTitle from "@/components/PageTitle";
import { LocaleTypes } from "./i18n/settings";
import { createTranslation } from "./i18n/server";
import Home from "./home";
import { Button, Form } from "antd";
import Input from "rc-input";
import Checkbox from "rc-checkbox";

type HomeProps = {
  params: { locale: LocaleTypes };
};

export default async function Page({ params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, "about");
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Home>
      <>Home Page</>
      {/* <PageTitle>{t("title")}</PageTitle> */}
    </Home>
  );
}
