import { Row, Col, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectIncludeEasy, selectIncludeHard, selectIncludeMed, selectWordDifficulty, selectLanguage, selectTimeLimit, setWordDifficulty } from '../../Settings/ControlSlice'
import { newTargetWord, addPass, addFail, selectTargetWord } from './GameSlice'
import { useEffect, useState } from 'react'
import { WordList } from '../WordList/WordList'
import { RollNewWord } from '../Helpers/RollNewWord'
import styles from './Game.module.css'

export function Game () {
  const dispatch = useDispatch()
  const targetWord = useSelector(selectTargetWord)
  const includeEasy = useSelector(selectIncludeEasy)
  const includeMed = useSelector(selectIncludeMed)
  const includeHard = useSelector(selectIncludeHard)
  const wordDifficulty = useSelector(selectWordDifficulty)
  const language = useSelector(selectLanguage)
  const timeLimit = Number(useSelector(selectTimeLimit))

  const wordDictionary = require(`../../../assets/${language[1]}_smooth_dict.json`)

  const [seconds, setSeconds] = useState(0)

  const handleNewWord = () => {
    const newWord = RollNewWord(wordDictionary, includeEasy, includeMed, includeHard)
    dispatch(setWordDifficulty(newWord[1]))
    dispatch(newTargetWord(newWord[0]))
  }

  const handleHit = () => {
    dispatch(addPass({ word: targetWord, time: seconds, difficulty: wordDifficulty }))
    handleNewWord()
  }

  const handleMiss = () => {
    dispatch(addFail({ word: targetWord, time: seconds, difficulty: wordDifficulty }))
    handleNewWord()
  }

  useEffect(() => {
    handleNewWord()
  }, [])

  useEffect(() => {
    setSeconds(0)
    const intervalID = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 1000)
    return () => clearInterval(intervalID)
  }, [targetWord])

  useEffect(() => {
    if (timeLimit !== 0 && seconds >= timeLimit) {
      handleMiss()
    }
  }, [seconds, timeLimit])

  const missingDifficultySelection = !(includeEasy || includeMed || includeHard)

  const buttonOptions = [
    [handleMiss, 'danger', 'Miss'], 
    [handleNewWord, 'secondary', 'Skip'], 
    [handleHit, 'success', 'Hit']
  ]

  return (
    <Container className='my-4'>
      <Row>
        <Col />
        <Col xs={12} sm={6}>
          {buttonOptions.map(([action, colour, label]) => <Button disabled={missingDifficultySelection} className={styles['word-change']} onClick={action} variant={`outline-${colour}`}>{label}</Button>)
          }
        </Col>
        <Col>
          <h4>Time: </h4>
          {seconds > 59 ? <h4>{Math.floor(seconds / 60)}m {seconds % 60}s</h4> : <h4>{seconds}s</h4>}
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md={6} lg={5}>
          <WordList />
        </Col>
      </Row>
    </Container>
  )
}
