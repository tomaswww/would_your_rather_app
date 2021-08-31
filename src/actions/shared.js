import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { receiveAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from 'react-redux-loading'

let authedUser = 'notLogged'

export function handleInitialData () {

    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions})=> {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(receiveAuthedUser(authedUser))
                dispatch(hideLoading())
            })
    }
}