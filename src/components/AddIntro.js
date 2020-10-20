/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'

const AddIntro = () => (
  <div>
    <input type="text" placeholder="enter image url" />
    <input type="text" placeholder="enter description" />
    <Button type="button">Save</Button>
    <Button type="button">Cancel</Button>
  </div>
)

export default AddIntro
