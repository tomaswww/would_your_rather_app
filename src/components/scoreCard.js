import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import users from '../reducers/users'

class ScoreCard extends Component {
    render() {
        return (
            <div className='leaderboard-box'>
                <div className='leaderboard-user'>
                    <img
                                src={this.props.image}
                                alt={`Avatar of ${this.props.user}`}
                                className='leaderboard-avatar'
                            />
                    <h6>{this.props.user}</h6>
                </div>
                <div className='leaderboard-results'>
                    <h5>Answered Questions: {this.props.answered}</h5>
                    <h5>Created Questions: {this.props.questions}</h5>
                </div>
                <div>
                    <h3>Score: {this.props.score}</h3>
                </div>
            </div>
        )
    }
}


export default ScoreCard