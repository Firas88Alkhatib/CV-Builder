import { useSelector, useDispatch } from 'react-redux'
import { updatePreviewModeAction } from '../Redux/Actions/UpdatePreviewModeAction.ts'
import Templates from '../Templates'
import ApplicationState from 'Types/ApplicationState'

const PreviewMode = () => {
  const dispatch = useDispatch()
  const currentTemplate = useSelector<ApplicationState, string>(state => state.currentTemplate)
  const onClickHandler = () => {
    dispatch(updatePreviewModeAction(false))
  }
  const CurrentTemplate = Templates[currentTemplate as keyof typeof Templates]
  return (
    <div className="preview-mode">
      <div className="preview-mode-header" onClick={onClickHandler}>
        <span>Back to edit</span>
      </div>
      <div className="preview-mode-body">
        <CurrentTemplate isMobileView={true} />
      </div>
    </div>
  )
}

export default PreviewMode
