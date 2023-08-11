import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { ChooseRestriction } from './Options/ChooseRestriction'
import { ChooseLanguage } from './Options/ChooseLanguage'
import { ChooseWordSets } from './Options/ChooseWordSets'
import { ChooseTimeLimit } from './Options/ChooseTimeLimit'
import { ClearScore } from './Options/ClearScore'

export function Controls () {

  return (
    <Container>
      <Row className='mt-4'>
        <Col md={6}>
          <ChooseWordSets />
        </Col>
        <Col md={6}>
          <ChooseRestriction />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col md={6}>
          <ChooseLanguage />
        </Col>
        <Col>
          <ChooseTimeLimit />
        </Col>
      </Row>
      <Row className='my-4'>
        <Col>
          <ClearScore />
        </Col>
      </Row>
    </Container>
  )
}
