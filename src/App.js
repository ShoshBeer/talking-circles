import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { WordList } from './Components/WordList/WordList';

function App() {
  return (
    <Container className="App">
      <Row className='py-3'>
        <Col>
          <h1>Talking in Circles</h1>
        </Col>
      </Row>
      <Row >
        <Col>
          <WordList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
