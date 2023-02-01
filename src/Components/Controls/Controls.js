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

  return (
    <Row className="mt-4" >
      <Col sm={6}>
        <Form className="mb-3">
          <Form.Label as='h3'>Select word set: </Form.Label>
          <div className="flex">
            <Form.Check 
              onChange={() => dispatch(toggleEasy())} 
              checked={includeEasy} 
              className="text-success label-width"
              type='checkbox'
              label={<b>Most common</b>} />
            <Form.Check 
              onChange={() => dispatch(toggleMed())} 
              checked={includeMed} 
              className="text-warning label-width" 
              type={'checkbox'} 
              label={<b>Very common</b>} />
            <Form.Check 
              onChange={() => dispatch(toggleHard())} 
              checked={includeHard} 
              className="text-danger label-width" 
              type={'checkbox'} 
              label={<b>Pretty common</b>} />
          </div>
          <p
            className={`feedback text-danger ${includeEasy || includeMed || includeHard ? 'none' : 'block'}`}>
              &gt;Please select at least one set.</p>
        </Form>
      </Col>
      <Col sm={6}>
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
            {numOfRestrictedWords === '1' ? <p className="pt-1"><b>{numOfRestrictedWords} restricted word</b></p> : <p className="pt-1"><b>{numOfRestrictedWords} restricted words</b></p>}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}