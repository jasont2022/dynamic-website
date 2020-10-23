/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import Intro from './Intro'
import BlogPosts from './BlogPosts'

const Container = s.div`
  width: 80%;
  box-sizing: border-box;
  margin: 20px auto;
`

const App = () => (
  <Container>
    <Intro />
    <BlogPosts />
  </Container>
)

export default App
