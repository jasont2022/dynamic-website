/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

const AddBlogPost = props => {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>
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
            props.addpost(title, img, desc)
            props.onHide()
          }}
        >
          Save
        </Button>
        <Button
          variant="secondary"
          style={{ marginLeft: '1rem', marginTop: '1rem' }}
          onClick={props.onHide}
        >
          Cancel
        </Button>
      </Modal.Body>
    </Modal>
  )
}

export default AddBlogPost
