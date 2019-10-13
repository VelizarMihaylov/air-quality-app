import React from 'react'
import { SearchBox } from '../index'
import { create } from 'react-test-renderer'

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
  it('should render search box with cities passed as datalist options when loading and error are unset and data prop is set', () => {
    const SearchBoxRender = create(<SearchBox data={data} />).toJSON()
    expect(SearchBoxRender).toMatchSnapshot()
  })
  it('should dispatch ADD_CITY action with payload onSelect event when data prop is set ', () => {
    const event = {
      target: {
        value: 'Manchester'
      }
    }
    const SearchBoxRender = create(<SearchBox data={data} dispatch={jest.fn()} />)
    const input = SearchBoxRender.root.find(element => element.type === 'input')
    input.props.onSelect(event)
    expect(SearchBoxRender.root.props.dispatch).toHaveBeenCalledWith({
      type: 'ADD_CITY',
      payload: 'Manchester'
    })
  })
})
