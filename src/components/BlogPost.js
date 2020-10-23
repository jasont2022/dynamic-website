/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'

/*
const BlogPost = ({ title, id, imgURL, description }) => (
  <div>
    <h2>Post #{id}{title}</h2>
    <img src={imgURL} alt=" " />
    <p>{description}</p>
    <button type="button">Edit</button>
  </div>
)
*/

const BlogPost = () => {
  return (
    <div>
      <h2>Post #</h2>
      <button type="button">Add Post</button>
    </div>
  )
}

export default BlogPost
