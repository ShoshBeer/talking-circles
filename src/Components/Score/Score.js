import { useSelector } from "react-redux";
import { selectFail, selectPass } from "../Game/GameSlice";
import { Row, Col } from "react-bootstrap";

export function Score() {
  const passes = useSelector(selectPass);
  const fails = useSelector(selectFail);

  const getPassList = passes.map((word, index) => {
    const timePlural = word.time === 1 ? 'second' : 'seconds';
    return (<p 
              className="score" 
              key={index}>
                <span className={word.difficulty + ' bold'}>{word.word["word"]}</span> | {word.time} {timePlural}
            </p>);
  });

  const getFailList = fails.map((word, index) => <p className="score" key={index}><span className={word.difficulty + ' bold'}>{word.word["word"]}</span></p>);

  return (
    <Row className="mt-4">
      <Col xs={12} md={7}>
        <h2>Scored Words</h2>
        {getPassList}
      </Col>
      <Col xs={12} md={5}>
        <h2>Missed Words</h2>
        {getFailList}
      </Col>
    </Row>
  )
}