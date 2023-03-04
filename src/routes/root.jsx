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
      {/* <Row>
        <footer>
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
          </a>
          <br />
          <span {...{'xmlns:dct': "http://purl.org/dc/terms/"}} property="dct:title">Talking Circles</span> by <span {...{'xmlns:cc': "http://creativecommons.org/ns#"}} property="cc:attributionName">Shoshana Beer</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
        </footer>
      </Row> */}
    </Container>
  )
}