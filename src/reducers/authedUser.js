import { RECEIVE_AUTHEDUSER, CHANGE_AUTHEDUSER } from "../actions/authedUser";

export default function authedUser (state = null, action) {
    switch(action.type) {
        case RECEIVE_AUTHEDUSER :
            return action.id
        case CHANGE_AUTHEDUSER :
            return action.id
        default :
            return state
    }
} 