import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import users from '../reducers/users'

// Here I will add a conditional for displaying already responded or not responded questions

class QuestionDetails extends Component {
    render() {
        const { question, author, users } = this.props        
        const avatarURL = users[author].avatarURL
        const name = users[author].name
        return (
            <div className='question-detail-box'>
                <div className='question-header'>
                    <h1>{name} asks:</h1>
                </div>
                <div className='question-detail-body'>
                    <img src={avatarURL} className='question-detail-avatar'></img>
                    <div className='question-text'> 
                        <h1>Would you rather ... </h1>
                        <form>
                            <input 
                                type="button" 
                                key={question['id']}
                                value={question['optionOne'].text} 
                                onClick={this.handleOptionChange} 
                                className='question-detail-button'
                                    />
                            <h1>- OR -</h1>
                            <input 
                                type="button" 
                                key={question['id']}
                                value={question['optionTwo'].text} 
                                onClick={this.handleOptionChange}
                                className='question-detail-button'
                                    />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions['8xf0y6ziyjabvozdd253nd']
    const author = questions['8xf0y6ziyjabvozdd253nd'].author
    // const hasAnswered = users[authedUser].answers[id] ? true : false
    return {
        authedUser,
        question,
        users,
        author
    }
}

export default connect(mapStateToProps)(QuestionDetails)