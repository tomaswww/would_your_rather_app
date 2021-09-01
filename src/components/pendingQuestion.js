import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { LoadingBar } from 'react-redux-loading'
import dashboard from './dashboard';
import NotFound from './notFound';

class PendingQuestion extends Component {
    state = {
        toHome: false
    }

    handleOptionChange = (e) => {
            const optionSelected = e.target.value
            const { id } = this.props
            const { dispatch } = this.props

            dispatch(handleAnswerQuestion(id, optionSelected))
            
            this.setState(() => ({
            toHome: true
        }))
    }      

    render() {
        const { name, avatarURL, question } = this.props  
        const { toHome } = this.state
        if (toHome === true) {
            return (
                <Router>
                    <LoadingBar />
                    <div>
                            <Route path='/' component={dashboard}/>
                    </div>
                    <Redirect to='/' />
                </Router>
            )
        }
        if (question !== undefined){
            return (
            <div className='question-detail-box'>
                <div className='question-detail-header'>
                    <h1>{name} asks:</h1>
                </div>
                <div className='question-detail-body'>
                    <img src={avatarURL} className='question-detail-avatar' alt='question-detail-avatar'></img>
                    <div className='question-detail-text'> 
                        <h1>Would you rather ... </h1>
                            <button 
                                type="button" 
                                key='optionOne'
                                value='optionOne' 
                                onClick={this.handleOptionChange} 
                                className='question-detail-button'>{question['optionOne'].text}</button>
                            <h1>- OR -</h1>
                            <button 
                                type="button" 
                                key='optionTwo'
                                value='optionTwo'
                                onClick={this.handleOptionChange}
                                className='question-detail-button'>{question['optionTwo'].text}</button>
                    </div>
                </div>
            </div>
            )
        }
        if (question === undefined){
            return (
                <Router>
                    <LoadingBar />
                    <div>
                            <Route path='/404' component={NotFound}/>
                    </div>
                    <Redirect to='/404' />
                </Router>
            )
        }                
    }
}

function mapStateToProps ({authedUser,users, questions}, {id}) {
    const question = questions[id]
    const author = question ? question['author']: null
    const avatarURL = author ? users[author].avatarURL : null
    const name = author ? users[author].name : null
    return {
        authedUser,
        name,
        avatarURL,
        question,
    }
}

export default connect(mapStateToProps, null)(PendingQuestion)