/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'

const BlogPost = ({
  title, id, imgURL, description, editPost, deletePost,
}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState(title)
  const [img, setImg] = useState(imgURL)
  const [desc, setDesc] = useState(description)

  if (isEdit) {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter title"
          value={name}
          onChange={e => setName(e.target.value)}
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
        <Button variant="danger" onClick={() => deletePost(id)}>Delete Post</Button>
      </div>
    )
  }
  return (
    <div>
      <h2>Post #{id}: {title}</h2>
      <img src={imgURL} alt=" " />
      <p>{description}</p>
      <Button variant="warning" onClick={() => setIsEdit(true)}>Edit Post</Button>
    </div>
  )
}

export default BlogPost
