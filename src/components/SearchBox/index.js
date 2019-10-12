import React from 'react'
import withFetch from 'effects/fetch'
import { connect } from 'react-redux'

import MagnifyingGlassIcon from './icon/MagnifyingGlassIcon'
import './index.scss'

const handleOnSelect = (cities, dispatch) => event => (
  cities.find(city => city.name === event.target.value) && dispatch({ type: 'ADD_CITY', payload: event.target.value })
)

const SearchBox = ({
  loading,
  error,
  data,
  dispatch
}) => {
  if (loading) return (<h1>Loading</h1>)
  if (error) return (<h1>Oops something went wrong!</h1>)
  const { results: cities } = data
  return (
    <>
      <form className='SearchBox'>
        <MagnifyingGlassIcon className='SearchBox--icon__magnifyingGlass' />
        <input
          className='SearchBox--input'
          autoComplete='off'
          list='cities'
          name='cities'
          placeholder='Enter city name...'
          onSelect={handleOnSelect(cities, dispatch)}
        />
        <datalist id='cities'>
          {cities.map(({ name, i }) => (<option key={`${i}-${name}`} value={name} />))}
        </datalist>
      </form>
    </>
  )
}

export default connect()(withFetch(SearchBox))
