import React, { useContext } from 'react'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

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

