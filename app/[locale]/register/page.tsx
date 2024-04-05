import { Card, CardBody, Col, Row } from 'react-bootstrap'
import Register from './register'

export default function Page() {
  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card className="rounded-0 mb-4">
          <CardBody className="p-4">
            <h1>Register</h1>
            <p className="text-black-50">Create your account</p>
            <Register />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
