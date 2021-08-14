export const RECEIVE_AUTHEDUSER = 'RECEIVE_AUTHEDUSER'

export function receiveAuthedUser(authedUser) {
    return {
        type: RECEIVE_AUTHEDUSER,
        authedUser,
    }
}