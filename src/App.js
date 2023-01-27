import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { Controls } from './Components/Controls/Controls';
import { Game } from './Components/Game/Game';

function App() {
  return (
    <Container className="App">
      <Row className='py-3'>
        <Col>
          <h1>Talking in Circles</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Game/>
        </Col>
      </Row>
      <Row className='padding-top-10'>
        <Col>
          <Controls />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
