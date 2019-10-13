import React from 'react'
import useFetch from './useFetch'

/*
    ****** withFetch Higher Order Component ******

  This is an attempt to centralize all fetch side effects.
  If a component depends on some external data from
  third party API you should be able to wrap it with withFetch,
  and not worry about handling the logic around that in your component

  An example use:
  javascript```
  // The wrapped component will automatically receive
  // loading, error and data props
  // those will represent all possible stages of the fetch
  const MyAwesomeComponent = ({ loading, error, data, ...props}) => ...

  // Wrap the component with withFetch before exporting it
  export default withFetch(MyAwesomeComponent)

  //Then when you use the component all you need to do is passing url prop
  <MyAwesomeComponent url='https://someaowsomeapi.com' />
  // Or render conditionally based on query param
  {postId && <MyAwesomeComponent url=`https://someaowsomeapi.com/post?id=${postId}` />}
  ```
*/


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
