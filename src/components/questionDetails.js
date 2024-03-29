import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import AnsweredQuestion from './answeredQuestion';
import PendingQuestion from './pendingQuestion';

class QuestionDetails extends Component {
    render() {
        const { answeredByUser,id } = this.props        

            return (
                <div>
                    {answeredByUser === true 
                    ? <AnsweredQuestion id={id}/>
                    : <PendingQuestion id={id}/>
                }
                </div>
            )        
    }
}

function mapStateToProps ({authedUser, users, questions}, props) {
    const { id } = props.match.params
    const answeredByUser = users[authedUser].answers[id] ? true : false

    return {
        answeredByUser,
        id,
    }
}

export default connect(mapStateToProps)(QuestionDetails)