import './App.css';
import React from 'react'
import ReactDom from 'react-dom'
import * as apiCalls from './apiCalls';

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      allMovies: []
    }
  }

  componentDidMount = () => {
    apiCalls.getData().then((data) => {
      console.log('line16', data.movies)
      this.setState({
        allMovies : data.movies
      }) 
    })
  }

  render() {
    return(
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
      </main>
    )

  }
}

export default App;
