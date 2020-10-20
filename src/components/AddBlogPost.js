/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'

const AddBlogPost = () => (
  <div>
    <input type="text" placeholder="enter title" />
    <input type="text" placeholder="enter image url" />
    <input type="text" placeholder="enter description" />
    <button type="button">Save</button>
    <button type="button">Cancel</button>
  </div>
)

export default AddBlogPost
