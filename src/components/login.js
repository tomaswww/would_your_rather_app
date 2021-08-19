import React, { Component } from 'react'
import '../App.css'
import logo  from '../logo.png'
import { connect } from 'react-redux'
import users from '../reducers/users'

class Login extends Component {
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
                                    console.log(user),
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