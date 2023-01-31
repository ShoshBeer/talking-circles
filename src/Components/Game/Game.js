import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectIncludeEasy, selectIncludeHard, selectIncludeMed, setWordDifficulty } from "../Controls/ControlSlice";
import { newTargetWord, addPass, addFail, selectTargetWord } from "./GameSlice";
import frequentWords from '../../Resources/Words_fr_pos.json';


export function Game() {
  const dispatch = useDispatch();
  const targetWord = useSelector(selectTargetWord);
  const includeEasy = useSelector(selectIncludeEasy);
  const includeMed = useSelector(selectIncludeMed);
  const includeHard = useSelector(selectIncludeHard);

  const randomWordList = frequentWords.filter((word) => ['v', 'n', 'r', 'j'].includes(word.POS));

  const handleNewWord = () => {
    //difficulty would relate to both length/rarity, but also to concrete vs abstract concepts
    let wordOptions = [];
    if (includeEasy) {
      wordOptions = randomWordList.slice(0, 670);
    }
    if (includeMed) {
      wordOptions = wordOptions.concat(randomWordList.slice(670, 1366));
    }
    if (includeHard) {
      wordOptions = wordOptions.concat(randomWordList.slice(1366));
    }
    const chosenWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
    if (chosenWord.FREQUENCY > 499) {
      dispatch(setWordDifficulty('text-success'));
    } else if (chosenWord.FREQUENCY > 199) {
      dispatch(setWordDifficulty('text-warning'));
    } else {
      dispatch(setWordDifficulty('text-danger'));
    }
    dispatch(newTargetWord(chosenWord));
  }

  return (
    <Row>
      <Col>
      </Col>
      <Col xs={6}>
        <Button onClick={() => dispatch(addFail(targetWord))} variant="outline-danger">Miss</Button>
        <Button onClick={() => handleNewWord()} className="mx-5" >New Word</Button>
        <Button onClick={() => dispatch(addPass(targetWord))} variant="outline-success">Hit</Button>
      </Col>
      <Col>
      </Col>
    </Row>
  );
}