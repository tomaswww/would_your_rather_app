import React, { Component } from 'react'
import { connect } from 'react-redux'
import users from '../reducers/users'

class Login extends Component {
    render() {
        return (
            <div className='box'>
                <h1>Welcome to the Would You Rather App!</h1>
                <h5>Please sign in to continue</h5>
                <hr></hr>
                <h1>Picture Here</h1>
                <h3>Sign in </h3>
                <form action="">
                    <label for="users">Select a user:</label>
                    <select name="users" id="users">
                        <option value="1">User 1</option>
                        <option value="2">User 2</option>
                        <option value="3">User 3</option>
                        <option value="4">User 4</option>
                    </select>
                    <hr></hr>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login