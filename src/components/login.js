import React, { Component } from 'react'
import '../App.css'
import logo  from '../logo.png'
import { connect } from 'react-redux'
import { changeAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { LoadingBar } from 'react-redux-loading';
import users from '../reducers/users'

class Login extends Component {
    state = {
        user: 'notLogged',
        toHome: false,
    }

    handleChange = (e) => {
        const user = e.target.value
        this.setState(()=> ({
            user: user,
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { user } = this.state
        const { dispatch } = this.props

        dispatch(changeAuthedUser(user))
        return (
            this.setState(() => ({
            toHome: user === '' ? false : true,
            }))
        )
    }
    render() {
        const { users } = this.props
        const { user, toHome } = this.state

        if (toHome == true) {
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
                    <div className='login-logo'>
                        <image src={logo} alt='login-logo'> </image>
                    </div>
                    <h3>Sign in </h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className='login-form'>
                            <label for="users">Select a user: </label>
                            <select name="users" id="users" onChange={this.handleChange}>
                                    <option></option>
                                { Object.entries(users).map((user)=>(
                                    <option value={user[1].id}>{user[1].name}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit"/>
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