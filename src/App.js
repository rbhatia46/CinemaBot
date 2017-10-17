import React, { Component } from 'react';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./components/Home');
var Movies = require ('./components/Movies');

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movies' component={Movies} />
            <Route render={function () {
              return <p> NOT FOUND </p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
