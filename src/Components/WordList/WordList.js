import React from "react";
import { useEffect } from "react";
import { Accordion, Card, OverlayTrigger, Popover } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectNumOfRestrictedWords, selectWordDifficulty, selectLanguage } from "../Controls/ControlSlice";
import { selectTargetWord, selectRelatedWords, addRelatedWords } from "../Game/GameSlice";

export function WordList() {
  const dispatch = useDispatch();
  const relatedWords = useSelector(selectRelatedWords);
  const targetWord = useSelector(selectTargetWord);
  const wordDifficulty = useSelector(selectWordDifficulty);
  const numberOfWords = useSelector(selectNumOfRestrictedWords);
  const language = useSelector(selectLanguage);

  const wordDictionary = require(`../../Resources/${language[1]}_smooth_dict.json`);

  useEffect(() => {
    wordDictionary[targetWord["word"]] && dispatch(addRelatedWords(wordDictionary[targetWord["word"]]["related words"]))
  }, [targetWord, wordDictionary, dispatch])

  return (
    <Card>
      {relatedWords.length === 0 ?
      <Card.Header as="h2" className={wordDifficulty}>{targetWord["word"]}</Card.Header> :
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id="target-definition">
            <Popover.Header><span className="bold">Definition</span></Popover.Header>
            <Popover.Body className="scroll" >{targetWord["definitions"].map((target_defs, index) => <li key={index}><span className="italic">{target_defs[0]}</span> - {target_defs[1]}</li>)}</Popover.Body>
          </Popover>
        }>
      <Card.Header style={{cursor: 'pointer'}} as="h2" className={wordDifficulty}>{targetWord["word"]}</Card.Header>
      </OverlayTrigger>
      }
      <Card.Body>
        <Accordion>
          {relatedWords[0] && relatedWords[0].slice(0, Number(numberOfWords)).map((word, index) => {
            return (
              <Accordion.Item key={`${word[1]}-${index}`} eventKey={`${word[1]}-${index}`}>
                <Accordion.Header onClick={() => document.querySelectorAll('.scroll').forEach(element => element.scroll({top: 0})) } >
                  {word[1]}
                </Accordion.Header>
                { word[3] ?
                  (
                    <Accordion.Body className="scroll" style={{textAlign: 'left'}}>
                      {word[3].map((def, index) => <li key={index}><span className="italic">{def[0]}</span> - {def[1]}</li>)}
                    </Accordion.Body>
                  )
                  :
                  (
                    <Accordion.Body className="scroll" style={{textAlign: 'left'}}>
                      {wordDictionary[word[1]]["definitions"].map((def, index) => <li key={index}><span className="italic">{def[0]}</span> - {def[1]}</li>)}
                    </Accordion.Body>
                  )
                }
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Card.Body>
    </Card>
  )
}
