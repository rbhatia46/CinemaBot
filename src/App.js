import React, { Component } from 'react';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./components/Home');
var Movie = require ('./components/Movie');

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movie/:id' component={Movie} />
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
