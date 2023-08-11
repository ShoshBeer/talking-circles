import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import { changeTimeLimit, selectTimeLimit } from '../ControlSlice'
import styles from '../Controls.module.css'

export function ChooseTimeLimit () {
  const dispatch = useDispatch()
  const timeLimit = useSelector(selectTimeLimit)

  const handleTimeLimit = (newLimit) => {
    dispatch(changeTimeLimit(newLimit))
  }

  const timeLimitOptions = [[30, '30 seconds'], [60, '1 minute'], [120, '2 minutes'], [0, 'No limit']]

  return (
    <>
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
    </>
  )
}