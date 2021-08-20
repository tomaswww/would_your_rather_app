import { _saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleQuestion(optionOneText,optionTwoText,authedUser){     
    return (dispatch, getState) => {
        const {authedUser, questions, users} = getState()
        const question = {optionOneText,optionTwoText,authedUser}

        dispatch(showLoading())
        return _saveQuestion(question,users,questions)
        .then((question)=> dispatch(addQuestion(question)))
        .then(dispatch(hideLoading))
    }
}