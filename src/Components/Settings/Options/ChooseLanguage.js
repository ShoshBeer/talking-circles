import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import { changeLanguage, selectSupportedLanguages, selectLanguage } from '../ControlSlice'
import styles from '../Controls.module.css'

export function ChooseLanguage() {
  const dispatch = useDispatch()
  const supportedLanguages = useSelector(selectSupportedLanguages)
  const currentLanguage = useSelector(selectLanguage)

  return (
    <>
      <h3 className={styles['control-title']}>Choose a language</h3>
      <Form.Select defaultValue={currentLanguage[0]} aria-label='language-selector' onChange={e => dispatch(changeLanguage(e.target.value))}>
        {Object.keys(supportedLanguages).map(language => {
          return (<option key={language} value={language}>{language}</option>
          )
        })}
      </Form.Select>
    </>
  )
}