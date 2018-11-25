import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Routes
import Form from './components/Form'
import Done from './components/Done'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Styles
import './assets/css/reset.css'
import './assets/css/fonts.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="body">
              <Switch>
                <Route exact path="/done" component={Done}/>
                <Route exact path="/" component={Form}/>
              </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
