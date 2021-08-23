import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION :
                const { question } = action
                return {
                    ...state,
                    [action.question.id]: action.question
                }
        case ANSWER_QUESTION :
                const { selection } = action
                const qid = selection.qid
                const optionSelected = selection.answer
                const user = selection.authedUser
                const users = selection.users
                const newVotes = [selection.questions[qid]][0][optionSelected].votes.concat([user])
                console.log(newVotes)
                const newResponses = [selection.users[user]][0]['answers']
                newResponses[qid]=optionSelected
                console.log(newResponses)
                return {
                    ...state,
                }                
        default :
            return state
    }
}