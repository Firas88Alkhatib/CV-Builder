import actions from '../Actions'

export const updateLinkAction = (id: string, fieldName: string, value: string) => {
  return {
    type: actions.UPDATE_LINK,
    payload: {
      id,
      value: { [fieldName]: value }
    }
  }
}
