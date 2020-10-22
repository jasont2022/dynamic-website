const posts = (state = [], action) => {
  const {
    type, title, id, image, description,
  } = action
  switch (type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          title, id, image, description,
        },
      ]
    case 'EDIT_POST':
      return state.map(post => ((post.id === id) ? { title, image, description } : post))
    case 'DELETE_POST':
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default posts
