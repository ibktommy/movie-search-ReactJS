import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { apiUrl } from './context'

const SingleMovie = () => {
  // Setting COmponent State
  const [movieDetail, setMovieDetail] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, isError] = useState({ show: false, message: ' ' })

  // Setting value from Global Context as ID
  const { id } = useParams()
  // Function To Fetch Movie Detail
  const fetchMovieDetails = async (apiUrl) => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    console.log(data)
  }

  // UseEfect HooK
  useEffect(() => {
    fetchMovieDetails( `${apiUrl}&i=${id}`)
  }, [id])

  return <h2>single movie</h2>

}

export default SingleMovie
