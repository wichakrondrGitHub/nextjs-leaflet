import { Col, Row } from "antd";
import Link from "next/link";
import Login from "./login";
import { LocaleTypes } from "app/[locale]/i18n/settings";
type Page = {
  params: { locale: LocaleTypes };
};
export default function Page({ params: { locale } }: Page) {
  return (
    <Row>
      <Col lg={8}>
        <Row>
          <Col md={7}>
            <div>
              <h1>Login</h1>
              <p>Sign In to your account</p>

              <Login
                params={{
                  locale: locale,
                }}
              />
            </div>
            <Link href="/register">Register Now!</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
