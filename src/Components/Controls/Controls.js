import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { WordList } from "../WordList/WordList";
import { useDispatch, useSelector } from "react-redux";
import { toggleEasy, toggleMed, toggleHard, changeNumOfRestrictedWords, selectNumOfRestrictedWords, selectIncludeEasy, selectIncludeHard, selectIncludeMed } from "./ControlSlice";

export function Controls() {
  const dispatch = useDispatch();
  const numOfRestrictedWords = useSelector(selectNumOfRestrictedWords);
  const includeEasy = useSelector(selectIncludeEasy);
  const includeMed = useSelector(selectIncludeMed);
  const includeHard = useSelector(selectIncludeHard);

  return (
      <Row >
        <Col sm={3}>
          <h3>How to Play:</h3>
          <p>Get the other player(s) to say the word at the top of the card without saying any of the listed words or using any gestures.</p>
          <p>Click on any word to see its definition.</p>
          <p>Use the controls to choose how rare the target word can be and the number of restricted words.</p>
        </Col>
        <Col xs={12} sm={6} style={{maxWidth: '600px'}}>
          <WordList />
        </Col>
        <Col sm={3}>
          <Row >
            <Col>
              <Form>
                <Form.Label as='h3'>Select word set: </Form.Label>
                <Form.Check 
                  onChange={() => dispatch(toggleEasy())} 
                  checked={includeEasy} 
                  className="text-success"
                  type='checkbox'
                  label={<b>Most common</b>} />
                <Form.Check 
                  onChange={() => dispatch(toggleMed())} 
                  checked={includeMed} 
                  className="text-warning" 
                  type={'checkbox'} 
                  label={<b>Very common</b>} />
                <Form.Check 
                  onChange={() => dispatch(toggleHard())} 
                  checked={includeHard} 
                  className="text-danger" 
                  type={'checkbox'} 
                  label={<b>Pretty common</b>} />
              </Form>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <h3>Choose how many restricted words:</h3>
              <Row className="padding-top-10">
                <Col>
                  <label htmlFor="easier" className="float-left">Easier</label>
                  <label htmlFor="" className="float-right">Harder</label>
                  <input 
                    type='range'
                    min='0'
                    max='10'
                    onChange={(e) => dispatch(changeNumOfRestrictedWords(e.target.value))}
                    value={numOfRestrictedWords}
                  />
                  {numOfRestrictedWords === '1' ? <p className="padding-top-10"><b>{numOfRestrictedWords} restricted word</b></p> : <p className="padding-top-10"><b>{numOfRestrictedWords} restricted words</b></p>}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
  )
}