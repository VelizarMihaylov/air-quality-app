import React from 'react'
import { create } from 'react-test-renderer'
import { App } from '../'
import { Provider } from 'react-redux'

import store from 'state'


describe('App', () => {
  it('should render without throwing an error', () => {
    const AppRender = create(
      <Provider store={store}>
        <App
          config={{
            apiEndpoint: 'https://reallycoolapi.com/v1'
          }}
          city={null}
        />
      </Provider>
    )
    expect(AppRender).toMatchSnapshot()
  })
})
