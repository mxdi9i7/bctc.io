import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import './App.css';
import Index from './components/index/Index';
import AuthPage from './components/auth/AuthPage';

class App extends Component {
  render() {
    return (
      <Router history={createHistory}>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/auth" component={AuthPage} />
        </div>
      </Router>
    );
  }
}

export default App;
