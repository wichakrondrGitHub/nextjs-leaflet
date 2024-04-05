import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card, Row } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuCard from "../card/MenuCard";
import ChildrenCard from "../card/ChildrenCard";
import { MenuItemType } from "@/interfaces/menu.interface";
import { MdClose } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";

const MenuLayer = (props) => {
  const [isShowSupMenu, setIsShowSupMenu] = useState<boolean>(false);
  const [subMenu, updateSubMenu] = useState<MenuItemType>();
  const [childrenItems, updateChildrenItems] = useState<MenuItemType[]>();
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const [menu, setMenu] = useState<MenuItemType[]>([
    {
      label: "Biosphere",
      id: 1,
      children: [
        {
          label: "NDVI",
          key: "ndvi",
          id: 1,
        },
        {
          label: "ABG Biomass",
          key: "abg_biomass",
          id: 2,
        },
        {
          label: "CO2 Sequestration",
          key: "carbon_sequestration",
          id: 3,
        },
        {
          label: "True Color Image",
          key: "true_color_image",
          id: 4,
        },
      ],
    },
    {
      label: "Atmosphere",
      id: 2,
      children: [
        {
          label: "Precipitation",
          key: "precipitation",
          id: 5,
        },
        {
          label: "Solar radiation",
          key: "solar_radiatation",
          id: 6,
        },
        {
          label: "Temperature",
          key: "temperature",
          id: 7,
        },
      ],
    },
    {
      label: "Risk and Vulnerability",
      id: 3,
      children: [
        {
          label: "Hotspot",
          key: "hotspot",
          id: 8,
        },
        {
          label: "DEM",
          key: "dem",
          id: 9,
        },
      ],
    },
    {
      label: "Socioeconomics",
      id: 4,
      children: [
        {
          label: "Village",
          key: "village",
          id: 10,
        },
      ],
    },
  ]);
  useEffect(() => {
    // ทำคำสั่งต่าง ๆ ที่นี่

    const x: MenuItemType[] = menu.filter((el) => el.id == subMenu);
    updateChildrenItems(x);
    return function cleanup() {};
  }, [subMenu]);

  if (isCollapse)
    return (
      <CgMenuGridR
        onClick={() => setIsCollapse(false)}
        color="green"
        size={40}
      />
    );

  return (
    <Card
      title={
        <Row align={"middle"} justify={"space-between"}>
          <GiHamburgerMenu onClick={() => setIsShowSupMenu(false)} />
          <h1>{!isShowSupMenu ? "main map menu" : childrenItems[0]?.label}</h1>
          <MdClose onClick={() => setIsCollapse(true)} />
        </Row>
      }
      className="bg-slate-200"
    >
      {!isShowSupMenu && (
        <MenuCard
          menuItems={menu}
          onClick={(e) => {
            updateSubMenu(e), setIsShowSupMenu(true);
          }}
        />
      )}
      {isShowSupMenu && (
        <ChildrenCard childrenItems={childrenItems[0]?.children} />
      )}
    </Card>
  );
};
MenuLayer.propTypes = {};

export default MenuLayer;
