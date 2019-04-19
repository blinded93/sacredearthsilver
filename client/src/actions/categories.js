export function getCategories() {
  return dispatch => {
    dispatch({ type: 'LOADING_CATEGORIES' })

    return fetch('/api/categories')
      .then(resp => resp.json())
      .then(categories => dispatch({ type: 'GET_CATEGORIES', categories }))
  }
}