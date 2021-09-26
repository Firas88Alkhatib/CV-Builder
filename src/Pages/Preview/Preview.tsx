import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Templates from 'Templates'
import ApplicationState from 'Types/ApplicationState'

const PreviewMode = () => {
  const history = useHistory()
  const currentTemplate = useSelector<ApplicationState, string>(state => state.currentTemplate)
  const onClickHandler = () => {
    history.push('/')
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
