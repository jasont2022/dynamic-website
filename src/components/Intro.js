/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'
import AddIntro from './AddIntro'

const IntroWrapper = s.div`
  margin: 5px;
  padding: 5px;
`

const Intro = () => {
  const [isEdit, setIsEdit] = useState(false)

  const handleEditChange = () => setIsEdit(!isEdit)

  if (isEdit) {
    return (
      <IntroWrapper>
        <h1>Hey this is me!</h1>
        <AddIntro onEditChange={() => handleEditChange()} />
      </IntroWrapper>
    )
  }
  return (
    <IntroWrapper>
      <h1>Hey this is me!</h1>
      <Button variant="warning" onClick={() => handleEditChange()}>Edit</Button>
    </IntroWrapper>
  )
}

// dispatch & state

export default Intro
