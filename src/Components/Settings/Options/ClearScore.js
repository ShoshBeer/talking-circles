import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearScore, selectPass, selectFail } from '../../Play/Game/GameSlice'
import styles from '../Controls.module.css'

export function ClearScore () {
  const dispatch = useDispatch()
  const pass = useSelector(selectPass)
  const fail = useSelector(selectFail)

  return (
    <>
      <h3 className={styles['control-title']}>Clear Score History</h3>
      <Button
        disabled={!!(pass.length === 0 && fail.length === 0)}
        variant='outline-danger'
        onClick={() => dispatch(clearScore())}
      >Clear
      </Button>
    </>
  )
}