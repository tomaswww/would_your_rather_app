import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { handleQuestion } from '../actions/questions'
import { LoadingBar } from 'react-redux-loading'
import dashboard from './dashboard';

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChangeOne = (e) => {
        const optionOne = e.target.value
        this.setState(() => ({
            optionOne: optionOne,
        }))
    }
    handleChangeTwo = (e) => {
        const optionTwo = e.target.value
        this.setState(() => ({
            optionTwo: optionTwo,
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { authedUser, users } = this.props
        const { dispatch } = this.props
        dispatch(handleQuestion(optionOne,optionTwo, authedUser,users))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true
        }))
    }
    render() {
        const { optionOne, optionTwo, toHome} = this.state
        const { authedUser } = this.props

        if (toHome === true) {
            return <Redirect to='/' component={dashboard}/>
        }

        return (
            <div className='question-box'>
                <div className='question-header'>
                    <h1>Create New Question</h1>
                </div>
                <div className='new-question-body'>
                    <h5>Complete the question</h5>
                    <h1>Would you rather ... </h1>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            placeholder="Enter option one text here"
                            value={optionOne}
                            onChange={this.handleChangeOne}
                            className='textarea'
                            maxLength={100}
                        ></input>
                        <h3>OR</h3>
                        <input 
                            placeholder="Enter option two text here"
                            value={optionTwo}
                            onChange={this.handleChangeTwo}
                            className='textarea'
                            maxLength={100}
                        ></input>
                        <hr></hr>
                        <button 
                            type='submit'
                            disabled={optionOne ==='' || optionTwo === ''}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)