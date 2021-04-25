import actions from "../Actions"

export const updateLanguageAction  = (id:string,fieldName:string,value:string)=>{
    return {
      type: actions.UPDATE_LANGUAGE,
            payload: {
              id,
              value: { [fieldName]: value },
            },
    }
  }