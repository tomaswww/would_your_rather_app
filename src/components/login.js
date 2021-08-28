import React, { Component } from 'react'
import '../App.css'
import logo  from '../logo.svg'
import { connect } from 'react-redux'
import { changeAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { hideLoading, LoadingBar, showLoading } from 'react-redux-loading';

class Login extends Component {
    state = {
        user: 'notLogged',
        toHome: false,
    }

    handleChange = (e) => {
        const user = e.target.value
        this.setState(()=> ({
            user,
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { user } = this.state
        const { dispatch } = this.props
        dispatch(showLoading())
        dispatch(changeAuthedUser(user))

        this.setState(() => ({
                user: user,
                toHome: user === 'notLogged' ? false : true,
            }))
        hideLoading()
    }
    render() {
        const { users } = this.props
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div className='login-box'>
                <LoadingBar />
                <div className='login-box-header'>
                    <h2>Welcome to the Would You Rather App!</h2>
                    <h5>Please sign in to continue</h5>
                </div>
                <div className='login-body'> 
                        <img src={logo} alt='login-logo' className='login-logo'/>
                    <h3>Sign in </h3>
                        <form onSubmit={this.handleSubmit} className='login-form'>
                                <label htmlFor="users">Select a user: </label>
                                <select name="users" id="users" onChange={this.handleChange}>
                                        <option key={101}></option>
                                    { Object.entries(users).map((user)=>(
                                        <option value={user[1].id} key={user[1].id}>{user[1].name}</option>
                                    ))}
                                </select>
                            <button type="submit" className='login-detail-button'>Sign In</button>
                        </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    return {
        users
    }
}


export default connect(mapStateToProps)(Login)