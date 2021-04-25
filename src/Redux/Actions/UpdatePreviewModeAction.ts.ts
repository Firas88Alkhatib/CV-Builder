import actions from "../Actions"

export const updatePreviewModeAction  = (value:boolean)=>{
    return {
      type: actions.UPDATE_PREVIEW_MODE,
            payload: {
              value
            },
    }
  }