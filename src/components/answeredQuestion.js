import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import users from '../reducers/users'

// Here I will add a conditional for displaying already responded or not responded questions

class AnsweredQuestion extends Component {
    render() {
        const { question, author, users, answeredByUser, authedUser, id, optionOneVotes, optionTwoVotes, classOptionTwo, classOptionOne } = this.props        
        const avatarURL = users[author].avatarURL
        const name = users[author].name
        console.log(answeredByUser)
        return (
            <div className='question-detail-box'>
                <div className='question-header'>
                    <h1>{name} asks:</h1>
                </div>
                <div className='question-detail-body'>
                    <img src={avatarURL} className='question-detail-avatar'></img>
                    <div className='question-text'> 
                        <h1>Would you rather ... </h1>
                            <div className={classOptionOne}>
                                <p>{question['optionOne'].text}</p>
                                <p>Votes: {optionOneVotes}</p>
                            </div>
                            <h1>- OR -</h1>
                            <div className={classOptionTwo}>
                                <p>{question['optionTwo'].text}</p>
                                <p>Votes: {optionTwoVotes}</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id]
    const author = question['author']
    const avatarURL = users[author].avatarURL
    const name = users[author].name
    const optionOneVotes = question['optionOne']['votes'].length
    const optionTwoVotes = question['optionTwo']['votes'].length
    let classOptionOne = 'question-option-no-selected'
    let classOptionTwo = 'question-option-no-selected'
    if (users[authedUser].answers[id] === 'optionOne') {
        classOptionOne = 'question-option-selected'
        classOptionTwo = 'question-option-no-selected'
    }
    else {
        classOptionTwo = 'question-option-selected'
        classOptionOne = 'question-option-no-selected'
    }
    return {
        authedUser,
        question,
        users,
        author,
        avatarURL,
        name,
        optionOneVotes,
        optionTwoVotes,
        classOptionOne,
        classOptionTwo,
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)