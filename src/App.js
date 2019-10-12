import React from 'react'
import SearchBox from 'components/SearchBox'
import 'App.scss'
import { Provider } from 'react-redux'
import store from 'state'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Compare Your Air</h1>
        <p className='App--p--intro'>
        Compare the air quality between cities in the UK.
          <br />
        Select cities to compare using the search tool below.
        </p>
        <SearchBox
          url='https://api.openaq.org/v1/cities?country=GB'
        />
      </div>
    </Provider>
  )
}

export default App
