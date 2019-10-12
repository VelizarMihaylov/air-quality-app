import { REMOVE_LOCATION } from './actions'

const locations = (store = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATIONS':
      return action.payload
    case REMOVE_LOCATION:
      return [...store.filter(({ location }) => location !== action.payload)]
    default:
      return store
  }
}

export default locations
