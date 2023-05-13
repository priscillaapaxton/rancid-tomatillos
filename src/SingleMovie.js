import React from 'react'
import './SingleMovie.css'

const SingleMovie = (props) => {
    return (
      <div>
        <img className='single-movie'
          src={props.displaySelectedMovie[0].poster_path} 
        />
        <button onClick={(e) => {
          e.preventDefault()
          props.returnHome()
        }}>HOME</button>
      </div>
    )
  }

export default SingleMovie
