const city = (store = null, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return action.payload
    default:
      return store
  }
}

export default city
