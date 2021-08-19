import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import users from '../reducers/users'

class QuestionList extends Component {
    toQuestion = (e, id) => {
        e.preventDefault()
        // redirect to question
    }
    render() {
        const { question, users } = this.props
        const {
            author, optionOne, id
        } = question
        const image = users[author].avatarURL

        return (
            <div className='question-box'>
                <div className='question-header'>
                    <h2>{users[author].name} asks:</h2>
                </div>
                <div className='question-body'>
                    <div className='question-img'>
                            <img
                                src={image}
                                alt={`Avatar of ${author}`}
                                className='question-avatar'
                            />
                    </div>
                    <div className='question-text'>
                        <h3>Would you rather</h3>
                        <h5>...{optionOne.text}...</h5>
                        <button onClick={(e)=> this.toQuestion(e, id)}>View Poll</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id]
    // const hasAnswered = users[authedUser].answers[id] ? true : false
    return {
        authedUser,
        question,
        users
    }
}

export default connect(mapStateToProps)(QuestionList)