import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNumOfRestrictedWords, selectNumOfRestrictedWords } from '../ControlSlice'
import styles from '../Controls.module.css'

export function ChooseRestriction () {
  const dispatch = useDispatch()
  const numOfRestrictedWords = useSelector(selectNumOfRestrictedWords)

  const displayNumOfRestrictedWords = numOfRestrictedWords === '1' ? 'restricted word' : 'restricted words'

  return (
    <>
      <h3 className={styles['control-title']}>How many restricted words?</h3>
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
    </>
  )
}
