import React from "react";
import { useEffect, useState } from "react";
import { Accordion, Button, Card, OverlayTrigger, Popover } from "react-bootstrap";

export function WordList({targetWord, wordDifficulty}) {
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
        setWords(listOfWords => listOfWords.concat(synonyms));
      }
    }
    createWordList(targetWord.LEMMA);
  }, [targetWord])

  return (
    <Card>
      {words.length === 0 ?
      <Card.Header as="h2" className={wordDifficulty}>{targetWord.LEMMA}</Card.Header> :
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={
          <Popover id="target-definition">
            <Popover.Header>Definition</Popover.Header>
            <Popover.Body>{words[0].defs.map((target_defs, indexxx) => <li key={indexxx}>{target_defs}</li>)}</Popover.Body>
          </Popover>
        }>
          <Card.Header style={{cursor: 'pointer'}} as="h2" className={wordDifficulty}>{targetWord.LEMMA}</Card.Header>
      </OverlayTrigger> }
      <Card.Body>
        {words.slice(1).map((word, index) => {
          return (
          <Accordion key={index}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                {word.word}
                {/* {word.tags[0]}, {word.score} */}
              </Accordion.Header>
              <Accordion.Body style={{textAlign: 'left'}}>
                {word.defs.map((def, indexx) => <li key={indexx}>{def}</li>)}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> )
        })}
      </Card.Body>
    </Card>
  )
}