import React, { useContext, useEffect, useState } from 'react'

export const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

console.log(apiUrl)

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // Setting State Values in Context
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, message: '' })
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('avengers')


  // Funtion to Fetch Data from API_URL
  const fetchMovies = async (url) => {
    setIsLoading(true)

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.Response === 'True') {
        setError({ show: false, message: "" })
        setMovies(data.Search)
      } else {
        setError({ show: true, message: data.Error })
      }
      setIsLoading(false)

    } catch (error) {
      console.log(error.message)
    }
  }

  // Calling the FetchMovies Function in the useEffect Hook
  useEffect(() => {
    fetchMovies(`${apiUrl}&s=${searchTerm}`)
  }, [searchTerm])

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

