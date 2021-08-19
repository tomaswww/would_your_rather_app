import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import users from '../reducers/users'

// Here I will add a conditional for displaying already responded or not responded questions

class PendingQuestion extends Component {
    render() {
        const { name, avatarURL, question, authedUser, id } = this.props        
        
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
                                key='optionTwo'
                                value={question['optionOne'].text} 
                                onClick={this.handleOptionChange} 
                                className='question-detail-button'
                                    />
                            <h1>- OR -</h1>
                            <input 
                                type="button" 
                                key='optionTwo'
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

function mapStateToProps ({authedUser,users, questions}, {id}) {
    const question = questions[id]
    const author = question['author']
    const avatarURL = users[author].avatarURL
    const name = users[author].name
    return {
        authedUser,
        name,
        avatarURL,
        question,
    }
}

export default connect(mapStateToProps)(PendingQuestion)