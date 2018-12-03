import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Jokes from './components/Jokes';




class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <div>
        <ul className='nav'>
          <li>
            <Link to="/">Jokes</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/topics">Login</Link>
          </li>
        </ul>

        

        <Route exact path="/" component={Jokes} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
      

      </div>
    );
  }
}

export default App;
