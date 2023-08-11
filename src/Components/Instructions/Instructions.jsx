import { Button, Col, Row, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './Instructions.module.css'

export function Instructions () {
  return (
    <Container className='my-4'>
      <Row>
        <Col>
          <h2 className='fw-semibold'>How to Play:</h2>
          <span className={styles.instructions}>
            <p>Prompt the other player(s) to say the word at the top of the card without saying any of the listed words. No gestures are allowed either!</p>
            <p>If your partner figures out the word, click the green <Button variant='outline-success'>hit</Button> button to add it to your score. If you accidentally say a restricted word or you want to try a different word, click the red <Button variant='outline-danger'>miss</Button> button.</p>
            <p>Click on any word to see its definition.</p>
            <p>Go to <NavLink to='settings' className={styles['nav-style']}>Settings</NavLink> to choose your language and change the game difficulty.</p>
            <p>Go to <NavLink to='score' className={styles['nav-style']}>Score</NavLink> to see the words you've won and the time each word was displayed. You can also see the words you missed so you can keep trying later!</p>
            <p>Click <NavLink to='play' className={styles['nav-style']}>Play</NavLink> to start!</p>
          </span>
        </Col>
      </Row>
    </Container>
  )
}
