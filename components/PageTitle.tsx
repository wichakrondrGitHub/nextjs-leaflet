"use client";
import { ReactNode } from "react";
import styled from "styled-components";

interface PageTitleProps {
  children: ReactNode;
}

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.0125em;

  @media (min-width: 640px) {
    font-size: 2.25rem; /* Equivalent to sm:text-4xl in Tailwind */
    line-height: 1.25; /* Equivalent to sm:leading-10 in Tailwind */
  }

  @media (min-width: 768px) {
    font-size: 3rem; /* Equivalent to md:text-6xl in Tailwind */
    line-height: 1.2222222; /* Equivalent to md:leading-14 in Tailwind */
  }
`;

export default function PageTitle({ children }: PageTitleProps) {
  return <Title>{children}</Title>;
}
