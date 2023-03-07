import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import './root.css';

export function Root() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <nav>
            <h1>Talking Circles</h1>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
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
