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
      test: true,
      // isLoading: false  // return div to return 'is loading...'
    }
  }

  componentDidMount = () => {
    apiCalls.getData().then((data) => {
      this.setState({
        allMovies : data.movies,
        SelectedMovie: null
      }) 
    })
  }

  displaySelectedMovie = (id) => {
    const filteredMovie = this.state.allMovies.filter(movie => movie.id === id)
    this.setState({
      test: false,
      SelectedMovie: filteredMovie
    })
  }

  returnHome = () => {
    this.setState({
      test: true,
      SelectedMovie: null
    }) 
  }

  render() {
    if(this.state.test) {
      return(
      <main className='App'>
        <header>
          <img className='logo' src={require('./Rancid-tomatillos.png')} alt='Rotten Tomatillos logo'></img>
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
    } else {
      return(
        <main className='App'>
          <header>
            <img className='logo' src={require('./Rancid-tomatillos.png')} alt='Rotten Tomatillos logo'></img>
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
