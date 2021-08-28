import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreCard from './scoreCard'

class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        const results = []
        Object.entries(users).map(element => {
            return (
                results.push({
                "score":Object.keys(element[1].questions).length + Object.keys(element[1].answers).length,
                "answered": Object.keys(element[1].answers).length,
                "questions": Object.keys(element[1].questions).length,
                "name": element[1].name,
                "image": element[1].avatarURL,
                })
            )   
        });
        return (
            <div>
                {results.map((element) => { 
                    return (
                        <ScoreCard answered={element["answered"]}  key={element["name"]} questions={element["questions"]} user={element["name"]} score={element["score"]} image={element["image"]}/>
                    )                   
                })}
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)