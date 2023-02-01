import { useSelector } from "react-redux";
import { selectFail, selectPass } from "../Game/GameSlice";
import { Row, Col } from "react-bootstrap";

export function Score() {
  const passes = useSelector(selectPass);
  const fails = useSelector(selectFail);
  return (
    <Row>
      <Col>
        <h2>Scored Words</h2>
        {passes.map((word, index) => <p key={index}>word: "{word.word.LEMMA}" | time: {word.time} seconds</p>)}
      </Col>
    </Row>
  )
}