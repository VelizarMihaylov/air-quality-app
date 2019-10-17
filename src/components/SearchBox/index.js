import React, { useState } from 'react'
import withFetch from 'effects/fetch'
import { connect } from 'react-redux'

import MagnifyingGlassIcon from './icon/MagnifyingGlassIcon'
import './index.scss'

export const SearchBox = ({
  loading,
  error,
  data,
  dispatch
}) => {
  const [dataList, setDataList] = useState([])
  const [selection, setSelection] = useState('')
  const [showList, setShowList] = useState(false)
  if (error) return (<h1>Oops something went wrong!</h1>)
  const { results: cities } = data || { results: [] }
  return (
    <div className='SearchBox'>
      <form className='SearchBox--form'>
        {loading ? <div className='SearchBox--icon__spinner' /> : <MagnifyingGlassIcon className='SearchBox--icon__magnifyingGlass' />}
        <input
          disabled={loading}
          className='SearchBox--input'
          autoComplete='off'
          name='cities'
          placeholder={loading ? undefined : 'Enter city name...'}
          onChange={event => {
            setDataList(cities.filter(({ name }) => name.match(RegExp(event.target.value, 'i'))))
            setSelection(event.target.value)
          }}
          onBlur={event => setShowList(false)}
          onFocus={event => {
            if (!dataList.length) setDataList(cities)
            setShowList(true)
          }}
          value={selection}
        />
      </form>
      <ul
        className='SearchBox--datalist'
        style={{
          display: showList ? 'block' : 'none'
        }}
      >
        {dataList.map(({ name }) =>
          <li
            key={name}
            onMouseDown={event => {
              setSelection(name)
              dispatch({ type: 'ADD_CITY', payload: name })
            }}
          >{name}
          </li>
        )}
      </ul>
    </div>
  )
}

export default connect()(withFetch(SearchBox))
