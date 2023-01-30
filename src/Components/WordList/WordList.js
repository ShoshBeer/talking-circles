import React from "react";
import { useEffect } from "react";
import { Accordion, Card, OverlayTrigger, Popover } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordList, selectTargetWord } from "../Game/GameSlice";
import { selectCurrentCard } from "../Game/GameSlice";

export function WordList({wordDifficulty, numberOfWords}) {
  const dispatch = useDispatch();
  const currentCard = useSelector(selectCurrentCard);
  const targetWord = useSelector(selectTargetWord);
  
  useEffect(() => {
    dispatch(fetchWordList());
  }, [targetWord])

  return (
    <Card>
      {currentCard.length === 0 ?
      <Card.Header as="h2" className={wordDifficulty}>{targetWord.LEMMA}</Card.Header> :
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id="target-definition">
            <Popover.Header><i>Definition</i></Popover.Header>
            <Popover.Body>{currentCard[0].defs.map((target_defs, index) => <li key={index}>{target_defs}</li>)}</Popover.Body>
          </Popover>
        }>
      <Card.Header style={{cursor: 'pointer'}} as="h2" className={wordDifficulty}>{targetWord.LEMMA}</Card.Header>
      </OverlayTrigger> }
      <Card.Body>
        {currentCard.slice(1, Number(numberOfWords) + 1).map((word, index) => {
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