import React from 'react'
import { SearchBox } from '../index'
import { create, act } from 'react-test-renderer'

describe('SearchBox', () => {
  const data = {
    results: [
      {
        country: 'GB',
        name: 'London',
        city: 'London',
        count: 158120,
        locations: 3
      },
      {
        country: 'GB',
        name: 'Manchester',
        city: 'Manchester',
        count: 48890,
        locations: 1
      },
      {
        country: 'GB',
        name: 'Leeds',
        city: 'Leeds',
        count: 51077,
        locations: 1
      }
    ]
  }
  it('should handle loading state', () => {
    const SearchBoxRender = create(<SearchBox loading />).toJSON()
    expect(SearchBoxRender).toMatchSnapshot()
  })
  it('should handle error state', () => {
    const SearchBoxRender = create(<SearchBox error />).toJSON()
    expect(SearchBoxRender).toMatchSnapshot()
  })
  it('should list all cities options when onFocus event is triggered and data prop is set', () => {
    const SearchBoxRender = create(
      <SearchBox data={data} dispatch={jest.fn()} />
    )

    const input = SearchBoxRender.root.find(
      (element) => element.type === 'input'
    )

    act(() => {
      input.props.onFocus()
    })

    expect(
      SearchBoxRender.root.find((element) => element.type === 'ul').children
        .length
    ).toBe(3)
  })

  it('should dispatch ADD_CITY action when the city list is empty and onFocus action is triggered', () => {
    const SearchBoxRender = create(
      <SearchBox data={data} dispatch={jest.fn()} />
    )

    const input = SearchBoxRender.root.find(
      (element) => element.type === 'input'
    )

    act(() => {
      input.props.onFocus()
    })

    act(() => {
      SearchBoxRender.root
        .find((element) => element.type === 'ul')
        .children[0].props.onMouseDown()
    })

    expect(SearchBoxRender.root.props.dispatch).toHaveBeenCalledWith({
      type: 'ADD_CITY',
      payload: 'London'
    })
  })
})
