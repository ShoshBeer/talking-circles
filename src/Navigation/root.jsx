import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import styles from './root.module.css';

export function Root() {
  const hideMenu = () => {
    let menuOpen = document.getElementById('menu-btn').checked;

    if (menuOpen) {
      document.getElementById('menu-btn').checked = false;
    }
  }

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <nav>
            <h1 className="fw-bold">Talking in Circles</h1>
            <input className={styles['menu-btn']} type="checkbox" id="menu-btn" />
            <label className={styles['menu-icon']} htmlFor="menu-btn"><span className={styles['navicon']}></span></label>
            <ul className={styles.menu}>
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
