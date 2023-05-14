import './AllMovies.css'
import React from 'react'

const AllMovies = (props) => {
  const movieCards = props.showMovies.map(movie => {

    return (
      <div className='movie-card' key={movie.id} onClick={() => props.displaySelectedMovie(movie.id)} >
        <img className='movie-card-image'
          src={movie.poster_path}
          alt={movie.title}
        />
        <p className='movie-card-title'>{movie.title}</p>
      </div>
    )
  })
  return (
    <div className='movie-container'>
      {movieCards}
    </div>
  )

}

export default AllMovies