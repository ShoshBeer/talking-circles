import React from 'react'
import { Row, Col, Form, Container, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEasy, toggleMed, toggleHard, changeLanguage, changeNumOfRestrictedWords, changeTimeLimit, selectTimeLimit, selectNumOfRestrictedWords, selectSupportedLanguages, selectLanguage, selectIncludeEasy, selectIncludeHard, selectIncludeMed } from './ControlSlice'
import { clearScore, selectPass, selectFail } from '../Game/GameSlice'
import info from '../../assets/info.png'
import styles from './Controls.module.css'

export function Controls () {
  const dispatch = useDispatch()
  const numOfRestrictedWords = useSelector(selectNumOfRestrictedWords)
  const includeEasy = useSelector(selectIncludeEasy)
  const includeMed = useSelector(selectIncludeMed)
  const includeHard = useSelector(selectIncludeHard)
  const supportedLanguages = useSelector(selectSupportedLanguages)
  const currentLanguage = useSelector(selectLanguage)
  const timeLimit = useSelector(selectTimeLimit)
  const pass = useSelector(selectPass)
  const fail = useSelector(selectFail)

  const displayNumOfRestrictedWords = numOfRestrictedWords === '1' ? 'restricted word' : 'restricted words'

  const disableButton = (type) => {
    // this prevents the user from unselecting all the word sets
    if (type === 'Easy' && includeEasy && !includeMed && !includeHard) {
      return true
    } else if (type === 'Med' && includeMed && !includeEasy && !includeHard) {
      return true
    } else if (type === 'Hard' && includeHard && !includeEasy && !includeMed) {
      return true
    } else {
      return false
    }
  }

  const difficultyButtonProperties = [
    ['Easy', toggleEasy, 'success', includeEasy, 'Common'],
    ['Med', toggleMed, 'warning', includeMed, 'Uncommon'],
    ['Hard', toggleHard, 'danger', includeHard, 'Rare']
  ]

  const handleTimeLimit = (newLimit) => {
    dispatch(changeTimeLimit(newLimit))
  }

  const timeLimitOptions = [[30, '30 seconds'], [60, '1 minute'], [120, '2 minutes'], [0, 'No limit']]

  return (
    <Container>
      <Row className='mt-4'>
        <Col md={6}>
          <Form className='mb-3'>
            <fieldset>
              <legend className={styles['control-title']}>
                Select at least one word set
                <OverlayTrigger
                  trigger={['focus', 'click']}
                  // --> Must click twice or hold down mouse to see tooltip. Potential fix described here: https://stackoverflow.com/questions/73119075/input-doesnt-get-focus-on-it-when-button-is-clicked
                  rootClose
                  placement='auto'
                  overlay={
                    <Popover id={styles['word-sets-info']}>
                      <ul>
                        <li><span className='text-success'>Common</span> words appear at least once per 10,000 words</li>
                        <li><span className='text-warning'>Uncommon</span> words appear at least once per 100,000 words</li>
                        <li><span className='text-danger'>Rare</span> words appear less than once per 100,000 words.</li>
                      </ul>
                    </Popover>
                  }
                >
                  <img src={info} alt='More info' className={styles['info-icon']} tabIndex={0} />
                </OverlayTrigger>
              </legend>
              {difficultyButtonProperties.map(([difficulty, toggleFn, buttonStyle, isChecked, setDescription]) => {
                return (
                  <Form.Check
                    type='checkbox'
                    label={`${setDescription}`}
                    onChange={() => dispatch(toggleFn())}
                    checked={isChecked}
                    className={`text-${buttonStyle} label-width bold`}
                    disabled={disableButton(difficulty)}
                    inline
                    key={difficulty}
                    id={difficulty}
                  />
                )
              })}
            </fieldset>
          </Form>
        </Col>
        <Col md={6}>
          <h3 className={styles['control-title']}>How many restricted words?</h3>
          <Row className='pt-1'>
            <Col>
              <label htmlFor='easier' className='float-left'>Easier</label>
              <input
                type='range'
                min='0'
                max='5'
                onChange={(e) => dispatch(changeNumOfRestrictedWords(e.target.value))}
                value={numOfRestrictedWords}
                className='mx-3'
              />
              <label htmlFor='' className='float-right'>Harder</label>
              <p className='pt-1 fw-bold'>{numOfRestrictedWords} {displayNumOfRestrictedWords}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col md={6}>
          <h3 className={styles['control-title']}>Choose a language</h3>
          <Form.Select defaultValue={currentLanguage[0]} aria-label='language-selector' onChange={e => dispatch(changeLanguage(e.target.value))}>
            {Object.keys(supportedLanguages).map(language => {
              return (<option key={language} value={language}>{language}</option>
              )
            })}
          </Form.Select>
        </Col>
        <Col>
          <h3 className={`${styles['control-title']} mt-4`}>Choose a time limit</h3>
          <Form>
            {timeLimitOptions.map(option => {
              return (
                <div key={option[0]}>
                  <Form.Check
                    checked={option[0] === Number(timeLimit)}
                    type='radio'
                    name='maxTime'
                    value={option[0]}
                    onChange={e => handleTimeLimit(e.target.value)}
                    inline
                    id={`${option[0]}`}
                    label={`${option[1]}`}
                  />
                </div>
              )
            })}
          </Form>
        </Col>
      </Row>
      <Row className='my-4'>
        <Col>
          <h3 className={styles['control-title']}>Clear Score History</h3>
          <Button
            disabled={!!(pass.length === 0 && fail.length === 0)}
            variant='outline-danger'
            onClick={() => dispatch(clearScore())}
          >Clear
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
