import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { apiUrl } from './context'

const moviePoster =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SingleMovie = () => {
  // Setting COmponent State
  const [movieDetail, setMovieDetail] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, message: ' ' })

  // Setting value from Global Context as ID
  const { id } = useParams()
  // Function To Fetch Movie Detail
  const fetchMovieDetails = async (apiUrl) => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    if (data.Response === "TRUE") {
      setError({ show: false, message: '' })
      setIsLoading(false)
    } else {
      setMovieDetail(data)
      setIsLoading(false)
    }
  }

  // UseEfect HooK
  useEffect(() => {
    fetchMovieDetails( `${apiUrl}&i=${id}`)
  }, [id])

  if (isLoading) {
    return <div className="loading"></div>
  }

  if (error.show) {
    <return className="page-error">
      <h1>{error.message}</h1>
      <Link to='/'>
        back to movies
      </Link>
    </return>
  }

  // Destructuring properties from the movieDetail-Object
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movieDetail
  return (
    <section className="single-movie">
      <img src={poster === 'N/A' ? moviePoster : poster} alt={title} />
      <div className="singlemovie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )

}

export default SingleMovie
