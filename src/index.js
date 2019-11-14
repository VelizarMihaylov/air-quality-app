import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'state'
import config from 'config'

import App from './components/App'
import { ConfigProvider } from 'context/config'
import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from '@apollo/react-hooks'
import client from './graphql'


import './index.scss'

ReactDOM.render(
  <ApolloProvider client={client}>
    <ConfigProvider config={config}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
