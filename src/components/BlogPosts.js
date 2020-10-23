/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPost, editPost, deletePost } from '../actions'
import BlogPost from './BlogPost'
import AddBlogPost from './AddBlogPost'

const BlogPosts = ({
  posts, dispatchAddPost, dispatchEditPost, dispatchDeletePost,
}) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <BlogPost {...post}
          key={post.id}
          editPost={dispatchEditPost}
          deletePost={dispatchDeletePost}
        />
      ))}
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Add Post
      </Button>
      <AddBlogPost
        show={modalShow}
        addpost={dispatchAddPost}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, image, description) => dispatch(addPost(title, image, description)),
  dispatchEditPost:
    (title, id, image, description) => dispatch(editPost(title, id, image, description)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogPosts)
