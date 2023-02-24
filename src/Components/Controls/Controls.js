import React from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleEasy, toggleMed, toggleHard, changeLanguage, changeNumOfRestrictedWords, selectNumOfRestrictedWords, selectSupportedLanguages, selectIncludeEasy, selectIncludeHard, selectIncludeMed } from "./ControlSlice";

export function Controls() {
  const dispatch = useDispatch();
  const numOfRestrictedWords = useSelector(selectNumOfRestrictedWords);
  const includeEasy = useSelector(selectIncludeEasy);
  const includeMed = useSelector(selectIncludeMed);
  const includeHard = useSelector(selectIncludeHard);
  const supportedLanguages = useSelector(selectSupportedLanguages);

  const displayNumOfRestrictedWords = numOfRestrictedWords === '1' ? 'restricted word' : 'restricted words';

  const disableButton = (type) => {
    //this prevents the user from unselecting all the word sets
    if (type === 'Easy' && includeEasy && !includeMed && !includeHard) {
      return true;
    } else if (type === 'Med' && includeMed && !includeEasy && !includeHard) {
      return true;
    } else if (type === 'Hard' && includeHard && !includeEasy && !includeMed) {
      return true;
    } else {
      return false;
    }
  }

  const difficultyButtonProperties = [
    ['Easy', toggleEasy, 'success', includeEasy, 'Common'], 
    ['Med', toggleMed, 'warning', includeMed, 'Uncommon'], 
    ['Hard', toggleHard, 'danger', includeHard, 'Rare']
  ];

  return (
    <Container>
      <Row className="mt-4" >
        <Col md={6}>
          <Form className="mb-3">
            <fieldset>
              <legend className="control-title">Select at least one word set: </legend>
                {difficultyButtonProperties.map(([difficulty, toggleFn, buttonStyle, isChecked, setDescription]) => {
                  return (<Form.Check 
                            type='checkbox'
                            label={`${setDescription}`}
                            onChange={() => dispatch(toggleFn())}
                            checked={isChecked}
                            className={`text-${buttonStyle} label-width bold`}
                            disabled={disableButton(difficulty)}
                            inline
                            key={difficulty}
                            id={difficulty}
                            />);
                })}
            </fieldset>
          </Form>
        </Col>
        <Col md={6}>
          <h3 className="control-title">How many restricted words?</h3>
          <Row className="pt-1">
            <Col>
              <label htmlFor="easier" className="float-left">Easier</label>
              <input 
                type='range'
                min='0'
                max='5'
                onChange={(e) => dispatch(changeNumOfRestrictedWords(e.target.value))}
                value={numOfRestrictedWords}
                className="mx-3"
              />
              <label htmlFor="" className="float-right">Harder</label>
              <p className="pt-1 bold">{numOfRestrictedWords} {displayNumOfRestrictedWords}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Select aria-label="language-selector" onChange={e => dispatch(changeLanguage(e.target.value))}>
            <option>Select a language</option>
            {Object.keys(supportedLanguages).map(language => {
              return (<option key={language} value={language}>{language}</option>
              )
            })}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}
