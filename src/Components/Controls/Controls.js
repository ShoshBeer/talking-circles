import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleEasy, toggleMed, toggleHard, changeNumOfRestrictedWords, selectNumOfRestrictedWords, selectIncludeEasy, selectIncludeHard, selectIncludeMed } from "./ControlSlice";

export function Controls() {
  const dispatch = useDispatch();
  const numOfRestrictedWords = useSelector(selectNumOfRestrictedWords);
  const includeEasy = useSelector(selectIncludeEasy);
  const includeMed = useSelector(selectIncludeMed);
  const includeHard = useSelector(selectIncludeHard);

  const displayNumOfRestrictedWords = numOfRestrictedWords === '1' ? 'restricted word' : 'restricted words';

  const disableButton = (type) => {
    //this prevents the user from unselecting all the word sets
    if (type === 'easy' && includeEasy && !includeMed && !includeHard) {
      return true;
    } else if (type === 'med' && includeMed && !includeEasy && !includeHard) {
      return true;
    } else if (type === 'hard' && includeHard && !includeEasy && !includeMed) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Row className="mt-4" >
      <Col md={6}>
        <Form className="mb-3">
          <Form.Label as='h3'>Select at least one word set: </Form.Label>
          <div className="flex">
            <Form.Check 
              onChange={() => dispatch(toggleEasy())} 
              checked={includeEasy} 
              className="text-success label-width"
              type='checkbox'
              disabled={disableButton('easy')}
              label={<p className="bold">Most common</p>} />
            <Form.Check 
              onChange={() => dispatch(toggleMed())} 
              checked={includeMed} 
              className="text-warning label-width" 
              type={'checkbox'}
              disabled={disableButton('med')} 
              label={<p className="bold">Very common</p>} />
            <Form.Check 
              onChange={() => dispatch(toggleHard())} 
              checked={includeHard} 
              className="text-danger label-width" 
              type={'checkbox'} 
              disabled={disableButton('hard')}
              label={<p className="bold">Pretty common</p>} />
          </div>
        </Form>
      </Col>
      <Col md={6}>
        <h3>How many restricted words?</h3>
        <Row className="pt-1">
          <Col>
            <label htmlFor="easier" className="float-left">Easier</label>
            <input 
              type='range'
              min='0'
              max='10'
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
  )
}