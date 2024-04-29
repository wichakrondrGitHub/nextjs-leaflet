"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import { setCookie } from "cookies-next";
import { LocaleTypes } from "../../i18n/settings";

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 40%;
`;
const Loginform = styled(Form)`
  min-width: 320px;
`;
interface LoginProps {
  params: { locale: LocaleTypes };
}
const Login = ({ params: { locale } }: LoginProps) => {
  const onFinish = async () => {
    try {
      if (true) {
        setCookie("auth", "auth");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <LoginCard>
      <h1>Welcome back!</h1>
      <p>Login to your Smart Forest accout</p>
      <Loginform name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          // rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          // rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Loginform>
    </LoginCard>
  );
};

export default Login;
