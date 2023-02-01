import { Row, Col, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectIncludeEasy, selectIncludeHard, selectIncludeMed, setWordDifficulty } from "../Controls/ControlSlice";
import { newTargetWord, addPass, addFail, selectTargetWord } from "./GameSlice";
import frequentWords from '../../Resources/Words_fr_pos.json';
import { useEffect, useState } from "react";
import { WordList } from "../WordList/WordList";


export function Game() {
  const dispatch = useDispatch();
  const targetWord = useSelector(selectTargetWord);
  const includeEasy = useSelector(selectIncludeEasy);
  const includeMed = useSelector(selectIncludeMed);
  const includeHard = useSelector(selectIncludeHard);

  const [seconds, setSeconds] = useState(0);

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

  const handleHit = () => {
    dispatch(addPass({word: targetWord, time: seconds}));
    handleNewWord();
  }

  const handleMiss = () => {
    dispatch(addFail(targetWord));
    handleNewWord();
  }

  useEffect(() => {
    setSeconds(0);
    const intervalID = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, [targetWord]);

  return (
    <Container className="my-4">
      <Row>
        <Col>
        </Col>
        <Col xs={12} sm={6}>
          <Button 
            disabled={includeEasy || includeMed || includeHard ? false : true}
            className="word-change" 
            onClick={handleMiss} 
            variant="outline-danger">Miss</Button>
          <Button 
            disabled={includeEasy || includeMed || includeHard ? false : true}
            className="word-change" 
            onClick={handleNewWord} 
            variant="outline-secondary">Skip Word</Button>
          <Button
            disabled={includeEasy || includeMed || includeHard ? false : true} 
            className="word-change" 
            onClick={handleHit} 
            variant="outline-success">Hit</Button>
          <p
            className={`feedback text-danger game-component ${includeEasy || includeMed || includeHard ? 'none' : 'block'}`}>
              Select at least one word set in Settings.</p>
        </Col>
        <Col>
          <h4>Time: </h4>
            {seconds > 59? <h4>{Math.floor(seconds/60)}m {seconds%60}s</h4> : <h4>{seconds}s</h4>}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <WordList />
        </Col>
      </Row>
    </Container>
  );
}