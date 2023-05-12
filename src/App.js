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
        <h1>Rancid Tomatillos</h1>
        < AllMovies 
          showMovies={this.state.allMovies}
        />
      </main>
    )

  }
}

export default App;
