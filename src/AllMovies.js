import './AllMovies.css'
import React from 'react'

const AllMovies = (props) => {
  const movieCards = props.showMovies.map(movie => {
    return (
      <img className='movie-card'
        src={movie.poster_path} 
        key={movie.id}
        onClick={() => props.displaySelectedMovie(movie.id)}
      />
    )
  })
  return (
    <div className='movie-container'>
      {movieCards}
    </div>
  )

}

export default AllMovies