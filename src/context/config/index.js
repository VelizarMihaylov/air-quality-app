import React, { createContext } from 'react'

const ConfigContext = createContext()

export const ConfigProvider = ({ config, children }) => (
  <ConfigContext.Provider value={config}>
    {children}
  </ConfigContext.Provider>
)

export const withConfig = WrappedComponent => props => (
  <ConfigContext.Consumer>
    {config => <WrappedComponent {...props} config={config} />}
  </ConfigContext.Consumer>
)
