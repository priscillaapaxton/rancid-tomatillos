import React from 'react'
import './SingleMovie.css'
import * as apiCalls from './apiCalls'
import {Link} from 'react-router-dom'

class SingleMovie extends React.Component {
  constructor() {
    super()
    this.state= {
      currentMoviePoster: null,
      currentMovieTitle: null,
      currentMovieTagline: null,
      currentMovieOverview: null,
      currentMovieRelease: null,
      currentMovieRating: null,
    }
  }

  componentDidMount = () => {
    apiCalls.getSingleMovie(this.props.displaySelectedMovie).then((data) => {
      this.setState({
        currentMoviePoster: data.movie.poster_path,
        currentMovieTitle: data.movie.title,
        currentMovieTagline: data.movie.tagline,
        currentMovieOverview: data.movie.overview,
        currentMovieRelease: data.movie.release_date,
        currentMovieRating: data.movie.average_rating
      })
    })
  }

  render() {
  const inputDate = this.state.currentMovieRelease;
  const date = new Date(inputDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleString('en-US', options);
    return(
      <div className='single-movie-container'>
        <img className='single-movie' src={`${this.state.currentMoviePoster}`}/>
        <div className='movie-info-container'>
          <p className='single-movie-title'>{this.state.currentMovieTitle}</p>
          {this.state.currentMovieTagline && <p className='single-movie-tagline'>{`"${this.state.currentMovieTagline}"`}</p> }
          <p className='single-movie-overview'>{this.state.currentMovieOverview}</p>
          <div className='single-movie-bottom-container'>
            <p className='single-movie-date'>Release Date: {formattedDate}</p>
            <p className='single-movie-rating'>Average Rating: {this.state.currentMovieRating}</p>
          </div>
          <button>
            <Link to='/' onClick={(e) => {
            // e.preventDefault()
            this.props.returnHome()
          }}>RETURN HOME</Link>
          </button>
        </div>
      </div>
    )
  }
}

export default SingleMovie
