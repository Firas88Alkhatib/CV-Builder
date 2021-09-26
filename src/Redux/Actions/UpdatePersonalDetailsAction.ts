import actions from '../Actions'

export const updatePersonalDetailsAction = (id: string, fieldName: string, value: string) => {
  return {
    type: actions.UPDATE_PERSONAL_DETAILS,
    payload: {
      id,
      value: { [fieldName]: value }
    }
  }
}
