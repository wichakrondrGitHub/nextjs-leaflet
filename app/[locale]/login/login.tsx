"use client";
import { Alert, Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { LocaleTypes } from "app/[locale]/i18n/settings";
import { t } from "i18next";
import { navigate } from "./action";

const { Item } = Form;

type Page = {
  params: { locale: LocaleTypes };
};

export default function Login({ params: { locale } }: Page) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const login = async () => {
    setSubmitting(true);

    try {
      // Perform login logic here...
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

  const handleFormSubmit = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      {error && (
        <Alert
          type="error"
          showIcon
          closable
          onClose={() => setError("")}
          message={error}
        />
      )}
      <Form onFinish={handleFormSubmit}>
        <Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input disabled={submitting} placeholder="Username" />
        </Item>

        <Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password disabled={submitting} placeholder="Password" />
        </Item>

        <Item>
          <Button htmlType="submit" loading={submitting}>
            Login
          </Button>
        </Item>
      </Form>
    </>
  );
}
