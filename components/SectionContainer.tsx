"use client";
import { ReactNode } from "react";
import styled from "styled-components";

interface SectionContainerProps {
  children: ReactNode;
}
const Section = styled.section`
  background-color: #e7e9eb;
  padding: 0;
  font-family: sans-serif;
  height: 100vh;
  flex-direction: column;
  display: flex;
  // justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  // max-width: 2000px; /* Equivalent to max-w-screen-2xl */
  @media (min-width: 640px) {
    // padding-left: 24px; /* Equivalent to sm:px-6 */
    // padding-right: 24px; /* Equivalent to sm:px-6 */
    // display: none;
  }
`;
export default function SectionContainer({ children }: SectionContainerProps) {
  return <Section>{children}</Section>;
}
