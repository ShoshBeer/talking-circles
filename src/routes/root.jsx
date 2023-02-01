import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import './root.css';

export function Root() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <nav>
            <h1>Talking in Circles</h1>
            <ul>
              <li><Link to={`home`}>Home</Link></li>
              <li><Link to={`play`}>Play</Link></li>
              <li><Link to={`settings`}>Settings</Link></li>
              <li><Link to={`score`}>Score</Link></li>
            </ul>
          </nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}