import Error from './Error'
import Loading from './Loading'
import React from 'react'
import './SingleMovie.css'
import {Link} from 'react-router-dom'
import * as apiCalls from './apiCalls'

class SingleMovie extends React.Component  {
  constructor(props) {
    super(props)
      this.state= {
        selectedMovie: [],
        isLoading: true,
        isError: false
      }
    }

    displaySelectedMovie = (id) => {
    apiCalls.getSingleMovie(id)
    .then((data) => {
      this.setState({
        selectedMovie: data.movie,
        isLoading: false
      })
    })
    .catch((err) => {
      this.setState({
        isError: true
      })
    })
  }

  componentDidMount = () => {
    this.displaySelectedMovie(this.props.id)
  } 
  render() {
    
      const inputDate = this.state.selectedMovie.release_date;
      const date = new Date(inputDate);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleString('en-US', options);
    return(
      <>
      {this.state.isError ? ( <Error /> ) : this.state.isLoading ? (<Loading />) : ( <div className='single-movie-container'> 
          <img className='single-movie' src={`${this.state.selectedMovie.poster_path}`}/>
          <div className='movie-info-container'>
            <p className='single-movie-title'>{this.state.selectedMovie.title}</p>
            {this.state.selectedMovie.tagline && <p className='single-movie-tagline'>{`"${this.state.selectedMovie.tagline}"`}</p> }
            <p className='single-movie-overview'>{this.state.selectedMovie.overview}</p>
            <div className='single-movie-bottom-container'>
              <p className='single-movie-date'>Release Date: {formattedDate}</p>
              <p className='single-movie-rating'>Average Rating: {this.state.selectedMovie.average_rating}</p>
            </div>
            <button className='home-button'>
              <Link to='/'>RETURN HOME</Link>
            </button>
          </div>
        </div> ) }
      </>
    )
  }
}

export default SingleMovie
    