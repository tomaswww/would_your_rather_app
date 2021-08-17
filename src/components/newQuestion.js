import React, { Component } from 'react'
import { connect } from 'react-redux'
import users from '../reducers/users'

class NewQuestion extends Component {
    render() {
        return (
            <div className='box'>
                <h1>Create New Question</h1>
                <hr></hr>
                <h5>Complete the question</h5>
                <h1>Would you rather ... </h1>
                <input placeholder="Enter option one text here"></input>
                <h3>OR</h3>
                <input placeholder="Enter option two text here"></input>
                <hr></hr>
                <button>Submit</button>
            </div>
        )
    }
}

export default NewQuestion