/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button, Form } from 'react-bootstrap'

const AddIntro = ({
  setIsEdit, image, description, modifyIntro,
}) => {
  const [img, setImg] = useState(image)
  const [desc, setDesc] = useState(description)

  return (
    <Form style={{ marginTop: '3em' }}>
      <Form.Group controlId="formBasicImgUrl">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image url"
          value={img}
          onChange={e => setImg(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="success"
        style={{ marginTop: '1rem' }}
        onClick={() => {
          modifyIntro(img, desc)
          setIsEdit()
        }}
      >
        Save
      </Button>
      <Button
        variant="secondary"
        style={{ marginLeft: '1rem', marginTop: '1rem' }}
        onClick={setIsEdit}
      >
        Cancel
      </Button>
    </Form>
  )
}

export default AddIntro
