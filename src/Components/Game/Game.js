import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

export function Game(props) {
  const [record, setRecord] = useState({pass: [], fail: []});
  return (
    <Row>
      <Col>
      </Col>
      <Col xs={6}>
        <Button className="width-150" variant="danger">Missed</Button>
        <Button className="width-150" variant="warning">Skip</Button>
        <Button className="width-150" variant="success">Hit</Button>
      </Col>
      <Col>
      </Col>
    </Row>
  );
}