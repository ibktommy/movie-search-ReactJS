import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

// const url =
//   'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  // Grabbing Values from the App-Global-Context
  const { isLoading, movies } = useGlobalContext()

  if (isLoading) {
    return <div className="loading"></div>
  }

  return (
    <section className="movies">
      {
        movies.map((movie) => {
          // Destructuring movie-object
          const { imdbID: id, Poster: poster, Tilte: title, Year: year } = movie
          return (
            <Link to={`/movies/${id}`} key={id} className='movie'>
              <article>
                <img src={poster} alt={title} />
                <div className="movie-info">
                  <h4 className="title">{title}</h4>
                  <p>{year}</p>
                </div>
              </article>
            </Link>
          )
        })
      }
    </section>
  )
}

export default Movies
