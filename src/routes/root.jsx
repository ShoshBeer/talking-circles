import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import './root.css';

export function Root() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <nav>
            <h1>Talking in Circles</h1>
            <ul>
              <li><NavLink to={`/`}>Instructions</NavLink></li>
              <li><NavLink to={`play`}>Play</NavLink></li>
              <li><NavLink to={`settings`}>Settings</NavLink></li>
              <li><NavLink to={`score`}>Score</NavLink></li>
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