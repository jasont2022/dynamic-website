const defaultState = {
  image: '',
  description: '',
}

const intro = (state = defaultState, action) => {
  const { type, image, description } = action
  switch (type) {
    case 'EDIT_INTRO':
      return { image, description }
    default:
      return state
  }
}
