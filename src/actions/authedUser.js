export const RECEIVE_AUTHEDUSER = 'RECEIVE_AUTHEDUSER'

export function receiveAuthedUser(id) {
    return {
        type: RECEIVE_AUTHEDUSER,
        id,
    }
}