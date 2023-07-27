import { Row, Col, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectIncludeEasy, selectIncludeHard, selectIncludeMed, selectWordDifficulty, selectLanguage, selectTimeLimit, setWordDifficulty } from "../Controls/ControlSlice";
import { newTargetWord, addPass, addFail, selectTargetWord } from "./GameSlice";
import { useCallback, useEffect, useState } from "react";
import { WordList } from "../WordList/WordList";


export function Game() {
  const dispatch = useDispatch();
  const targetWord = useSelector(selectTargetWord);
  const includeEasy = useSelector(selectIncludeEasy);
  const includeMed = useSelector(selectIncludeMed);
  const includeHard = useSelector(selectIncludeHard);
  const wordDifficulty = useSelector(selectWordDifficulty);
  const language = useSelector(selectLanguage);
  const timeLimit = Number(useSelector(selectTimeLimit));

  const wordDictionary = require(`../../assets/${language[1]}_smooth_dict.json`);

  const [seconds, setSeconds] = useState(0);

  const handleNewWord = () => {
    //difficulty would relate to both length/rarity, but also to concrete vs abstract concepts
    const keys = [];
    for (const key in wordDictionary) {
      if (includeEasy && wordDictionary[key]["frequency"] < 0.00126 && wordDictionary[key]["frequency"] >= 0.0001) {
        keys.push(key);
      }
      else if (includeMed && wordDictionary[key]["frequency"] < 0.0001 && wordDictionary[key]["frequency"] >= 0.00001) {
        keys.push(key);
      }
      else if (includeHard && wordDictionary[key]["frequency"] < 0.00001) {
        keys.push(key);
      }
    }
    const chosenWord = wordDictionary[keys[Math.floor(Math.random() * keys.length)]];

    if (chosenWord["frequency"] >= 0.0001) {
      dispatch(setWordDifficulty('text-success'));
    } else if (chosenWord["frequency"] >= 0.00001) {
      dispatch(setWordDifficulty('text-warning'));
    } else {
      dispatch(setWordDifficulty('text-danger'));
    }
    dispatch(newTargetWord(chosenWord));
  };

  const handleHit = () => {
    dispatch(addPass({word: targetWord, time: seconds, difficulty: wordDifficulty}));
    handleNewWord();
  }

  const handleMiss = () => {
    dispatch(addFail({word: targetWord, time: seconds, difficulty: wordDifficulty}));
    handleNewWord();
  };

  useEffect(() => {
    handleNewWord();
  }, [])

  useEffect(() => {
    setSeconds(0);
    const intervalID = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, [targetWord]);

  useEffect(() => {
    if (timeLimit !== 0 && seconds >= timeLimit) {
      handleMiss();
    }
  }, [seconds, timeLimit])

  const missingDifficultySelection = includeEasy || includeMed || includeHard ? false : true;

  return (
    <Container className="my-4">
      <Row>
        <Col>
        </Col>
        <Col xs={12} sm={6}>
          <Button 
            disabled={missingDifficultySelection}
            className="word-change" 
            onClick={handleMiss} 
            variant="outline-danger">Miss</Button>
          <Button 
            disabled={missingDifficultySelection}
            className="word-change" 
            onClick={handleNewWord} 
            variant="outline-secondary">Skip Word</Button>
          <Button
            disabled={missingDifficultySelection} 
            className="word-change" 
            onClick={handleHit} 
            variant="outline-success">Hit</Button>
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
