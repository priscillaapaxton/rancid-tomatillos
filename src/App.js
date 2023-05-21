import './App.css'
import React from 'react'
import AllMovies from './AllMovies'
import SingleMovie from './SingleMovie'
import Loading from './Loading'
import Error from './Error'
import * as apiCalls from './apiCalls'
import {Route, Link} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      allMovies: [],
      isLoading: true,
      isError: false
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
    .catch((err) => {
      this.setState({
        isError: true
      })
    })
  }

  render() {
    const logo = <img className='logo' src={require('./Rancid-tomatillos.png')} alt='Rotten Tomatillos logo'></img>
    return (
    <main className='App'>
         <header>
          <Link to='/'>{logo}</Link>
         </header>

        <Route exact path='/:id' render={({match}) => {
          const id = match.params.id
           return ( <SingleMovie id={id} key={id}/> ) } 
         } />

         <Route exact path='/' render={() => ( this.state.isError ? ( <Error /> ) : this.state.isLoading ? (<Loading />) : (<AllMovies showMovies={this.state.allMovies} /> ) )}/>

         <footer>
           <h3> Rancid Tomatillos 2023 </h3>
         </footer>
    </main>

    )
  }
}

export default App;