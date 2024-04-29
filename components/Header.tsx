"use client";
import styled from "styled-components";
import { useParams, usePathname } from "next/navigation";
import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Logo from "@/data/logo.svg";
import Link from "./Link";
import ThemeSwitch from "./ThemeSwitch";
import LangSwitch from "./LangSwitch";
import { useTranslation } from "app/[locale]/i18n/client";
import type { LocaleTypes } from "app/[locale]/i18n/settings";

// Styled components
const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme?.colors?.headerBackground ||
    "null"}; /* Use optional chaining and default to white */
  box-shadow: ${({ theme }) =>
    theme?.shadows?.header ||
    "none"}; /* Use optional chaining and default to none */
`;

const StyledLogoContainer = styled.div`
  margin-right: 1rem;
`;

const StyledLogo = styled.img`
  width:  /* Set desired logo width here *;
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) =>
    theme?.colors?.headerTitle ||
    ""}; /* Use optional chaining and default to black */
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledNavLink = styled(Link)`
  font-weight: medium;
  color: ${({ theme }) =>
    theme?.colors?.headerLink ||
    ""}; /* Use optional chaining and default to black */
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) =>
      theme?.colors?.headerLinkHover ||
      "#666"}; /* Use optional chaining and default to gray */
  }

  &.active {
    color: ${({ theme }) =>
      theme?.colors?.headerLinkActive ||
      "#999"}; /* Use optional chaining and default to gray */
  }
`;

// Header component
const Header = () => {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "");
  const pathname = usePathname();

  return (
    <StyledHeader>
      <div>
        <Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>
          <StyledLogoContainer>
            <Logo />
          </StyledLogoContainer>
        </Link>
      </div>
      <StyledNavLinks>
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => {
            const isSelected = pathname.includes(link.href);
            return (
              <StyledNavLink
                key={link.title}
                href={`/${locale}${link.href}`}
                className={isSelected ? "active" : ""}
              >
                {t(`${link.title.toLowerCase()}`)}
              </StyledNavLink>
            );
          })}
        {/* <ThemeSwitch />
        <LangSwitch /> */}
      </StyledNavLinks>
    </StyledHeader>
  );
};

export default Header;
