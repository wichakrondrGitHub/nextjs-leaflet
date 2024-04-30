"use client";
import React from "react";
import styled from "styled-components";
import { LocaleTypes } from "../../i18n/settings";
import { Layout } from "antd";
import Header from "@/components/Header";

interface HeaderProps {
  params: { locale: LocaleTypes };
}
const HeaderLayout = ({ params: { locale } }: HeaderProps) => {
  return <Header />;
};

export default HeaderLayout;
