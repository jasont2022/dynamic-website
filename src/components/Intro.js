/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'
import AddIntro from './AddIntro'

/*
const Intro = ({ imgUrl, description }) => (
  <div>
    <h1>Hey this is me!</h1>
    <img src={imgUrl} alt=" " />
    <p>{description}</p>
    <Button variant="warning">Edit</Button>
  </div>
)
*/

const Wrapper = s.div`

`

const Intro = () => (
  <Wrapper>
    <h1>Hey this is me!</h1>
    <Button variant="warning">Edit</Button>
  </Wrapper>
)

export default Intro
