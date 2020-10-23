/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editIntro } from '../actions'
import AddIntro from './AddIntro'

const IntroWrapper = s.div`
  margin: 10px 0px 40px 0px;
`
const Title = s.h1`
  font-size: 48px;
  font-weight: 800;
  font-family: "Comic Sans MS", cursive, sans-serif;
  background: linear-gradient(to right, #de6262, #ff9671, #ffb88c 37%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Img = s(Image)`
  width: 300px;
  hieght: 300px;
  border-radius: 5%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`

const Intro = ({ image, description, dispatchEditIntro }) => {
  const [isEdit, setIsEdit] = useState(false)

  if (isEdit) {
    return (
      <IntroWrapper>
        <Title>Hey this is Jason!</Title>
        <AddIntro
          setIsEdit={() => setIsEdit(false)}
          image={image}
          description={description}
          modifyIntro={dispatchEditIntro}
        />
      </IntroWrapper>
    )
  }
  return (
    <IntroWrapper>
      <Title>Hey this is Jason!</Title>
      <Img src={image} rounded />
      <p>{description}</p>
      <Button variant="warning" onClick={() => setIsEdit(true)}>Edit</Button>
    </IntroWrapper>
  )
}

const mapStateToProps = ({ intro }) => intro

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, description) => dispatch(editIntro(image, description)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
