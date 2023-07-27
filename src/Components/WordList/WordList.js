import React from "react";
import { useEffect } from "react";
import { Accordion, Card, OverlayTrigger, Popover } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectNumOfRestrictedWords, selectWordDifficulty, selectLanguage } from "../Controls/ControlSlice";
import { selectTargetWord, selectRelatedWords, addRelatedWords } from "../Game/GameSlice";
import styles from './WordList.module.css';

export function WordList() {
  const dispatch = useDispatch();
  const relatedWords = useSelector(selectRelatedWords);
  const targetWord = useSelector(selectTargetWord);
  const wordDifficulty = useSelector(selectWordDifficulty);
  const numberOfWords = useSelector(selectNumOfRestrictedWords);
  const language = useSelector(selectLanguage);

  const wordDictionary = require(`../../assets/${language[1]}_smooth_dict.json`);

  useEffect(() => {
    wordDictionary[targetWord["word"]] && dispatch(addRelatedWords(wordDictionary[targetWord["word"]]["related words"]))
  }, [targetWord, wordDictionary, dispatch])

  return (
    <Card>
      {relatedWords.length === 0 ?
      <Card.Header as="h2" className={`${wordDifficulty} fw-semibold`}>{targetWord["word"]}</Card.Header> :
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        rootClose
        overlay={
          <Popover id={styles['target-definition']}>
            <Popover.Header><span className="fw-bold">Definition</span></Popover.Header>
            <Popover.Body className={styles.scroll} >{targetWord["definitions"].map((target_defs, index) => <li key={index}><span className="fst-italic">{target_defs[0]}</span> - {target_defs[1]}</li>)}</Popover.Body>
          </Popover>
        }>
        <Card.Header as="h2" className={`${wordDifficulty} ${styles.pointer} fw-semibold`}>{targetWord["word"]}</Card.Header>
      </OverlayTrigger>
      }
      <Card.Body>
        <Accordion>
          {relatedWords[0] && relatedWords[0].slice(0, Number(numberOfWords)).map((word, index) => {
            return (
              <Accordion.Item key={`${word[1]}-${index}`} eventKey={`${word[1]}-${index}`}>
                <Accordion.Header onClick={() => document.querySelectorAll(styles.scroll).forEach(element => element.scroll({top: 0})) } >
                  {word[1]}
                </Accordion.Header>
                { word[3] ?
                  (
                    <Accordion.Body className={`${styles.scroll} text-start`} >
                      {word[3].map((def, index) => <li key={index}><span className="fst-italic">{def[0]}</span> - {def[1]}</li>)}
                    </Accordion.Body>
                  )
                  :
                  ( 
                    <Accordion.Body className={`${styles.scroll} text-start`} >
                      {wordDictionary[word[1]] && wordDictionary[word[1]]["definitions"].map((def, index) => <li key={index}><span className="fst-italic">{def[0]}</span> - {def[1]}</li>)}
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
