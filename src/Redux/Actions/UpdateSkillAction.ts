import actions from "../Actions"

export const updateSkillAction = (id:string,fieldName:string,value:string)=>{
    return {
      type: actions.UPDATE_SKILL,
            payload: {
              id,
              value: { [fieldName]: value },
            },
    }
  }