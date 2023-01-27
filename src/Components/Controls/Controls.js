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
  const [numberOfWords, setNumberOfWords] = useState(5);

  const randomWordList = frequentWords.filter((word) => ['v', 'n', 'r', 'j'].includes(word.POS));

  const handleEasyCheck = () => setEasyWords(!easyWords);
  const handleMedCheck = () => setMedWords(!medWords);
  const handleHardCheck = () => setHardWords(!hardWords);

  const handleNumberChange = (e) => setNumberOfWords(e.target.value);

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
      <Row >
        <Col sm={3}>
          <h3>How to Play:</h3>
          <p>Get the other player(s) to say the word at the top of the card without saying any of the listed words or using any gestures.</p>
          <p>Click on any word to see its definition.</p>
          <p>Use the controls to choose how rare the target word can be and the number of restricted words.</p>
        </Col>
        <Col xs={12} sm={6} style={{maxWidth: '600px'}}>
          <WordList 
            targetWord={targetWord} 
            wordDifficulty={wordDifficulty}
            numberOfWords={numberOfWords} />
        </Col>
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
          <Row>
            <Col>
              <h3>Choose how many restricted words:</h3>
              <Row className="padding-top-10">
                <Col>
                  <label for="easier" className="float-left">Easier</label>
                  <label for="" className="float-right">Harder</label>
                  <input 
                    type='range'
                    min='0'
                    max='10'
                    onChange={(e) => handleNumberChange(e)}
                    value={numberOfWords}
                  />
                  {numberOfWords === '1' ? <p className="padding-top-10"><b>{numberOfWords} restricted word</b></p> : <p className="padding-top-10"><b>{numberOfWords} restricted words</b></p>}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
  )
}