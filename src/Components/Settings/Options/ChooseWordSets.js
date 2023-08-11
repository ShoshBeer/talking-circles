import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, OverlayTrigger, Popover } from 'react-bootstrap'
import { toggleEasy, toggleMed, toggleHard, selectIncludeEasy, selectIncludeHard, selectIncludeMed } from '../ControlSlice'
import info from '../../../assets/info.png'
import styles from '../Controls.module.css'

export function ChooseWordSets () {
  const dispatch = useDispatch()
  const includeEasy = useSelector(selectIncludeEasy)
  const includeMed = useSelector(selectIncludeMed)
  const includeHard = useSelector(selectIncludeHard)

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

  return (
    <>
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
                className={`text-${buttonStyle} label-width fw-bold`}
                disabled={disableButton(difficulty)}
                inline
                key={difficulty}
                id={difficulty}
              />
            )
          })}
        </fieldset>
      </Form>
    </>
  )
}