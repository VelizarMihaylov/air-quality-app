import React from 'react'
import { create } from 'react-test-renderer'
import MagnifyingGlassIcon from '../MagnifyingGlassIcon'

describe('MagnifyingGlassIcon', () => {
  it('should render without error', () => {
    const Component = create(<MagnifyingGlassIcon />)
    expect(Component.toJSON()).toMatchSnapshot()
  })
})
