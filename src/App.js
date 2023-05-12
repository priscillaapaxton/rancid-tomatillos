import './App.css'
import React from 'react'
import * as apiCalls from './apiCalls'
import AllMovies from './AllMovies'

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      allMovies: []
    }
  }

  componentDidMount = () => {
    apiCalls.getData().then((data) => {
      this.setState({
        allMovies : data.movies
      }) 
    })
  }

  render() {
    return(
      <main className='App'>
        <header>
          <img className='logo' src={require('./Rancid-tomatillos.png')} alt='Rotten Tomatillos logo'></img>
        </header>
        < AllMovies 
          showMovies={this.state.allMovies}
        />
        <footer>
          <h3> Rancid Tomatillos 2023 </h3>
        </footer>
      </main>
    )

  }
}

export default App;
