/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editIntro } from '../actions'
import AddIntro from './AddIntro'

const IntroWrapper = s.div`
  margin: 5px;
  padding: 5px;
`

const Intro = ({
  image, description, dispatchEditIntro,
}) => {
  const [isEdit, setIsEdit] = useState(false)

  if (isEdit) {
    return (
      <IntroWrapper>
        <h1>Hey this is me!</h1>
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
      <h1>Hey this is me!</h1>
      <img src={image} alt="" />
      <p>
        {' '}
        {description}
        {' '}
      </p>
      <Button variant="warning" onClick={() => setIsEdit(true)}>Edit</Button>
    </IntroWrapper>
  )
}

// state
const mapStateToProps = ({ intro }) => intro

// dispatch
const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, description) => dispatch(editIntro(image, description)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
