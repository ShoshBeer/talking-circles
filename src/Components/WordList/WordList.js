import React from "react";
import { useEffect } from "react";
import { Accordion, Card, OverlayTrigger, Popover } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectNumOfRestrictedWords, selectWordDifficulty, selectLanguage } from "../Controls/ControlSlice";
import { fetchWordList, selectTargetWord, selectCurrentCard, selectRelatedWords, addRelatedWords } from "../Game/GameSlice";
import enDictionary from '../../Resources/en_smooth_dict.json';
import enBigDictionary from '../../Resources/en_full_dict.json';

export function WordList() {
  const dispatch = useDispatch();
  const currentCard = useSelector(selectCurrentCard);
  const relatedWords = useSelector(selectRelatedWords);
  const targetWord = useSelector(selectTargetWord);
  const wordDifficulty = useSelector(selectWordDifficulty);
  const numberOfWords = useSelector(selectNumOfRestrictedWords);

  useEffect(() => {
    // dispatch(fetchWordList());
    dispatch(addRelatedWords(enDictionary[targetWord["word"]]["related words"]))
  }, [targetWord, dispatch])

  return (
    <Card>
      {relatedWords.length === 0 ?
      <Card.Header as="h2" className={wordDifficulty}>{targetWord["word"]}</Card.Header> :
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id="target-definition">
            <Popover.Header><i>Definition</i></Popover.Header>
            <Popover.Body>{targetWord["definitions"].map((target_defs, index) => <li key={index}>({target_defs[0]}) {target_defs[1]}</li>)}</Popover.Body>
          </Popover>
        }>
      <Card.Header style={{cursor: 'pointer'}} as="h2" className={wordDifficulty}>{targetWord["word"]}</Card.Header>
      </OverlayTrigger> }
      <Card.Body>
        {relatedWords[0] && relatedWords[0].slice(0, Number(numberOfWords)).map((word, index) => {
           return enDictionary[word[1]] ? 
          (
            <Accordion key={index}>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  {word[1]}
                </Accordion.Header>
                <Accordion.Body style={{textAlign: 'left'}}>
                  {enDictionary[word[1]] && enDictionary[word[1]]["definitions"].map((def, index) => <li key={index}>({def[0]}) {def[1]}</li>)}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> 
          ) : enBigDictionary[word[1]] ?
          (
            <Accordion key={index}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                {word[1]}
              </Accordion.Header>
              <Accordion.Body style={{textAlign: 'left'}}>
                {enBigDictionary[word[1]] && enBigDictionary[word[1]]["definitions"].map((def, index) => <li key={index}>({def[0]}) {def[1]}</li>)}
              </Accordion.Body>
            </Accordion.Item>
            </Accordion> 
          ) : null
        })}
      </Card.Body>
    </Card>
  )
}