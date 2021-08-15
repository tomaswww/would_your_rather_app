import React, { Component } from 'react'
import { connect } from 'react-redux'
import users from '../reducers/users'

class UnansweredQuestion extends Component {
    toQuestion = (e, id) => {
        e.preventDefault()
        // redirect to question
    }
    render() {
        console.log(this.props)
        const { question } = this.props
        const { users } = this.props
        const {
            author, optionOne, id
        } = question
        const image = users[author].avatarURL
        console.log(image)

        return (
            <div className='question'>
                <div className='question-header'>
                    <p>{users[author].name} asks:</p>
                </div>
                <div className='question-body'>
                    <div className='question-img'>
                        <img
                            src={image}
                            alt={`Avatar of ${author}`}
                            className='avatar'
                        />
                    </div>
                    <div className='question-text'>
                        <p>Would you rather</p>
                        <p>...{optionOne.text}...</p>
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

export default connect(mapStateToProps)(UnansweredQuestion)