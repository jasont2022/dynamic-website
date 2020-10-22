/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'

const FormWrapper = s.div`

`

const AddIntro = ({ onEditChange }) => {
  const input = ''

  return (
    <FormWrapper>
      <input type="text" placeholder="Enter image url" />
      <input type="text" placeholder="Enter Description" />
      <Button variant="success">Save</Button>
      <Button
        variant="secondary"
        style={{ marginLeft: '1rem' }}
        onClick={onEditChange}
      >
        Cancel
      </Button>
    </FormWrapper>
  )
}

// dispatch only

export default AddIntro
