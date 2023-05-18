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
        isLoading: false
      })
    })
    .catch(error => this.setState({
      isLoading: false,
      error: error
    }))
  }

  displaySelectedMovie = (id) => {
    const filteredMovie = this.state.allMovies.filter(movie => movie.id === id)
    this.setState({
      SelectedMovie: filteredMovie[0].id
    })
  }

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
         <Route exact path='/:id' render={() => {
          return <SingleMovie returnHome={this.returnHome} displaySelectedMovie={this.state.SelectedMovie}/>
         } }/>
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
//switch contains allMovies and SingleMovie components.

export default App;


    