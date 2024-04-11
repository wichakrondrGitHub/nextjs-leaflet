import styled from "styled-components";
import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Medium,
} from "./icons";
import siteMetadata from "@/data/siteMetadata";

// Twitter icon replaced with "X" brand. If you prefer the blue bird icon, replace the X with "twitter" instead

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: X,
  medium: Medium,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href?: string | undefined;
  size?: number;
};

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.875rem; // Equivalent to text-sm
  color: #6b7280;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: red;
  }
`;

const SocialSpan = styled.span`
  display: none; // Equivalent to sr-only
`;

const SocialSvg = styled.svg`
  fill: currentColor;
  width: ${({ size }) => size || 8}px;
  height: ${({ size }) => size || 8}px;
  margin-right: 0.5rem; // Equivalent to mr-2
`;

const SocialIcon = ({ kind, href, size = 25 }: SocialIconProps) => {
  const SocialSvgComponent = components[kind];

  return (
    <>
      {kind === "mail" && !href && siteMetadata.formspree === true ? (
        <>
          <SocialSpan>{kind}</SocialSpan>
          <SocialSvg size={size}>
            <SocialSvgComponent />
          </SocialSvg>
        </>
      ) : (
        <SocialLink href={href} target="_blank" rel="noopener noreferrer">
          <SocialSpan>{kind}</SocialSpan>
          <SocialSvg size={size}>
            <SocialSvgComponent />
          </SocialSvg>
        </SocialLink>
      )}
    </>
  );
};

export default SocialIcon;
