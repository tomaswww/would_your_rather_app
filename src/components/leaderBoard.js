import React, { Component } from 'react'
import { connect } from 'react-redux'
import users from '../reducers/users'
import ScoreCard from './scoreCard'

class LeaderBoard extends Component {
    render() {
        return (
            <ScoreCard />
        )
    }
}

export default LeaderBoard