import React from 'react'

import CloseIcon from './icon/CloseIcon'
import './index.scss'

const LocationCard = ({
  location
}) => {
  return (
    <div className='LocationCard'>
      <CloseIcon className='LocationCard--icon__close' />
      <div className='LocationCard--content'>
        <p className='LocationCard--content--updatedAt'>Updated an hour ago</p>
        <h3>Manchester Piccadilly</h3>
        <p>in Manchester, United Kingdom</p>
        <p className='LocationCard--content--values'>Values: PM25: 9, S02: 32, O3: 8, NO2: 43</p>
      </div>
    </div>
  )
}

export default LocationCard
