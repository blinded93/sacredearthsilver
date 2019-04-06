export function getItems() {
  return dispatch => {
    dispatch({ type: 'LOADING_ITEMS' })

    return fetch('/api/items')
      .then(resp => resp.json())
      .then(items => dispatch({ type: 'GET_ITEMS', items }))
  }
}