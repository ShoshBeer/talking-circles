import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { WordList } from "../WordList/WordList";
import { useState } from "react";
import frequentWords from '../../Resources/Words_fr_pos.json';

export function Controls() {

  const [targetWord, setTargetWord] = useState({LEMMA: 'example'});
  const [wordDifficulty, setWordDifficult] = useState('');
  const [easyWords, setEasyWords] = useState(true);
  const [medWords, setMedWords] = useState(false);
  const [hardWords, setHardWords] = useState(false);

  const randomWordList = frequentWords.filter((word) => ['v', 'n', 'r', 'j'].includes(word.POS));

  const handleEasyCheck = () => setEasyWords(!easyWords);
  const handleMedCheck = () => setMedWords(!medWords);
  const handleHardCheck = () => setHardWords(!hardWords);

  const selectRandomEnglishWord = (easy, med, hard) => {
    //difficulty would relate to both length/rarity, but also to concrete vs abstract concepts
    let wordOptions = [];
    if (easy) {
      wordOptions = randomWordList.slice(0, 670);
    }
    if (med) {
      wordOptions = wordOptions.concat(randomWordList.slice(670, 1366));
    }
    if (hard) {
      wordOptions = wordOptions.concat(randomWordList.slice(1366));
    }
    const chosenWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
    if (chosenWord.FREQUENCY > 499) {
      setWordDifficult('easy');
    } else if (chosenWord.FREQUENCY > 199) {
      setWordDifficult('med');
    } else {
      setWordDifficult('hard');
    }
    setTargetWord(chosenWord);
  }

  return (
    <Row>
      <Col sm={3}>
        <Row>
          <Col>
            <Button className="my-2" onClick={() => selectRandomEnglishWord(easyWords, medWords, hardWords)}>
              New Word
            </Button>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Form>
              <Form.Label as='h3'>Select word set: </Form.Label>
              <Form.Check 
                onChange={() => handleEasyCheck()} 
                checked={easyWords} 
                className="easy" 
                type='checkbox'
                label='Most common' />
              <Form.Check 
                onChange={() => handleMedCheck()} 
                checked={medWords} 
                className="med" 
                type={'checkbox'} 
                label={'Very common'} />
              <Form.Check 
                onChange={() => handleHardCheck()} 
                checked={hardWords} 
                className="hard" 
                type={'checkbox'} 
                label={'Pretty common'} />
            </Form>
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={9} style={{maxWidth: '600px'}}>
        <WordList targetWord={targetWord} wordDifficulty={wordDifficulty} />
      </Col>
    </Row>
  )
}