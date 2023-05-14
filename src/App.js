import './App.css'
import React from 'react'
import * as apiCalls from './apiCalls'
import AllMovies from './AllMovies'
import SingleMovie from './SingleMovie'

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      allMovies: [],
      SelectedMovie: null,
      homeScreen: true,
      isLoading: null,
      error: null
    }
  }

  componentDidMount = () => {
    apiCalls.getAllMovies()
    .then((data) => {
      this.setState({
        allMovies : data.movies,
        SelectedMovie: null,
        isLoading: true
      })
    })
    .catch(error => this.setState({
      isLoading: false,
      error: error
    }))
  }

  displaySelectedMovie = (id) => {
    const filteredMovie = this.state.allMovies.filter(movie => movie.id === id)
    // console.log('line28', filteredMovie[0].id)
    this.setState({
      homeScreen: false,
      SelectedMovie: filteredMovie[0].id
    })
  }

  returnHome = () => {
    this.setState({
      homeScreen: true,
      SelectedMovie: null
    }) 
  }

  render() {

    const logo = <img className='logo' src={require('./Rancid-tomatillos.png')} alt='Rotten Tomatillos logo'></img>

    if(this.state.error) {
      return <div>Error: {this.state.error.message}</div>
    }
    else if(this.state.homeScreen) {
      return(
      <main className='App'>
        <header>
          {logo}
        </header>
          <AllMovies
          showMovies={this.state.allMovies} 
          displaySelectedMovie={this.displaySelectedMovie}
          />
        <footer>
          <h3> Rancid Tomatillos 2023 </h3>
        </footer>
      </main>
      )
    } 
    else {
      return(
        <main className='App'>
          <header>
            {logo}
          </header>
            <SingleMovie
            returnHome={this.returnHome}
            displaySelectedMovie={this.state.SelectedMovie}
            />
        </main>
        )
    }
    }
}


export default App;
