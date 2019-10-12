import {
  dataFetchReducer,
  fetchData
} from '../useFetch'

describe('dataFetchReducer', () => {
  const initialState = {
    loading: true,
    data: null,
    error: false
  }
  it('should throw an error if called with no matching action type', () => {
    expect(() => { dataFetchReducer(initialState, { type: 'INVALID_ACTION', payload: 'test' }) }).toThrow()
  })
  it('should update the store with loading equal to true when called with FETCH_INIT action', () => {
    expect(dataFetchReducer(initialState, { type: 'FETCH_INIT' })).toEqual({
      loading: true,
      data: null,
      error: false
    })
  })
  it('should set the loading to false and update the store with data when called with FETCH_SUCCESS action and payload', () => {
    const payload = {
      test: 'I have data'
    }
    expect(dataFetchReducer(initialState, { type: 'FETCH_SUCCESS', payload })).toEqual({
      loading: false,
      data: payload,
      error: false
    })
  })
  it('should set the error state to true in the store when called with FETCH_FAILURE action', () => {
    expect(dataFetchReducer(initialState, { type: 'FETCH_FAILURE' })).toEqual({
      loading: false,
      data: null,
      error: true
    })
  })
})

describe('fetchData', () => {
  const fetch = (url) => new Promise((resolve, reject) => (
    setTimeout(() => {
      resolve({
        json: () => ({
          test: 'I have data'
        })
      })
    }, 300)
  ))
  const url = 'https://cool-api.com'
  const dispatch = jest.fn()
  it('should dispatch a FETCH_INIT action when initialized', async () => {
    await fetchData(fetch)(url, dispatch)
    expect(dispatch).toHaveBeenCalledWith({ type: 'FETCH_INIT' })
  })
  it('should dispatch a FETCH_SUCCESS action with data payload if fetches data successfully', async () => {
    await fetchData(fetch)(url, dispatch)
    expect(dispatch).toHaveBeenCalledWith({ type: 'FETCH_SUCCESS', payload: { test: 'I have data' } })
  })
  it('should dispatch FETCH_FAILURE action with data payload if fetches data successfully', async () => {
    // This test will throw an error
    // This is expected behaviour and by spying on the console.log
    // we are suppressing logging the error for this test in the terminal
    // This will make the test results easier to read
    // since we are not overloading the output with unnecessary data
    jest.spyOn(console, 'log').mockImplementation(() => null)
    const fetchFail = (url) => { throw new Error() }
    await fetchData(fetchFail)(url, dispatch)
    expect(dispatch).toHaveBeenCalledWith({ type: 'FETCH_FAILURE' })
  })
})
