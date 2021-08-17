import React, { Component } from 'react'
import { connect } from 'react-redux'
import users from '../reducers/users'

class QuestionDetails extends Component {
    render() {
        return (
            <div className='box'>
                <h1>User asks:</h1>
                <hr></hr>
                <h5>Avatar Here</h5>
                <h1>Would you rather ... </h1>
                <form>
                    <label for="questions">Would you rather ...</label>
                    <select name="questions" id="questions" multiple>
                    <option value="a">Option A</option>
                    <option value="b">Option B</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default QuestionDetails