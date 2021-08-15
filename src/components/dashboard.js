import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './unansweredQuestion'

class Dashboard extends Component {
    render() {
        console.log(this.props.answeredIDs)
        console.log(this.props.unAnsweredIDs)
        return (
            <div>
                <h3>Unanswered Questions</h3>
                <ul>
                    {this.props.unAnsweredIDs.map((id)=>(
                        <li key={id}>
                            <UnansweredQuestion id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({questions, users, authedUser}) {
    const allIDs = Object.keys(questions)
    const answeredIDs = Object.keys(users[authedUser].answers)
    const unAnsweredIDs = allIDs.filter(item=> !answeredIDs.includes(item))

    return {
        answeredIDs,
        unAnsweredIDs,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Dashboard)