import { Button, Col, Row } from "react-bootstrap";

export function Instructions() {
  return (
    <Row>
      <Col>
        <h2>How to Play:</h2>
        <span className="instructions">
          <p>Prompt the other player(s) to say the word at the top of the card without saying any of the listed words. No gestures are allowed either!</p>
          <p>If your partner figures out the word, click the green <Button variant="outline-success">hit</Button> button to add it to your score. If you accidentally say a restricted word or you want to try a different word, click the red <Button variant="outline-danger">miss</Button> button.</p>
          <p>Click on any word to see its definition.</p>
          <p>Go to <span className="nav-style">Settings</span> to change the difficulty of the words and the number of restricted words.</p>
          <div className="centre"><ul>
            <li><span className="text-success" >Easy</span> words appear at least once per 10,000 words</li>
            <li><span className="text-warning" >Medium</span> words appear at least once per 100,000 words</li>
            <li><span className="text-danger" >Hard</span> words appear less than once per 100,000 words.</li>
          </ul></div>
          <p>Go to <span className="nav-style">Score</span> to see the words you've won and the time each word was displayed. You can also see the words you missed so you can keep trying later!</p>
          <p>Click <span className="nav-style">Play</span> to start!</p>
        </span>
      </Col>
    </Row>
  )
}