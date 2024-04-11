import styled from "styled-components";
import { useRef, useState } from "react";
import {
  usePathname,
  useParams,
  useSelectedLayoutSegments,
  useRouter,
} from "next/navigation";
import { useOuterClick } from "./util/useOuterClick";
import { LocaleTypes, locales } from "app/[locale]/i18n/settings";
import slugMap from "app/[locale]/localeid-map.json";
import { Button, Dropdown, Menu } from "antd";

// Styled components
const StyledLangSwitch = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: 4px 12px;
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#ddd"}; /* Use optional chaining and default to gray */
  border-radius: 4px;
  background-color: ${({ theme }) =>
    theme?.colors?.background ||
    ""}; /* Use optional chaining and default to white */
  font-size: 14px;
  font-weight: medium;
  color: ${({ theme }) =>
    theme?.colors?.text || ""}; /* Use optional chaining and default to black */
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.colors?.backgroundHover ||
      ""}; /* Use optional chaining and default to light gray */
  }

  /* Add styles for focus state if needed */
`;

const StyledMenu = styled.div`
  position: absolute;
  top: 100%; /* Position menu below the button */
  right: 0;
  width: 150px; /* Set menu width */
  background-color: ${({ theme }) =>
    theme?.colors?.background ||
    ""}; /* Use optional chaining and default to white */
  box-shadow: ${({ theme }) =>
    theme?.shadows?.default ||
    "0px 2px 4px rgba(0, 0, 0, 0.1)"}; /* Use optional chaining and default to default shadow */
  border-radius: 4px;
  padding: 8px 0;
  z-index: 10;
  border: 1px solid #ddd;
`;

const StyledMenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background-color: transparent;

  font-size: 14px;
  color: ${({ theme }) =>
    theme?.colors?.text || ""}; /* Use optional chaining and default to black */
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.colors?.backgroundHover ||
      ""}; /* Use optional chaining and default to light gray */
  }
`;

const LangSwitch = () => {
  const pathname = usePathname();
  const urlSegments = useSelectedLayoutSegments();
  const locale = useParams()?.locale as LocaleTypes;
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLocaleChange = (newLocale: string): string => {
    const newUrl = `/${newLocale}/${urlSegments.join("/")}`;

    return newUrl;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menubarRef = useRef<HTMLDivElement>(null);
  useOuterClick(menubarRef, closeMenu);

  const handleLinkClick = (newLocale: string) => {
    const resolvedUrl = handleLocaleChange(newLocale);
    router.push(resolvedUrl);
    closeMenu();
  };
  const handleClick = ({ key }) => {
    console.log(key);
    //you can perform setState here
  };

  const menu = (
    <Menu onClick={handleClick}>
      {locales.map((newLocale: string) => (
        <Menu.Item key={newLocale}>
          <StyledMenuItem onClick={() => handleLinkClick(newLocale)}>
            {newLocale}
          </StyledMenuItem>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <StyledLangSwitch ref={menubarRef}>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button onClick={(e) => e.preventDefault()}>{locale}</Button>
      </Dropdown>
    </StyledLangSwitch>
  );
};

export default LangSwitch;
