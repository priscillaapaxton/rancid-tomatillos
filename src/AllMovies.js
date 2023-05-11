import './AllMovies.css'
import React from 'react'

const AllMovies = (props) => {
  console.log(props.showMovies)
  return (
    props.showMovies.map((movie) => {
      console.log('line8', movie.poster_path)
      return (
        <div className='movieContent'>
          <img src={movie.poster_path}/>
          <p>{movie.title}</p>
        </div>

      )
    })
  )
}

export default AllMovies