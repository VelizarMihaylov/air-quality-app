import React from 'react'
import { ListLocations } from '../index'
import { create, act } from 'react-test-renderer'
import { Provider } from 'react-redux'

import state from 'state'
import locations from '../__mocks__'

import dayjs from 'dayjs'
jest.mock('dayjs')

describe('ListLocations', () => {
  dayjs.mockImplementation(() => ({
    extend: jest.fn(),
    utc: () => ({
      fromNow: () => '5 hours ago'
    })
  }))

  it('should handle loading state', () => {
    const ListLocationsRender = create(<ListLocations loading dispatch={jest.fn()} locations={[]} />).toJSON()
    expect(ListLocationsRender).toMatchSnapshot()
  })
  it('should handle error state', () => {
    const ListLocationsRender = create(<ListLocations error dispatch={jest.fn()} locations={[]} />).toJSON()
    expect(ListLocationsRender).toMatchSnapshot()
  })
  it('should render locations when not in loading or error state and locations prop has length', () => {
    const ListLocationsRender = create(
      <Provider store={state}>
        <ListLocations
          dispatch={jest.fn()}
          data={null}
          city='Manchester'
          locations={locations}
        />
      </Provider>
    ).toJSON()
    expect(ListLocationsRender).toMatchSnapshot()
  })
  it('should render locations when not in loading or error state and locations prop has length', () => {
    const ListLocationsRender = create(
      <Provider store={state}>
        <ListLocations
          dispatch={jest.fn()}
          data={null}
          city='Manchester'
          locations={locations}
        />
      </Provider>
    ).toJSON()
    expect(ListLocationsRender).toMatchSnapshot()
  })
  it('should dispatch ADD_LOCATIONS action with the locations received as data when the city props is updated', () => {
    const ListLocationsRender = create(
      <Provider store={state}>
        <ListLocations
          key='test'
          dispatch={jest.fn()}
          data={null}
          city={null}
          locations={[]}
        />
      </Provider>
    )

    act(() => ListLocationsRender.update(
      <Provider store={state}>
        <ListLocations
          key='test'
          dispatch={jest.fn()}
          data={{ results: locations }}
          city='Manchester'
          locations={[]}
        />
      </Provider>
    ))
    expect(ListLocationsRender.root.props.children.props.dispatch).toHaveBeenCalledWith({
      type: 'ADD_LOCATIONS',
      payload: locations
    })
  })
})
