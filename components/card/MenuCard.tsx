import { MenuItemType } from '@/interfaces/menu.interface'
import { Card, Col, Row } from 'antd'
import React from 'react'
import { AiFillAlert } from 'react-icons/ai'

const menu: MenuItemType[] = [
  {
    label: 'Biosphere',
    id: 1,
    children: [
      {
        label: 'NDVI',
        key: 'ndvi',
        id: 1,
      },
      {
        label: 'ABG Biomass',
        key: 'abg_biomass',
        id: 2,
      },
      {
        label: 'CO2 Sequestration',
        key: 'carbon_sequestration',
        id: 3,
      },
      {
        label: 'True Color Image',
        key: 'true_color_image',
        id: 4,
      },
    ],
  },
  {
    label: 'Atmosphere',
    id: 2,
    children: [
      {
        label: 'Precipitation',
        key: 'precipitation',
        id: 5,
      },
      {
        label: 'Solar radiation',
        key: 'solar_radiatation',
        id: 6,
      },
      {
        label: 'Temperature',
        key: 'temperature',
        id: 7,
      },
    ],
  },
  {
    label: 'Risk and Vulnerability',
    id: 3,
    children: [
      {
        label: 'Hotspot',
        key: 'hotspot',
        id: 8,
      },
      {
        label: 'DEM',
        key: 'dem',
        id: 9,
      },
    ],
  },
  {
    label: 'Socioeconomics',
    id: 4,
    children: [
      {
        label: 'Village',
        key: 'village',
        id: 10,
      },
    ],
  },
]

type MenuCardPropsType = {
  menuItems: MenuItemType[]
  onClick: (e) => void
}

const MenuCard = (props: MenuCardPropsType) => {
  const { menuItems, onClick } = props
  return (
    <>
      <Row gutter={[8, 8]} className="w-96">
        {menuItems.map((menuItem) => (
          <Col key={menuItem.id} span={8} className="" onClick={(e) => onClick(menuItem.id)}>
            <div className="flex h-36 max-w-sm  flex-col  justify-center rounded-lg border  border-gray-200 bg-white text-center align-middle shadow hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-800">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <div className="flex h-3/4 justify-center	">
                  <AiFillAlert size={30} />
                </div>
              </p>

              <div className="flex	h-1/4 justify-center">{menuItem.label}</div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default MenuCard
