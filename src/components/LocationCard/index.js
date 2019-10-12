import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import { connect } from 'react-redux'

import CloseIcon from './icon/CloseIcon'
import './index.scss'

const LocationCard = ({
  city,
  location,
  measurements,
  dispatch
}) => {
  dayjs.extend(utc)
  dayjs.extend(relativeTime)
  const { lastUpdated } = measurements.reduce((acc, measurement) => ({ lastUpdated: !acc.lastUpdated && measurement.lastUpdated }), {})
  const values = measurements.map(measurement => measurement && `${measurement.parameter.toUpperCase()}: ${measurement.value}`).join(', ')
  return (
    <div className='LocationCard'>
      <CloseIcon className='LocationCard--icon__close' onClick={() => dispatch({ type: 'REMOVE_LOCATION', payload: location })} />
      <div className='LocationCard--content'>
        <p className='LocationCard--content--updatedAt'>{`Updated ${dayjs(lastUpdated).utc().fromNow()}`}</p>
        <h3>{location}</h3>
        <p>{`in ${city}, United Kingdom`}</p>
        <p className='LocationCard--content--values'>{`Value: ${values}`}</p>
      </div>
    </div>
  )
}

export default connect()(LocationCard)
