
export function getAllMovies () {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then((response) => {
    if(!response.ok && response.status === 500) {
      throw new Error(`${response.status}`)
    } else {
    return response.json()
    }
  })

}

export function getSingleMovie (movieId) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`)
    } else {
      return response.json()
    }
  })

}
