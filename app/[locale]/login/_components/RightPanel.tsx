"use client";
import React from "react";
import styled from "styled-components";
import { LocaleTypes } from "../../i18n/settings";

const RightPanelLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  flex-basis: 58%;
`;
interface SigninProps {
  params: { locale: LocaleTypes };
}
const RightPanel = ({ params: { locale } }: SigninProps) => {
  return (
    <RightPanelLayout>
      VARUNA SMART FOREST The Power of Geospatial Technology, AI & Machine
      Learning and Large-Scale Data solution for Forest Carbon Management.
    </RightPanelLayout>
  );
};

export default RightPanel;
