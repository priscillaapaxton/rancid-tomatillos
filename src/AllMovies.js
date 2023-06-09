import './AllMovies.css'
import React from 'react'
import {Link} from 'react-router-dom'

const AllMovies = (props) => {
  const movieCards = props.showMovies.map(movie => {

    return (
     <Link to={`/${movie.id}`} key={movie.id} >
       <div className='movie-card'>
        <img className='movie-card-image'
          src={movie.poster_path}
          alt={movie.title}
        />
        <p className='movie-card-title'>{movie.title}</p>
      </div>
      </Link>
    )
  })
  return (
    <div className='movie-container'>
      {movieCards}
    </div>
  )
  
}

export default AllMovies
