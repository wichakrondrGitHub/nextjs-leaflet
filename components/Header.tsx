import React, { useState } from "react";
import styled from "styled-components";
import { Menu, Input, Button, Row, Col, Flex } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Logo from "@/data/logo.svg";
import Link from "./Link";
import { useParams } from "next/navigation";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import SearchPlace from "./map/tools/Search";

const { SubMenu } = Menu;

const StyledNav = styled.nav`
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const StyledButton = styled(Button)`
  display: flex;
`;
const Navigation = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const locale = useParams()?.locale as LocaleTypes;

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <StyledNav>
      <Row align="middle">
        <Col xs={12} sm={4} md={4}>
          <Link href={`/${locale}/`}>
            <Logo />
          </Link>
        </Col>
        <Col xs={0} sm={13} xl={15}>
          <SearchPlace onChange={() => {}} />
        </Col>
        <Col xs={12} sm={7} md={7} xl={5}>
          <Flex justify="end" align="center" gap={10}>
            <StyledButton size="large">
              <span class="material-symbols-outlined">Upload</span>
              Upload file
            </StyledButton>
            <Button size="large">
              <span class="material-symbols-outlined">account_circle</span>
            </Button>
          </Flex>
        </Col>
      </Row>
    </StyledNav>
  );
};

export default Navigation;
