import React from 'react'
import './index.scss'
import { connect } from 'react-redux'

import SearchBox from 'components/SearchBox'
import ListLocations from 'components/ListLocations'
import { withConfig } from 'context/config'

export const App = ({
  city,
  config: {
    apiEndpoint
  }
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
          url={`${apiEndpoint}cities?country=GB`}
        />
      </div>
      <div>
        {city && <ListLocations url={`${apiEndpoint}latest?city=${city}&country=GB`} />}
      </div>
    </div>
  )
}


export default connect(({ city }) => ({ city }))(withConfig(App))
