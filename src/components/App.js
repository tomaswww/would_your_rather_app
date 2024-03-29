import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './dashboard';
import Login from './login';
import questionDetails from './questionDetails';
import { LoadingBar } from 'react-redux-loading';
import newQuestion from './newQuestion';
import leaderBoard from './leaderBoard';
import Nav from './nav'
import NotFound from './notFound';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  

  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        this.props.authedUser !== null ? (
          <>
            {props.match.path === "/question/:question_id" &&
            !Object.keys(this.props.questions).includes(
              props.match.params.question_id
            ) ? (
              <Redirect component={NotFound}/>
            ) : (
              <Component {...props} />
            )}
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  render() {    
      return (
        <Router>
            <LoadingBar />
          <div className='container'> 
               <div className="App">
                 { this.props.authedUser === null
                 ? null
                 : <Nav />
                 }
                 { this.props.authedUser === null
                 ?<Router>
                      <LoadingBar />
                      <div>
                              <Route path='/login' component={Login}/>
                      </div>
                      <Redirect
                            to={{
                              pathname: "/login",
                              state: { from: this.props.location },
                            }}
                      />
                  </Router>
                 : <Switch>
                    <this.PrivateRoute path='/login' exact component={Login}/>
                    <this.PrivateRoute path='/' exact component={Dashboard}/>
                    <this.PrivateRoute path='/question/:id' exact component={questionDetails}/>
                    <this.PrivateRoute path='/add' exact component={newQuestion}/>
                    <this.PrivateRoute path='/leaderboard' exact component={leaderBoard}/>
                    <this.PrivateRoute path='/404'component={NotFound}/>
                  </Switch>
                }
                </div> 
          </div>
        </Router>
    );
    } 
  }


function mapStateToProps({authedUser,questions}) {
  // let { authedUser } = getState()
  return {
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(App);
