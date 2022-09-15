import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { apiUrl } from './context'
import useFetch from './utils/useFetch'

const moviePoster =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SingleMovie = () => {
  // Setting value from Global Context as ID
  const { id } = useParams()
  const { isLoading, error, movieData: movieDetail } = useFetch(`&i=${id}`)

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
