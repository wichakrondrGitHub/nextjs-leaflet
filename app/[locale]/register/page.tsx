import { Card, Col, Row } from "antd";
import Register from "./register";

export default function Page() {
  return (
    <Row>
      <Col md={6}>
        <Card>
          <div>
            <h1>Register</h1>
            <p>Create your account</p>
            <Register />
          </div>
        </Card>
      </Col>
    </Row>
  );
}
