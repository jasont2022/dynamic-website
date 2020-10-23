/* eslint-disable no-plusplus */
let nextPostId = 1

// introduction actions
export const editIntro = (image, description) => ({
  type: 'EDIT_INTRO',
  image,
  description,
})

// blog posts actions
export const addPost = (title, image, description) => ({
  type: 'ADD_POST',
  title,
  id: nextPostId++,
  image,
  description,
})

export const editPost = (title, id, image, description) => ({
  type: 'EDIT_POST',
  title,
  id,
  image,
  description,
})

export const deletePost = id => ({
  type: 'DELETE_POST',
  id,
})
