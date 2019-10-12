import { REMOVE_LOCATION, removeLocationAction } from '../actions'

describe('removeLocationAction', () => {
  it('should return payload', () => {
    expect(removeLocationAction('Manchester Piccadilly')).toEqual({
      type: REMOVE_LOCATION,
      payload: 'Manchester Piccadilly'
    })
  })
})
