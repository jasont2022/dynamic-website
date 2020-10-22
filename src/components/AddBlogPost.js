/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import { Button, Modal } from 'react-bootstrap'

const AddBlogPost = () => (
  <div>
    <input type="text" placeholder="Enter title" />
    <input type="text" placeholder="Enter image url" />
    <input type="text" placeholder="Enter Description" />
    <Button type="button">Save</Button>
    <Button type="button">Cancel</Button>
  </div>
)

// dont forget about id

// dispatch only

export default AddBlogPost
