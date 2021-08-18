import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import users from '../reducers/users'

class NewQuestion extends Component {
    render() {
        return (
            <div className='question-box'>
                <div className='question-header'>
                    <h1>Create New Question</h1>
                </div>
                <div className='new-question-body'>
                    <h5>Complete the question</h5>
                    <h1>Would you rather ... </h1>
                    <input placeholder="Enter option one text here"></input>
                    <h3>OR</h3>
                    <input placeholder="Enter option two text here"></input>
                    <hr></hr>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default NewQuestion