export default function cart(state = {
  count: 0,
  items: []
}, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state.data, action.}

    default:
      return state
  }
}