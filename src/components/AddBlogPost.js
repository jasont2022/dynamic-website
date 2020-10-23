/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button, Modal } from 'react-bootstrap'

const AddBlogPost = props => {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
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
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            props.addpost(title, img, desc)
            props.onHide()
          }}
        >
          Save
        </Button>
        <Button
          variant="secondary"
          style={{ marginLeft: '1rem' }}
          onClick={props.onHide}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddBlogPost
