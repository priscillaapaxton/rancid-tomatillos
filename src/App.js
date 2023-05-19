import './App.css'
import React from 'react'
import * as apiCalls from './apiCalls'
import AllMovies from './AllMovies'
import SingleMovie from './SingleMovie'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      allMovies: [],
      selectedMovie: null,
      isLoading: true,
      error: null
    }
  }

  componentDidMount = () => {
    apiCalls.getAllMovies()
    .then((data) => {
      this.setState({
        allMovies : data.movies,
        isLoading: false
      })
    })
    .catch(error => this.setState({
      error: error
    }))
  }

  displaySelectedMovie = (id) => {
    apiCalls.getSingleMovie(id).then((data) => {
      console.log('line44',data.movie)
      this.setState({
        selectedMovie: data.movie,
        isLoading: false
      })
    })
  }

  // displaySelectedMovie = (id) => {
  //   console.log('line36', id)
  //   const filteredMovie = this.state.allMovies.filter(movie => movie.id === id)
  //   this.setState({
  //     SelectedMovie: filteredMovie[0].id
  //   })
  // }

  returnHome = () => {
    this.setState({
      SelectedMovie: null
    }) 
  }

  render() {
    const logo = <img className='logo' src={require('./Rancid-tomatillos.png')} alt='Rotten Tomatillos logo'></img>
    return (
    <main className='App'>
         <header>
           {logo}
         </header>
      
         <Route exact path='/:id' render={() => this.state.selectedMovie ? ( <SingleMovie loading={this.state.isLoading} returnHome={this.returnHome} singleMovie={this.state.selectedMovie}/>

          ) : (<div>LOADING </div>) }/> 

         <Route exact path='/' render={() => (
          <AllMovies showMovies={this.state.allMovies} displaySelectedMovie={this.displaySelectedMovie}/>
            )}/>
         <footer>
           <h3> Rancid Tomatillos 2023 </h3>
         </footer>
    </main>

    )
    }
}

export default App;

// <Route exact path='/:id' render={({ match }) => {
//           console.log('hereeeee', match)
//             const id = parseInt(match.params.id)
//             return <SingleMovie id={id} returnHome={this.returnHome} displaySelectedMovie={this.state.SelectedMovie} />
//           } }/>


///app: fetch call is made for all movies when app component
// renders

//app has a state for single movie that is setState when we click on a movie

//So, the fetch call for a single movie needs to be invoked only when we click on a movie (how?)

//we pass the match object as a property to a single movie to use as an alternate id for when the fetch call within app for single movie hasnt been made


  // displaySelectedMovie = (id) => {
  //   console.log('line36', id)
  //   const filteredMovie = this.state.allMovies.filter(movie => movie.id === id)
  //   this.setState({
  //     SelectedMovie: filteredMovie[0].id
  //   })
  // }

    