export const RECEIVE_AUTHEDUSER = 'RECEIVE_AUTHEDUSER'
export const CHANGE_AUTHEDUSER = 'CHANGE_AUTHEDUSER'

export function receiveAuthedUser(id) {
    return {
        type: RECEIVE_AUTHEDUSER,
        id,
    }
}

export function changeAuthedUser(id) {
    return {
        type: CHANGE_AUTHEDUSER,
        id,
    }
}