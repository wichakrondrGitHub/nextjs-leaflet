/* eslint-disable no-constant-condition */
"use client";

import {
  Alert,
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { LocaleTypes } from "app/[locale]/i18n/settings";
import { t } from "i18next";
import { navigate } from "./action";
// import LoginForm from '/app/[locale]/(authentication)/login/login'
type Page = {
  params: { locale: LocaleTypes };
};

export default function Login({ params: { locale } }: Page) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const login = async (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setSubmitting(true);

    try {
      if (true) {
        setCookie("auth", "auth");
        navigate("/" + locale + "/admin");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Alert
        variant="danger"
        show={error !== ""}
        onClose={() => setError("")}
        dismissible
      >
        {error}
      </Alert>
      <Form onSubmit={login}>
        <Link
          href={`/${locale}/blog`}
          className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          aria-labelledby={t("all")}
        >
          {t("all")}
        </Link>
        <InputGroup className="mb-3">
          <FormControl
            name="username"
            required
            disabled={submitting}
            placeholder="Username"
            aria-label="Username"
            defaultValue="Username"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            type="password"
            name="password"
            required
            disabled={submitting}
            placeholder="Password"
            aria-label="Password"
            defaultValue="Password"
          />
        </InputGroup>

        <Row className="align-items-center">
          <Col xs={6}>
            <Button
              className="px-4"
              variant="primary"
              type="submit"
              disabled={submitting}
            >
              Login
            </Button>
          </Col>
          <Col xs={6} className="text-end"></Col>
        </Row>
      </Form>
    </>
  );
}
