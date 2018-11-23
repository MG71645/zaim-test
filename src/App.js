import React, { Component } from 'react'

// Components
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'

// Styles
import './assets/css/reset.css'
import './assets/css/fonts.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Footer/>
      </div>
    )
  }
}

export default App
