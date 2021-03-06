import actions from '../Actions'

export const updateEducationAction = (id: number, fieldName: string, value: string) => {
  return {
    type: actions.UPDATE_EDUCATION,
    payload: {
      id,
      value: { [fieldName]: value }
    }
  }
}
