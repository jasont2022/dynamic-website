/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
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

const BlogPosts = () => (
  <div>
    <h1>Blog Posts</h1>
    <button type="button">Add Post</button>
  </div>
)

export default BlogPosts
