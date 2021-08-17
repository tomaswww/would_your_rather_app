import React, { Component } from 'react'
import { connect } from 'react-redux'
import users from '../reducers/users'

class ScoreCard extends Component {
    render() {
        return (
            <div className='box'>
                <h1>Avatar Here</h1>
                <h1>Name Of the user</h1>
                <hr></hr>
                <h5>Answered Questions: X</h5>
                <h5>Created Questions: Y</h5>
                <h3>Score: Z</h3>
            </div>
        )
    }
}

export default ScoreCard