/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import { Button, Modal } from 'react-bootstrap'

const AddBlogPost = props => (
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
      <input type="text" placeholder="Enter title" />
      <input type="text" placeholder="Enter image url" />
      <input type="text" placeholder="Enter Description" />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="success" onClick={props.onHide}>Save</Button>
      <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
    </Modal.Footer>
  </Modal>
)

export default AddBlogPost
