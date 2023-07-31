import { Container, Row, Col } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './root.module.css'
import { useState } from 'react'

export function Root () {
  const [check, setCheck] = useState(false)

  const hideMenu = () => {
    setCheck(!check);
  }

  return (
    <Container className='text-center'>
      <Row>
        <Col>
          <nav>
            <h1 className='fw-bold'>Talking in Circles</h1>
            <input 
              className={styles['menu-btn']} 
              type='checkbox' 
              id='menu-btn' 
              checked={check}
              onChange={() => hideMenu()}
            />
            <label className={styles['menu-icon']} htmlFor='menu-btn'><span className={styles.navicon} /></label>
            <ul className={styles.menu}>
              <li onClick={() => hideMenu()}><NavLink to='/'>Instructions</NavLink></li>
              <li onClick={() => hideMenu()}><NavLink to='play'>Play</NavLink></li>
              <li onClick={() => hideMenu()}><NavLink to='settings'>Settings</NavLink></li>
              <li onClick={() => hideMenu()}><NavLink to='score'>Score</NavLink></li>
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
