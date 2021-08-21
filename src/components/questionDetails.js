import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import users from '../reducers/users'
import AnsweredQuestion from './answeredQuestion';
import PendingQuestion from './pendingQuestion';

class QuestionDetails extends Component {
    render() {
        const { question, author, users, answeredByUser, authedUser,id } = this.props        
        const avatarURL = users[author].avatarURL
        const name = users[author].name
        console.log(id)
        if (answeredByUser === true) {
            return (
                <div>
                    <AnsweredQuestion id={id}/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <PendingQuestion id={id}/>
                </div>
            )
        }
    }
}

function mapStateToProps ({authedUser, users, questions}, props) {
    const { id } = props.match.params
    const question = questions[id]
    const author = questions[id].author
    const answeredByUser = users[authedUser].answers[id] ? true : false
    console.log(answeredByUser)
    // const hasAnswered = users[authedUser].answers[id] ? true : false
    return {
        authedUser,
        question,
        users,
        author,
        answeredByUser,
        id,
    }
}

export default connect(mapStateToProps)(QuestionDetails)