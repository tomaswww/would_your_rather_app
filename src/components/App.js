import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './dashboard';
import Login from './login';
import questionDetails from './questionDetails';
import { LoadingBar } from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    if (this.props.authedUser === 'notLogged') {
      return (
        <Router>
            <LoadingBar />
          <div>
                  <Route path='/login' component={Login}/>
          </div>
          <Redirect to='/login' />
        </Router>
      )
    }
    else {
      return (
        <Router>
            <LoadingBar />
          <div className='container'>
            {this.props.authedUser === null
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
}

function mapStateToProps({authedUser}) {
  console.log(authedUser)
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
