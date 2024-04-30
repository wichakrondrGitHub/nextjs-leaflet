import React, { useEffect, useState } from "react";
import { Avatar, Badge, Flex, List, Space, Typography } from "antd";
import styled from "styled-components";
const StyledListItem = styled(List.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const StyledList = styled(List)`
  width: 107px;
  background-color: white;
`;

const StyledFlex = styled(List)`
  width: 100%;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

const MenuLayer = () => {
  const data = [
    <>
      <Badge count={1}>
        <Avatar
          shape="square"
          size="large"
          icon={<span class="material-symbols-outlined">forest</span>}
        ></Avatar>
      </Badge>
      <Typography.Paragraph>Biosphere</Typography.Paragraph>
    </>,

    <>
      <Badge count={2}>
        <Avatar
          shape="square"
          size="large"
          icon={
            <span class="material-symbols-outlined">partly_cloudy_day</span>
          }
        />
      </Badge>
      <Typography.Paragraph> Atmosphere</Typography.Paragraph>
    </>,
    <>
      <Badge count={3}>
        <Avatar
          shape="square"
          size="large"
          icon={<span class="material-symbols-outlined">gpp_maybe</span>}
        />
      </Badge>
      <Typography.Paragraph>Risk and Vulnerability</Typography.Paragraph>
    </>,
    <>
      <Badge count={4}>
        <Avatar
          shape="square"
          size="large"
          icon={<span class="material-symbols-outlined">holiday_village</span>}
        />
      </Badge>
      <Typography.Paragraph>Socioecono mics</Typography.Paragraph>
    </>,
  ];

  return (
    <Flex>
      <StyledList
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => (
          <StyledListItem>
            <StyledFlex>{item}</StyledFlex>
          </StyledListItem>
        )}
      />
    </Flex>
  );
};

export default MenuLayer;
