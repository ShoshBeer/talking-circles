import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import './root.css';

export function Root() {
  const hideMenu = () => {
    let menuOpen = document.getElementById('menu-btn').checked;
    console.log(menuOpen);

    if (menuOpen) {
      document.getElementById('menu-btn').checked = false;
      console.log(menuOpen);
    }
  }

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <nav>
            <h1>Talking in Circles</h1>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
              <li onClick={() => hideMenu()}><NavLink to={`/`}>Instructions</NavLink></li>
              <li onClick={() => hideMenu()}><NavLink to={`play`}>Play</NavLink></li>
              <li onClick={() => hideMenu()}><NavLink to={`settings`}>Settings</NavLink></li>
              <li onClick={() => hideMenu()}><NavLink to={`score`}>Score</NavLink></li>
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
