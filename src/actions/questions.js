import { _saveQuestion, _saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


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

function answerQuestion(selection){
    return {
        type: ANSWER_QUESTION,
        selection
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

export function handleAnswerQuestion(qid,answer){     
    return (dispatch, getState) => {
        const { authedUser, users, questions} = getState()
        const selection = {authedUser,qid,answer,users,questions}
        dispatch(showLoading())
        return _saveQuestionAnswer(selection)
        .then(()=> dispatch(answerQuestion(selection)))
        .then(dispatch(hideLoading))
    }
}