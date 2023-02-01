import { useSelector } from "react-redux";
import { selectFail, selectPass } from "../Game/GameSlice";
import { Row, Col } from "react-bootstrap";

export function Score() {
  const passes = useSelector(selectPass);
  const fails = useSelector(selectFail);
  return (
    <Row className="mt-4">
      <Col xs={12} md={7}>
        <h2>Scored Words</h2>
        {passes.map((word, index) => <p className="score" key={index}>word: <span className="bold">{word.word.LEMMA}</span> | time: {word.time} {word.time === 1 ? 'second' : 'seconds'}</p>)}
      </Col>
      <Col xs={12} md={5}>
        <h2>Missed Words</h2>
        {fails.map((word, index) => <p className="score" key={index}>word: <span className="bold">{word.LEMMA}</span></p>)}
      </Col>
    </Row>
  )
}