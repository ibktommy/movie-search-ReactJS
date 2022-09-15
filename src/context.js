import useFetch from './utils/useFetch'
import React, { useContext, useState } from 'react'

export const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // Setting State Values in Context
  const [searchTerm, setSearchTerm] = useState('avengers')
  const { isLoading, error, movieData: movies } = useFetch(`&s=${searchTerm}`)

  return (
    <AppContext.Provider value={{
      isLoading,
      error,
      movies,
      searchTerm,
      setSearchTerm
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

