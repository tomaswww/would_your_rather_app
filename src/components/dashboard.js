import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './unansweredQuestion'

class Dashboard extends Component {
    render() {
        console.log(this.props, 'here')
        return (
            <div>
                <h3>Unanswered Questions</h3>
                <ul>
                    {this.props.questionID.map((id)=>(
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
    return {
        questionID: Object.keys(questions)
            .sort((a,b)=> questions[b].id - questions[a].id),
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Dashboard)