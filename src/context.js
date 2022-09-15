import React, { useContext, useState } from 'react'

export const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

console.log(apiUrl)

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // Setting State Values in Context
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, message: '' })
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('avengers')


  return (
    <AppContext.Provider value={'hello'}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

