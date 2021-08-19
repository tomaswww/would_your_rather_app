import React, { Component } from 'react'
import '../App.css'
import logo  from '../logo.png'
import { connect } from 'react-redux'
import { receiveAuthedUser } from '../actions/authedUser'
import users from '../reducers/users'

class Login extends Component {
    state = {
        user: ''
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

        dispatch(receiveAuthedUser(user))
    }
    render() {
        const { users } = this.props
        return (
            <div className='login-box'>
                <div className='login-box-header'>
                    <h2>Welcome to the Would You Rather App!</h2>
                    <h5>Please sign in to continue</h5>
                </div>
                <div className='login-body'> 
                    <div className='login-logo'>
                        <image src={logo} alt='login-logo'> </image>
                    </div>
                    <h3>Sign in </h3>
                    <form action="">
                        <div className='login-form'>
                            <label for="users">Select a user: </label>
                            <select name="users" id="users">
                                    <option></option>
                                { Object.entries(users).map((user)=>(
                                    <option value={user[1].id}>{user[1].name}</option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value="Submit" />
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