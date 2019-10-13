import React from 'react'
import { create } from 'react-test-renderer'
import { withFetch } from '../'

import useFetch from '../useFetch'
jest.mock('../useFetch')

describe('useFetch', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const url = 'https://someaowsomeapi.com'
  const Component = props => <div {...props} />
  it('should throw an error when WrappedComponent gets rendered without an url prop set on it', () => {
    // This test will throw an error
    // This is expected behaviour and by spying on the console.error
    // we are suppressing logging the error for this test in the terminal
    // This will make the test results easier to read
    // since we are not overloading the output with unnecessary data
    jest.spyOn(console, 'error').mockImplementation(() => null)
    const WrappedComponent = withFetch(Component)
    expect(() => { create(<WrappedComponent url={undefined} />) }).toThrow()
  })
  it('should call useFetch with url when WrappedComponent gets rendered with an url prop set on it', () => {
    useFetch.mockImplementation(() => jest.fn())
    const WrappedComponent = withFetch(Component)
    create(<WrappedComponent url={url} />)
    expect(useFetch).toHaveBeenCalledWith(url)
  })
  it('should pass loading prop to WrappedComponent', () => {
    useFetch.mockImplementation(() => ({
      loading: false
    }))
    const WrappedComponent = withFetch(Component)
    const instance = create(<WrappedComponent url={url} />)
      .root
      .find(element => element.type === 'div')
    expect(instance.props.loading).toBe(false)
  })
  it('should pass error prop to WrappedComponent', () => {
    useFetch.mockImplementation(() => ({
      error: true
    }))
    const WrappedComponent = withFetch(Component)
    const instance = create(<WrappedComponent url={url} />)
      .root
      .find(element => element.type === 'div')
    expect(instance.props.error).toBe(true)
  })
  it('should pass data prop to WrappedComponent', () => {
    useFetch.mockImplementation(() => ({
      data: {
        test: 'I have data'
      }
    }))
    const WrappedComponent = withFetch(Component)
    const instance = create(<WrappedComponent url={url} />)
      .root
      .find(element => element.type === 'div')
    expect(instance.props.data).toEqual({
      test: 'I have data'
    })
  })
})
