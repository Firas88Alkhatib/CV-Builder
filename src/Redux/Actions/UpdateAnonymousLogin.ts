import actions from '../Actions'

export const UpdateAnonymousLogin = (value: boolean) => {
  return {
    type: actions.UPDATE_ANONYMOUS_LOGIN,
    payload: value
  }
}
