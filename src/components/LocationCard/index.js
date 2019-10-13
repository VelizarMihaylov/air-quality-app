import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { connect } from 'react-redux'

import CloseIcon from './icon/CloseIcon'
import './index.scss'

export const LocationCard = ({
  city,
  location,
  measurements,
  dispatch
}) => {
  dayjs.extend(utc)
  dayjs.extend(relativeTime)
  dayjs.extend(customParseFormat)
  const updatedAt = measurements.reduce((acc, measurement) => {
    if (acc.length < 1 && measurement.lastUpdated) {
      const { lastUpdated } = measurement
      const year = lastUpdated.split('T')[0]
      const time = lastUpdated.split('T')[1].split(':')
      acc = `${year.replace(/-/g, '/')} ${time[0]}:${time[1]}`
    }
    return acc
  }, '')
  const values = measurements.map(measurement => measurement && `${measurement.parameter.toUpperCase()}: ${measurement.value}`).join(', ')
  return (
    <div className='LocationCard'>
      <CloseIcon className='LocationCard--icon__close' onClick={() => dispatch({ type: 'REMOVE_LOCATION', payload: location })} />
      <div className='LocationCard--content'>
        <p className='LocationCard--content--updatedAt'>{`Updated ${dayjs(updatedAt).utc().fromNow()}`}</p>
        <h3>{location}</h3>
        <p>{`in ${city}, United Kingdom`}</p>
        <p className='LocationCard--content--values'>{`Value: ${values}`}</p>
      </div>
    </div>
  )
}

export default connect()(LocationCard)
