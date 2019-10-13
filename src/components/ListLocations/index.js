import React, { useEffect } from 'react'
import withFetch from '../../effects/fetch'
import { connect } from 'react-redux'

import LocationCard from 'components/LocationCard'

import './index.scss'

export const ListLocations = ({
  loading,
  error,
  data,
  locations,
  city,
  dispatch
}) => {
  useEffect(() => {
    const { results } = data || { results: [] }
    dispatch({ type: 'ADD_LOCATIONS', payload: results })
  }, [city, data, dispatch])
  if (error) return (<h1>Oops something went wrong!</h1>)
  return (
    <div className='ListLocations'>
      {loading
        ? <div className='ListLocations--spinner' />
        : locations.map(({
          city,
          location,
          lastUpdated,
          measurements
        }, i) => (
          <LocationCard
            key={`${location}-${i}`}
            city={city}
            location={location}
            lastUpdated={lastUpdated}
            measurements={measurements}
          />
        ))}
    </div>
  )
}

export default connect(({ locations, city }) => ({ locations }))(
  withFetch(ListLocations)
)

