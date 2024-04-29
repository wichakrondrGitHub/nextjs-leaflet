import { LocaleTypes } from "app/[locale]/i18n/settings";
import { navigate } from "./action";
import { setCookie } from "cookies-next";
import Signin from "./_component/Signin";
type PageProps = {
  params: { locale: LocaleTypes };
};
export default function Page({ params: { locale } }: PageProps) {
  const login = async () => {
    try {
      // Perform login logic here...
      if (true) {
        setCookie("auth", "auth");
        navigate("/" + locale + "/admin");
      }
    } catch (err) {
      if (err instanceof Error) {
      }
    }
  };

  const handleFormSubmit = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Signin
        params={{
          locale: locale,
        }}
      />
    </>
  );
}
