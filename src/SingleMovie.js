import React from 'react'
import './SingleMovie.css'
import * as apiCalls from './apiCalls'
import {Link} from 'react-router-dom'

class SingleMovie extends React.Component {
  constructor(props) {
    super()
    this.state= {
      currentMovie: props.singleMovie,
      loading: props.loading
    }
  }

  // componentDidMount = (props) => {
  //   apiCalls.getSingleMovie(props.displaySelectedMovie).then((data) => {
  //     console.log('line44',data.movie)
  //     this.setState({
  //       selectedMovie: data.movie,
  //       isLoading: false
  //     })
  //   })
  //   this.setState({
  //     loading: false
  //   })
  

  //   componentDidMount = () => {
    
  //   apiCalls.getSingleMovie(this.props.displaySelectedMovie).then((data) => {
  //     this.setState({
  //       currentMoviePoster: data.movie.poster_path,
  //       currentMovieTitle: data.movie.title,
  //       currentMovieTagline: data.movie.tagline,
  //       currentMovieOverview: data.movie.overview,
  //       currentMovieRelease: data.movie.release_date,
  //       currentMovieRating: data.movie.average_rating
  //     })
  //   })
  // }

  // <Route exact path="/" render={() => this.state.movies.length 
  //   ? <MovieContainer 
  //     movies={this.state.movies} 
  //     toggleModal={this.toggleModal}
  //     /> 
  //   : <h2>Loading...</h2>
  // }/>

  render() {
  const inputDate = this.props.singleMovie.release_date;
  const date = new Date(inputDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleString('en-US', options);

    return(
      <div className='single-movie-container'>
        <img className='single-movie' src={`${this.props.singleMovie.poster_path}`}/>
        <div className='movie-info-container'>
          <p className='single-movie-title'>{this.props.singleMovie.title}</p>
          {this.props.singleMovie.tagline && <p className='single-movie-tagline'>{`"${this.props.singleMovie.tagline}"`}</p> }
          <p className='single-movie-overview'>{this.props.singleMovie.overview}</p>
          <div className='single-movie-bottom-container'>
            <p className='single-movie-date'>Release Date: {formattedDate}</p>
            <p className='single-movie-rating'>Average Rating: {this.props.singleMovie.rating}</p>
          </div>
          <button>
            <Link to='/' onClick={(e) => {
            // e.preventDefault()
            this.props.returnHome()
          }}>RETURN HOME</Link>
          </button>
        </div>
      </div>
    //  <div>
    //  hello
    //  </div>
    )
  }
}

export default SingleMovie


  // componentDidMount = () => {
    
  //   apiCalls.getSingleMovie(this.props.displaySelectedMovie).then((data) => {
  //     this.setState({
  //       currentMoviePoster: data.movie.poster_path,
  //       currentMovieTitle: data.movie.title,
  //       currentMovieTagline: data.movie.tagline,
  //       currentMovieOverview: data.movie.overview,
  //       currentMovieRelease: data.movie.release_date,
  //       currentMovieRating: data.movie.average_rating
  //     })
  //   })
  // }


  // const inputDate = this.state.currentMovie.release_date;
  // const date = new Date(inputDate);
  // const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // const formattedDate = date.toLocaleString('en-US', options);

  //   return(
  //     <div className='single-movie-container'>
  //       <img className='single-movie' src={`${this.state.currentMovie.poster_path}`}/>
  //       <div className='movie-info-container'>
  //         <p className='single-movie-title'>{this.state.currentMovie.title}</p>
  //         {this.state.currentMovie.tagline && <p className='single-movie-tagline'>{`"${this.state.currentMovie.tagline}"`}</p> }
  //         <p className='single-movie-overview'>{this.state.currentMovie.overview}</p>
  //         <div className='single-movie-bottom-container'>
  //           <p className='single-movie-date'>Release Date: {formattedDate}</p>
  //           <p className='single-movie-rating'>Average Rating: {this.state.currentMovie.rating}</p>
  //         </div>
  //         <button>
  //           <Link to='/' onClick={(e) => {
  //           // e.preventDefault()
  //           this.props.returnHome()
  //         }}>RETURN HOME</Link>
  //         </button>
  //       </div>
  //     </div>
    //  <div>
    //  hello
    //  </div>
    