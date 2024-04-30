import { Card, Checkbox, CheckboxProps, Col, Row } from 'antd'
import React from 'react'

const ChildrenCard = ({ childrenItems }) => {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <>
      <Row gutter={[8, 8]} className="w-96">
        {/* <div className="w-full max-w-md lg:flex"> */}
        {childrenItems?.map((el, i) => (
          <Card key={i} className="w-full	">
            <Row align="middle">
              <Col span={5}>
                {' '}
                <Checkbox className="w-full	" onChange={onChange}></Checkbox>
              </Col>
              <Col span={3}>
              </Col>
              <Col span={12}>{el.label}</Col>
            </Row>
          </Card>
        ))}

        {/* </div> */}
      </Row>
    </>
  )
}

export default ChildrenCard
