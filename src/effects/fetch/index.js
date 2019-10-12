import React from 'react'
import useFetch from './useFetch'

export const withFetch = WrappedComponent => props => {
  const { url } = props
  if (!url || typeof url !== 'string') {
    throw new Error(`
    Invalid url provided to witFetch Higher Order Component.
    You've most probably forgot to set the url prop on component wrapped with withFetch.
    `)
  }
  const { loading, data, error } = useFetch(url)
  return (
    <WrappedComponent
      {...props}
      loading={loading}
      data={data}
      error={error}
    >
      {props.children}
    </WrappedComponent>
  )
}

export default withFetch
