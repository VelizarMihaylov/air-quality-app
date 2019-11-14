import React, { useEffect } from 'react'
import withFetch from 'effects/fetch'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import compose from 'lodash/fp/compose'

import LocationCard from 'components/LocationCard'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import './index.scss'

export const ListLocations = ({ loading, error, data }) => {
  const { city, locations } = useSelector(
    ({ city, locations }) => ({
      city,
      locations
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(
    () => {
      const { results } = data || { results: [] }
      dispatch({ type: 'ADD_LOCATIONS', payload: results })
    },
    [city, data, dispatch]
  )
  if (error) return <h1>Oops something went wrong!</h1>
  return (
    <div className='ListLocations'>
      {loading
        ? <div className='ListLocations--spinner' />
        : locations.map(({ city, location, lastUpdated, measurements }, i) =>
          <LocationCard
            key={`${location}-${i}`}
            city={city}
            location={location}
            lastUpdated={lastUpdated}
            measurements={measurements}
          />
        )}
    </div>
  )
}

export default compose(withFetch)(ListLocations)
