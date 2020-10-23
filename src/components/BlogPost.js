/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const BlogPost = ({
  title, id, image, description, editPost, deletePost,
}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState(title)
  const [img, setImg] = useState(image)
  const [desc, setDesc] = useState(description)

  if (isEdit) {
    return (
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={name}
              onChange={e => setName(e.target.value)}
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
            onClick={() => {
              editPost(name, id, img, desc)
              setIsEdit(false)
            }}
          >
            Save
          </Button>
          <Button
            variant="secondary"
            style={{ marginLeft: '1rem' }}
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            style={{ marginTop: '1rem', width: '100%' }}
            onClick={() => deletePost(id)}
          >
            Delete Post
          </Button>
        </Card.Body>
      </Card>
    )
  }
  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Post #{id}: {title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="warning" onClick={() => setIsEdit(true)}>Edit Post</Button>
      </Card.Body>
    </Card>
  )
}

export default BlogPost
