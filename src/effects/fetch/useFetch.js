import { useReducer, useEffect } from 'react'

export const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      throw new Error()
  }
}

export const fetchData = fetch => async (url, dispatch) => {
  dispatch({ type: 'FETCH_INIT' })
  try {
    const result = await fetch(url)
    const data = await result.json()
    dispatch({ type: 'FETCH_SUCCESS', payload: data })
  } catch (error) {
    console.log('ERROR ', error)
    dispatch({ type: 'FETCH_FAILURE' })
  }
}

const useFetch = (url) => {
  const initialState = {
    loading: true,
    data: null,
    error: false
  }

  const [state, dispatch] = useReducer(dataFetchReducer, initialState)

  useEffect(() => {
    fetchData(fetch)(url, dispatch)
  }, [url])
  return state
}

export default useFetch
