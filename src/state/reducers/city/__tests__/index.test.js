import city from '../index'

describe('city', () => {
  const initialState = null
  it('should return the default state when called without matching action type', () => {
    expect(city(initialState, { type: 'INVALID_ACTION' })).toBe(null)
  })
  it('should update the state with a city when called with ADD_CITY action and payload', () => {
    expect(city(initialState, { type: 'ADD_CITY', payload: 'London' })).toBe('London')
  })
})
