import React, { useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={'hello'}>
      {children}
    </AppContext.Provider>
  )
}

export const UseGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

