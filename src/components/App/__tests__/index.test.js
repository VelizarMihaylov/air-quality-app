import React from 'react'
import { create } from 'react-test-renderer'
import { App } from '../'
import { Provider } from 'react-redux'

import store from 'state'


describe('App', () => {
  it('should render without throwing an error', () => {
    const AppRender = create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(AppRender).toMatchSnapshot()
  })
})
