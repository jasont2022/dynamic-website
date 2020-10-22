/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'

const FormWrapper = s.div`

`

const AddIntro = ({
  setIsEdit, image, description, modifyIntro,
}) => {
  const [img, setImg] = useState(image)
  const [desc, setDesc] = useState(description)

  return (
    <FormWrapper>
      <input
        type="text"
        placeholder="Enter image url"
        value={img}
        onChange={e => setImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <Button
        variant="success"
        onClick={() => {
          modifyIntro(img, desc)
          setIsEdit
        }}
      >
        Save
      </Button>
      <Button
        variant="secondary"
        style={{ marginLeft: '1rem' }}
        onClick={setIsEdit}
      >
        Cancel
      </Button>
    </FormWrapper>
  )
}

export default AddIntro
