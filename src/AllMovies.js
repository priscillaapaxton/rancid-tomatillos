// import './AllMovies.css'
// import React from 'react'

// const AllMovies = (movies) => {
//   return (
//     movies.showMovies.map((movie) => {
//       return (
//         <img className='moviePoster'
//           src={movie.poster_path} 
//           key={movie.id}
//           // onClick={() => singleMovie(movie.id)}
//           />
//       )
//     })
//   )
// }

// export default AllMovies


import './AllMovies.css'
import React from 'react'

const AllMovies = ({showMovies}) => {
  const movieCards = showMovies.map(movie => {
    return (
      <img className='movie-card'
        src={movie.poster_path} 
        key={movie.id}
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