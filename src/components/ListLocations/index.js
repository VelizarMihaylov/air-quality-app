import React, { useEffect } from 'react'
import withFetch from '../../effects/fetch'
import { connect } from 'react-redux'

import LocationCard from 'components/LocationCard'

import './index.scss'

const ListLocations = ({
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
  if (loading) return (<h1>Loading</h1>)
  if (error) return (<h1>Oops something went wrong!</h1>)
  return locations.map(({ location }, i) => (<h1 key={`${location}-${i}`} onClick={() => dispatch({ type: 'REMOVE_LOCATION', payload: location })}>{location}</h1>))
}

export default connect(({ locations, city }) => ({ locations }))(
  withFetch(ListLocations)
)

