import React from 'react'
import './index.scss'
import { connect } from 'react-redux'

import SearchBox from 'components/SearchBox'
import ListLocations from 'components/ListLocations'

const App = ({
  city
}) => {
  return (
    <div className='App'>
      <div>
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
      <div>
        {city && <ListLocations url={`https://api.openaq.org/v1/latest?city=${city}&country=GB`} />}
      </div>
    </div>
  )
}


export default connect(({ city }) => ({ city }))(App)
