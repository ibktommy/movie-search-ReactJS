import React, { useEffect, useState } from 'react'

const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`


const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, message: '' })
  const [movieData, setMovieData] = useState([])

  // Funtion to Fetch Data from API_URL
  const fetchMovies = async (url) => {
    setIsLoading(true)

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.Response === 'True') {
        setError({ show: false, message: "" })
        setMovieData(data.Search || data)
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
    fetchMovies(`${apiUrl}${urlParams}`)
  }, [urlParams])

  return { isLoading, error, movieData }
}

export default useFetch