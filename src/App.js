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
      selectedMovie: {},
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
    .catch(error => this.setState({
      isError: true
    }))
  }

  // displaySelectedMovie = (id) => {
  //   apiCalls.getSingleMovie(id)
  //   .then((data) => {
  //     this.setState({
  //       selectedMovie: data.movie,
  //       isLoading: false
  //     })
  //   })
  //   .catch(error => this.setState({
  //     isError: true
  //   }))
  // }

  returnHome = () => {
    this.setState({
      selectedMovie: {}
    }) 
  }

  render() {
    const logo = <img className='logo' src={require('./Rancid-tomatillos.png')} alt='Rotten Tomatillos logo'></img>
    return (
    <main className='App'>
         <header>
          <Link to='/' onClick={() => 
          this.returnHome()}>{logo}</Link>
         </header>

         {/* <Route exact path='/:id' render={() => ( <SingleMovie loading={this.state.isLoading} returnHome={this.returnHome} singleMovie={this.state.selectedMovie}/>
          )  }/>  */}
      
         <Route exact path='/:id' render={({match}) => {
          const id = match.params.id
           return this.state.selectedMovie ? ( <SingleMovie returnHome={this.returnHome} id={id} key={id}/> ) : ( <div>LOADING </div> ) } 

         } />

         <Route exact path='/' render={() => ( <AllMovies showMovies={this.state.allMovies} /> )}/>


         {/* displaySelectedMovie={this.displaySelectedMovie} */}
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

      // displaySelectedMovie = (id) => {
  //   console.log('line36', id)
  //   const filteredMovie = this.state.allMovies.filter(movie => movie.id === id)
  //   this.setState({
  //     SelectedMovie: filteredMovie[0].id
  //   })
  // }