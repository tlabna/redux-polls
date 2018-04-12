export const RECEIVE_POLLS = 'RECEIVE_POLLS'

export function receiveUsers(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}
