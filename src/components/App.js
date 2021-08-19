import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './dashboard';
import Login from './login';
import questionDetails from './questionDetails';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
      return (
        <Router>
          <div className='container'>
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/question/:id' component={questionDetails}/>
                </div>}   
          </div>
        </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
