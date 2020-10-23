/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'
import BlogPost from './BlogPost'
import AddBlogPost from './AddBlogPost'

/*
const BlogPosts = ({ posts }) => (
  <div>
    <h1>Blog Posts</h1>
    {posts.map(post => <BlogPost {...post} />)}
    <button type="button">Add Post</button>
  </div>
)
*/

const BlogPosts = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      <h1>Blog Posts</h1>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Add Post
      </Button>
      <AddBlogPost
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

// dispatch & state
export default BlogPosts
