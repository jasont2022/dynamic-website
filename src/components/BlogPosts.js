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

const Title = s.h1`
  font-size: 48px;
  font-weight: 800;
  font-family: "Comic Sans MS", cursive, sans-serif;
  background: linear-gradient(to right, #00B4DB, #0083B0 40%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const PostsWrapper = s.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: minmax(300px, auto);
`

const BlogPosts = ({
  posts, dispatchAddPost, dispatchEditPost, dispatchDeletePost,
}) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      <Title>Blog Posts</Title>
      <PostsWrapper>
        {posts.map(post => (
          <BlogPost {...post}
            key={post.id}
            editPost={dispatchEditPost}
            deletePost={dispatchDeletePost}
          />
        ))}
      </PostsWrapper>
      <Button
        variant="primary"
        style={{ marginTop: '0.5rem' }}
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
