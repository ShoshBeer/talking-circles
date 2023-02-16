import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { Controls } from './Components/Controls/Controls';
import { Game } from './Components/Game/Game';
import { RandomWord } from './Components/RandomWord/RandomWord';

function App() {
  return (
    <Container className="App">
      <Row className='py-3'>
        <Col>
          <h1>Talking in Circles</h1>
        </Col>
      </Row>
      <Row className='padding-top-10'>
        <Col>
          <Controls />
        </Col>
      </Row>
      <Row>
        <Col>
          <RandomWord />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
