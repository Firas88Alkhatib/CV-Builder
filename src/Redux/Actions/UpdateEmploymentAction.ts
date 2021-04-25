import actions from "../Actions"

export const updateEmploymentAction  = (id:string,fieldName:string,value:string)=>{
    return {
      type: actions.UPDATE_EMPLOYMENT,
            payload: {
              id,
              value: { [fieldName]: value },
            },
    }
  }