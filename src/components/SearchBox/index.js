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
  if (error) return (<h1>Oops something went wrong!</h1>)
  const { results: cities } = data || { results: [] }
  return (
    <>
      <form className='SearchBox'>
        {loading ? <div className='SearchBox--icon__spinner' /> : <MagnifyingGlassIcon className='SearchBox--icon__magnifyingGlass' />}
        <input
          disabled={loading}
          className='SearchBox--input'
          autoComplete='off'
          list='cities'
          name='cities'
          placeholder={!loading && 'Enter city name...'}
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
