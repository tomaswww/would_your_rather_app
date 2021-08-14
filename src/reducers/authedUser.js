import { RECEIVE_AUTHEDUSER } from "../actions/authedUser";

export default function authedUser (state = null, action) {
    switch (action.type) {
        case RECEIVE_AUTHEDUSER :
            return action.id
        default :
        return state
    }
} 