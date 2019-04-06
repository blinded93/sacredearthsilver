export default function items(state = {
  loading: false,
  data: []
}, action) {
  switch (action.type) {
    case 'LOADING_ITEMS':
      return { ...state, loading: true }

    case 'GET_ITEMS':
      return { loading: false, data: action.items.data }

    default:
      return state
  }
}