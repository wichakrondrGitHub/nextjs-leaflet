"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
import { setCookie } from "cookies-next";
import { navigate } from "../action";
import { LocaleTypes } from "../../i18n/settings";

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  padding: 10px;
`;
const Loginform = styled(Form)`
  min-width: 420px;
`;
const Loginformbtn = styled(Button)`
  width: 100%;
`;
interface SigninProps {
  params: { locale: LocaleTypes };
}
const Signin = ({ params: { locale } }: SigninProps) => {
  const onFinish = async () => {
    try {
      if (true) {
        setCookie("auth", "auth");
        navigate("/" + locale + "/admin");
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
          <Loginformbtn
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Loginformbtn>
        </Form.Item>
      </Loginform>
    </LoginCard>
  );
};

export default Signin;
