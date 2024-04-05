import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Login from "./login";
import { LocaleTypes } from "app/[locale]/i18n/settings";
type Page = {
  params: { locale: LocaleTypes };
};
export default function Page({ params: { locale } }: Page) {
  return (
    <Row className="justify-content-center align-items-center px-3">
      <Col lg={8}>
        <Row>
          <Col md={7} className="border bg-white p-5">
            <div>
              <h1>Login</h1>
              <p className="text-black-50">Sign In to your account</p>

              <Login
                params={{
                  locale: locale,
                }}
              />
            </div>
          </Col>
          <Col
            md={5}
            className="bg-primary d-flex align-items-center justify-content-center p-5 text-white"
          >
            <div className="text-center">
              <h2>Sign up</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                className="btn btn-lg btn-outline-light mt-3 bg-black"
                href="/register"
              >
                Register Now!
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
