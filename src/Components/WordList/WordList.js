import React from "react";
import { useEffect, useState } from "react";
import { Accordion, Card, OverlayTrigger, Popover } from "react-bootstrap";

export function WordList({targetWord, wordDifficulty, numberOfWords}) {
  const [words, setWords] = useState([]);
  
  useEffect(() => {
    const createWordList = async (targetWord, numOfWords = 5) => {
      //creates a list of words related to the target word
      const responseSyn = await fetch(`https://api.datamuse.com/words?rel_syn=${targetWord}&max=${numOfWords}&md=fd&qe=rel_syn`);
      const responseTrg = await fetch(`https://api.datamuse.com/words?rel_trg=${targetWord}&max=${numOfWords}&md=fd`);
      if (responseSyn.ok) {
        const relatedWords = await responseSyn.json();
        setWords(relatedWords); 
      }
      if (responseTrg.ok) {
        const synonyms = await responseTrg.json();
        console.log(synonyms);
        setWords(listOfWords => listOfWords.concat(synonyms));
      }
      setWords((prevList) => prevList.filter((word, index) =>  index === 0 || !word.word.toLowerCase().includes(targetWord.toLowerCase()))); //filter related words that contain the target word
    }
    createWordList(targetWord.LEMMA);
  }, [targetWord])

  return (
    <Card>
      {words.length === 0 ?
      <Card.Header as="h2" className={wordDifficulty}>{targetWord.LEMMA}</Card.Header> :
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id="target-definition">
            <Popover.Header><i>Definition</i></Popover.Header>
            <Popover.Body>{words[0].defs.map((target_defs, index) => <li key={index}>{target_defs}</li>)}</Popover.Body>
          </Popover>
        }>
          <Card.Header style={{cursor: 'pointer'}} as="h2" className={wordDifficulty}>{targetWord.LEMMA}</Card.Header>
      </OverlayTrigger> }
      <Card.Body>
        {words.slice(1, Number(numberOfWords) + 1).map((word, index) => {
          return (
          <Accordion key={index}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                {word.word}
                {/* {word.tags[0]}, {word.score} */}
              </Accordion.Header>
              <Accordion.Body style={{textAlign: 'left'}}>
                {word.defs.map((def, index) => <li key={index}>{def}</li>)}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> )
        })}
      </Card.Body>
    </Card>
  )
}