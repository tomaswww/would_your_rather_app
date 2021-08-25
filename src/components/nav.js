import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import '../App.css';


class Nav extends Component {
    render(){
        const { authedUser, users } = this.props
      return (
        <div className="App-header">
            <div className="tabs">
                <nav className='nav'>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink to='/add' activeClassName='active'>
                        New Question
                    </NavLink>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </nav>
            </div>
            <div className="user-info">
                <span>Hello! {users[authedUser].name}</span>
                <img 
                    className="header-avatar" 
                    src={users[authedUser].avatarURL}
                    alt='header-avatar'/>
                <Link to='/login'>
                    <button>Logout</button>
                </Link>
            </div>
        </div>
       )
    }
}


function mapStateToProps ({authedUser,users}) {
    return {
        authedUser,
        users,
    }
}

export default connect(mapStateToProps)(Nav)
